import axios, { AxiosRequestConfig } from "axios";
import crypto from "crypto";

import { BinanceError } from "../errors";

// Create an Axios instance
const binanceApi = axios.create({
  baseURL: "https://api.binance.com",
  timeout: 5000, // Set a timeout of 5 seconds
});

// Retry configuration
const MAX_RETRIES = 3;

// Utility function for constant delay (backoff)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Utility function to generate query string from params
const generateQueryString = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    const value = params[key];

    if (Array.isArray(value)) {
      // Serialize the array as a JSON string
      searchParams.append(key, JSON.stringify(value));
    } else {
      searchParams.append(key, value);
    }
  }

  return searchParams.toString();
};

// Utility function to generate HMAC SHA256 signature
const generateHMACSignature = (
  queryString: string,
  secretKey: string
): string => {
  return crypto
    .createHmac("sha256", secretKey)
    .update(queryString)
    .digest("hex");
};

// Utility function to generate RSA SHA256 signature
const generateRSASignature = (
  queryString: string,
  privateKey: string
): string => {
  const signer = crypto.createSign("SHA256");
  signer.update(queryString);
  signer.end();
  return signer.sign(privateKey, "base64"); // Return signature in base64 format
};

// Request interceptor: convert params to query string and generate signature based on the keys provided
binanceApi.interceptors.request.use(
  (config) => {
    if (config.params) {
      // Convert params to query string
      const queryString = generateQueryString(config.params);

      // Append query string to URL if not empty
      config.url! += queryString ? "?" + queryString : "";

      // If authentication is provided
      if (config.authentication) {
        const { apiKey, secretKey, privateKey } = config.authentication;

        if (apiKey) {
          const timestamp = config.params.timestamp || Date.now();
          config.url! +=
            (config.url!.includes("?") ? "&" : "?") + `timestamp=${timestamp}`;

          // Generate the full query string including the timestamp
          const fullQueryString = config.url!.split("?")[1] || "";
          let signature: string;

          // Determine the signing method based on the type of authentication
          if (secretKey) {
            // Generate HMAC signature
            signature = generateHMACSignature(fullQueryString, secretKey);
          } else if (privateKey) {
            // Generate RSA signature
            signature = generateRSASignature(fullQueryString, privateKey);
          } else {
            throw new Error("Invalid authentication method.");
          }

          // Append the signature to the query string
          config.url! += `&signature=${signature}`;

          config.headers.set("X-MBX-APIKEY", apiKey); // Add the API key to headers
        }
      }
    }

    config.params = {}; // Clear params since we're converting them to query string

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling retries based on specific error codes
binanceApi.interceptors.response.use(
  (response) => {
    // If the response is successful, return the data
    return response;
  },
  async (error) => {
    const config = error.config as AxiosRequestConfig;

    // Initialize __retryCount if not already present
    if (config.__retryCount === undefined) {
      config.__retryCount = 0;
    }

    // Case: General 5xx errors (500-599) or timeout/network issues
    if (
      !error.response ||
      (error.response.status >= 500 && error.response.status <= 599) ||
      error.code === "ECONNABORTED"
    ) {
      if (config.__retryCount < MAX_RETRIES) {
        config.__retryCount += 1;
        console.log(
          `Retry attempt #${config.__retryCount} due to network/server error`
        );
        if (error.response) {
          console.log(
            `Status code: ${error.response.status}, ErrorCode: ${
              error.response.data?.code || "N/A"
            }`
          );
        }

        // Exponential backoff (e.g., retry after 1s, 2s, 4s)
        await delay(1000 * Math.pow(2, config.__retryCount - 1));
        return binanceApi(config);
      }
    } else {
      const statusCode = error.response.status;
      const errorCode = error.response.data?.code;

      // // Case: SYSTEM BUSY (error 3044)
      // if (errorCode === 3044) {
      //   if (config.__retryCount < MAX_RETRIES) {
      //     config.__retryCount += 1;
      //     console.log(
      //       `Retry attempt #${config.__retryCount} due to SYSTEM BUSY (3044)`
      //     );

      //     // Constant backoff (e.g., retry every 1 seconds)
      //     await delay(1000);
      //     return binanceApi(config);
      //   }
      // }

      // Case: Too Many Requests (429) or I'm a Teapot (418)
      if (statusCode === 429 || statusCode === 418) {
        const retryAfter = error.response.headers["retry-after"];
        if (retryAfter && config.__retryCount < MAX_RETRIES) {
          config.__retryCount += 1;
          console.log(
            `Retry attempt #${config.__retryCount} due to status ${statusCode}. Backoff for ${retryAfter} seconds`
          );

          // Retry after the specified time in the 'Retry-After' header
          await delay(parseInt(retryAfter) * 1000);
          return binanceApi(config);
        }
      }
    }

    // If all retries are exhausted or the error is not handled, reject the promise
    if (
      error.response &&
      error.response.data &&
      error.response.data.msg &&
      error.response.data.code
    ) {
      throw new BinanceError(error.response.data.msg, error.response.data.code);
    }
    throw error; // TODO: not sure about this line
  }
);

export { binanceApi };
