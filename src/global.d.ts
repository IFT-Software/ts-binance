// src/global.d.ts
import "axios"; // Import axios types
import type { Authentication } from "./types"; // Import custom types

// Augment Axios types
declare module "axios" {
  export interface AxiosRequestConfig {
    authentication?: Authentication;
    __retryCount?: number;
  }
}
