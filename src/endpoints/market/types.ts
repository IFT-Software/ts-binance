export type CheckServerTimeResponse = {
  serverTime: number;
};

type SymbolInfo = {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  orderTypes: string[]; //TODO: enum
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  allowTrailingStop: boolean;
  cancelReplaceAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: any[]; //TODO: change this
  permissions: string[];
  permissionSets: string[][];
  defaultSelfTradePreventionMode: string;
  allowedSelfTradePreventionModes: string[];
};

type RateLimit = {
  rateLimitType: "REQUEST_WEIGHT" | "ORDERS" | "RAW_REQUESTS";
  interval: string;
  intervalNum: number;
  limit: number;
};

// TODO: check this
export type GetExchangeInfoResponse = {
  timezone: string;
  serverTime: number;
  rateLimits: RateLimit[];
  exchangeFilters: any[]; //TODO: change this
  symbols: SymbolInfo[];
};

export type GetOrderBookResponse = {
  lastUpdateId: number;
  bids: string[][];
  asks: string[][];
};

export type GetTradesResponse = {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}[];

export type GetAggregateTradesResponse = {
  a: number; // Aggregate tradeId
  p: string; // Price
  q: string; // Quantity
  f: number; // First tradeId
  l: number; // Last tradeId
  T: number; // Timestamp
  m: boolean; // Was the buyer the maker?
  M: boolean; // Was the trade the best price match?
};

export type GetKlinesResponse = [
  number, // Kline open time (timestamp)
  string, // Open price
  string, // High price
  string, // Low price
  string, // Close price
  string, // Volume
  number, // Kline close time (timestamp)
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string // Unused field (ignored)
][];

export type GetCurrentAveragePriceResponse = {
  mins: number; // Average price interval (in minutes)
  price: string; // Average price
  closeTime: number; // Last trade time (timestamp)
};

type TickerInfo = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number; // First tradeId
  lastId: number; // Last tradeId
  count: number; // Trade count
};

type MiniTickerInfo = {
  symbol: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export type GetPriceChangeStatsResponse =
  | TickerInfo
  | TickerInfo[]
  | MiniTickerInfo
  | MiniTickerInfo[];

type TradingDayTickerInfo = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number; // Trade ID of the first trade in the interval
  lastId: number; // Trade ID of the last trade in the interval
  count: number; // Number of trades in the interval
};

type TradingDayMiniTickerInfo = {
  symbol: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number; // Trade ID of the first trade in the interval
  lastId: number; // Trade ID of the last trade in the interval
  count: number; // Number of trades in the interval
};

export type GetTradingDayTickerResponse =
  | TradingDayTickerInfo
  | TradingDayTickerInfo[]
  | TradingDayMiniTickerInfo
  | TradingDayMiniTickerInfo[];

export type GetSymbolPriceTickerResponse =
  | {
      symbol: string;
      price: string;
    }
  | {
      symbol: string;
      price: string;
    }[];

type OrderBookOrder = {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
};

export type GetSymbolOrderBookTickerResponse =
  | OrderBookOrder
  | OrderBookOrder[];

export type GetRollingWindowPriceChangeStatsResponse =
  | TradingDayTickerInfo
  | TradingDayTickerInfo[]
  | TradingDayMiniTickerInfo
  | TradingDayMiniTickerInfo[];
