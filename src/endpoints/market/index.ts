import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client

async function testConnectivity(proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ping", {
    httpsAgent,
  });
  return response.data;
}

async function checkServerTime(proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/time", {
    httpsAgent,
  });
  return response.data;
}

interface ExchangeInfoParams {
  symbol?: string;
  symbols?: Array<string>;
  permissions?: Array<string>;
}

// Get Exchange Information
async function getExchangeInfo(
  params?: ExchangeInfoParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/exchangeInfo", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface OrderBookParams {
  symbol: string;
  limit?: number;
}

// Get Order Book
async function getOrderBook(params: OrderBookParams, proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/depth", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface RecentTradesParams {
  symbol: string;
  limit?: number;
}

// Get Recent Trades
async function getRecentTrades(
  params: RecentTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/trades", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface HistoricalTradesParams {
  symbol: string;
  limit?: number;
  fromId?: number;
}

// Get Historical Trades
async function getHistoricalTrades(
  params: HistoricalTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/historicalTrades", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface AggregateTradesParams {
  symbol: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

// Get Aggregate Trades
async function getAggregateTrades(
  params: AggregateTradesParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/aggTrades", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface KlineParams {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

// Get Kline/Candlestick Data
async function getKlines(params: KlineParams, proxy?: URL | string) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/klines", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface UIKlinesParams {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  timeZone?: string;
  limit?: number;
}

// Get Kline/Candlestick Data (UI)
async function getUIKlines(params: UIKlinesParams, proxy?: URL | string) {
  const httpsAgent = proxy ? new HttpsProxyAgent({ proxy }) : undefined;

  const response = await binanceApi.get("/api/v3/uiKlines", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface CurrentAveragePriceParams {
  symbol: string;
}

// Get Current Average Price
async function getCurrentAveragePrice(
  params: CurrentAveragePriceParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/avgPrice", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface PriceChangeStatsParams {
  symbol?: string;
}

// Get 24hr Price Change Statistics
async function getPriceChangeStats(
  params?: PriceChangeStatsParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/24hr", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface TradingDayTickerParamsSymbol {
  symbol: string;
  timeZone?: string;
  type?: string;
}

interface TradingDayTickerParamsSymbols {
  symbols: Array<string>;
  timeZone?: string;
  type?: string;
}

// Get Trading Day Ticker
async function getTradingDayTicker(
  params: TradingDayTickerParamsSymbol | TradingDayTickerParamsSymbols,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/tradingDay", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface SymbolPriceTickerParams {
  symbol?: string;
  symbols?: Array<string>;
}

// Get Symbol Price Ticker
async function getSymbolPriceTicker(
  params?: SymbolPriceTickerParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/price", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface SymbolOrderBookTickerParams {
  symbol?: string;
  symbols?: Array<string>;
}

// Get Symbol Order Book Ticker
async function getSymbolOrderBookTicker(
  params?: SymbolOrderBookTickerParams,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker/bookTicker", {
    params,
    httpsAgent,
  });
  return response.data;
}

interface RollingWindowPriceChangeStatsParamsSymbol {
  symbol: string;
  windowSize?: string; // TODO: this is an enum in the API docs
  type?: string; // TODO: this is an enum in the API docs
}

interface RollingWindowPriceChangeStatsParamsSymbols {
  symbols: Array<string>;
  windowSize?: string; // TODO: this is an enum in the API docs
  type?: string; // TODO: this is an enum in the API docs
}

// Get Rolling Window Price Change Statistics
async function getRollingWindowPriceChangeStats(
  params:
    | RollingWindowPriceChangeStatsParamsSymbol
    | RollingWindowPriceChangeStatsParamsSymbols,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/ticker", {
    params,
    httpsAgent,
  });
  return response.data;
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
  ExchangeInfoParams,
  OrderBookParams,
  RecentTradesParams,
  HistoricalTradesParams,
  AggregateTradesParams,
  KlineParams,
  UIKlinesParams,
  CurrentAveragePriceParams,
  PriceChangeStatsParams,
  TradingDayTickerParamsSymbol,
  TradingDayTickerParamsSymbols,
  SymbolPriceTickerParams,
  SymbolOrderBookTickerParams,
  RollingWindowPriceChangeStatsParamsSymbol,
  RollingWindowPriceChangeStatsParamsSymbols,
};
