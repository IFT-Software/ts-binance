import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client
import {
  CheckServerTimeResponse,
  GetExchangeInfoResponse,
  GetTradesResponse,
  GetOrderBookResponse,
  GetAggregateTradesResponse,
  GetKlinesResponse,
  GetCurrentAveragePriceResponse,
  GetPriceChangeStatsResponse,
  GetTradingDayTickerResponse,
  GetSymbolPriceTickerResponse,
  GetSymbolOrderBookTickerResponse,
  GetRollingWindowPriceChangeStatsResponse,
} from "./types";

async function testConnectivity(proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ping", {
    httpsAgent,
  });
  return response.data as {};
}

async function checkServerTime(proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/time", {
    httpsAgent,
  });
  return response.data as CheckServerTimeResponse;
}

type GetExchangeInfoParams = {
  symbol?: string;
  symbols?: Array<string>;
  permissions?: Array<string>;
};

// Get Exchange Information
async function getExchangeInfo(
  params?: GetExchangeInfoParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/exchangeInfo", {
    params,
    httpsAgent,
  });
  return response.data as GetExchangeInfoResponse;
}

type GetOrderBookParams = {
  symbol: string;
  limit?: number;
};

// Get Order Book
async function getOrderBook(params: GetOrderBookParams, proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/depth", {
    params,
    httpsAgent,
  });
  return response.data as GetOrderBookResponse;
}

type GetRecentTradesParams = {
  symbol: string;
  limit?: number;
};

// Get Recent Trades
async function getRecentTrades(
  params: GetRecentTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/trades", {
    params,
    httpsAgent,
  });
  return response.data as GetTradesResponse;
}

type GetHistoricalTradesParams = {
  symbol: string;
  limit?: number;
  fromId?: number;
};

// Get Historical Trades
async function getHistoricalTrades(
  params: GetHistoricalTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/historicalTrades", {
    params,
    httpsAgent,
  });
  return response.data as GetTradesResponse;
}

type GetAggregateTradesParams = {
  symbol: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
};

// Get Aggregate Trades
async function getAggregateTrades(
  params: GetAggregateTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/aggTrades", {
    params,
    httpsAgent,
  });
  return response.data as GetAggregateTradesResponse;
}

type GetKlinesParams = {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
};

// Get Kline/Candlestick Data
async function getKlines(params: GetKlinesParams, proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/klines", {
    params,
    httpsAgent,
  });
  return response.data as GetKlinesResponse;
}

type GetUIKlinesParams = {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  timeZone?: string;
  limit?: number;
};

// Get Kline/Candlestick Data (UI)
async function getUIKlines(params: GetUIKlinesParams, proxy?: URL | string) {
  const httpsAgent = proxy ? new HttpsProxyAgent({ proxy }) : undefined;

  const response = await binanceApi.get("/api/v3/uiKlines", {
    params,
    httpsAgent,
  });
  return response.data as GetKlinesResponse;
}

type GetCurrentAveragePriceParams = {
  symbol: string;
};

// Get Current Average Price
async function getCurrentAveragePrice(
  params: GetCurrentAveragePriceParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/avgPrice", {
    params,
    httpsAgent,
  });
  return response.data as GetCurrentAveragePriceResponse;
}

type GetPriceChangeStatsParams = {
  symbol?: string;
};

// Get 24hr Price Change Statistics
async function getPriceChangeStats(
  params?: GetPriceChangeStatsParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/24hr", {
    params,
    httpsAgent,
  });
  return response.data as GetPriceChangeStatsResponse;
}

type TradingDayTickerParamsSymbol = {
  symbol: string;
  timeZone?: string;
  type?: string;
};

type TradingDayTickerParamsSymbols = {
  symbols: Array<string>;
  timeZone?: string;
  type?: string;
};

type GetTradingDayTickerParams =
  | TradingDayTickerParamsSymbol
  | TradingDayTickerParamsSymbols;

// Get Trading Day Ticker
async function getTradingDayTicker(
  params: GetTradingDayTickerParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/tradingDay", {
    params,
    httpsAgent,
  });
  return response.data as GetTradingDayTickerResponse;
}

type GetSymbolPriceTickerParams = {
  symbol?: string;
  symbols?: Array<string>;
};

// Get Symbol Price Ticker
async function getSymbolPriceTicker(
  params?: GetSymbolPriceTickerParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/price", {
    params,
    httpsAgent,
  });
  return response.data as GetSymbolPriceTickerResponse;
}

type GetSymbolOrderBookTickerParams = {
  symbol?: string;
  symbols?: Array<string>;
};

// Get Symbol Order Book Ticker
async function getSymbolOrderBookTicker(
  params?: GetSymbolOrderBookTickerParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/bookTicker", {
    params,
    httpsAgent,
  });
  return response.data as GetSymbolOrderBookTickerResponse;
}

type RollingWindowPriceChangeStatsParamsSymbol = {
  symbol: string;
  windowSize?: string; // TODO: this is an enum in the API docs
  type?: string; // TODO: this is an enum in the API docs
};

type RollingWindowPriceChangeStatsParamsSymbols = {
  symbols: Array<string>;
  windowSize?: string; // TODO: this is an enum in the API docs
  type?: string; // TODO: this is an enum in the API docs
};

type GetRollingWindowPriceChangeStatsParams =
  | RollingWindowPriceChangeStatsParamsSymbol
  | RollingWindowPriceChangeStatsParamsSymbols;

// Get Rolling Window Price Change Statistics
async function getRollingWindowPriceChangeStats(
  params: GetRollingWindowPriceChangeStatsParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker", {
    params,
    httpsAgent,
  });
  return response.data as GetRollingWindowPriceChangeStatsResponse;
}

const market = {
  testConnectivity,
  checkServerTime,
  getExchangeInfo,
  getOrderBook,
  getRecentTrades,
  getHistoricalTrades,
  getAggregateTrades,
  getKlines,
  getUIKlines,
  getCurrentAveragePrice,
  getPriceChangeStats,
  getTradingDayTicker,
  getSymbolPriceTicker,
  getSymbolOrderBookTicker,
  getRollingWindowPriceChangeStats,
};

export { market };

export type {
  GetExchangeInfoParams,
  GetOrderBookParams,
  GetRecentTradesParams,
  GetHistoricalTradesParams,
  GetAggregateTradesParams,
  GetKlinesParams,
  GetUIKlinesParams,
  GetCurrentAveragePriceParams,
  GetPriceChangeStatsParams,
  GetTradingDayTickerParams,
  GetSymbolPriceTickerParams,
  GetSymbolOrderBookTickerParams,
  GetRollingWindowPriceChangeStatsParams,
};
