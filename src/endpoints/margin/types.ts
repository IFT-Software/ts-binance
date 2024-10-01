export type MarginBorrowRepayResponse = {
  tranId: number;
};

export type AllMarginAssetsResponse = {
  assetFullName: string;
  assetName: string;
  isBorrowable: boolean;
  isMortgageable: boolean;
  userMinBorrow: string;
  userMinRepay: string;
  delistTime: number;
}[];

export type AllCrossMarginPairsResponse = {
  base: string;
  id: number;
  isBuyAllowed: boolean;
  isMarginTrade: boolean;
  isSellAllowed: boolean;
  quote: string;
  symbol: string;
  delistTime?: number; // Optional, since not all objects have it
}[];

export type MarginPriceIndexResponse = {
  calcTime: number;
  price: string;
  symbol: string;
};

export type CreateMarginOrderResponse = {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  transactTime: number;
  price?: string;
  origQty?: string;
  executedQty?: string;
  cummulativeQuoteQty?: string;
  status?: string;
  timeInForce?: string;
  type?: string;
  isIsolated?: boolean;
  side?: string;
  selfTradePreventionMode?: string;
  marginBuyBorrowAmount?: number;
  marginBuyBorrowAsset?: string;
  fills?: {
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
  }[];
};

export type CancelMarginOrderResponse = {
  symbol: string;
  isIsolated?: boolean;
  orderId: string;
  origClientOrderId: string;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
};

type OrderReport = {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  stopPrice?: string; // Optional for specific order types
  icebergQty?: string; // Optional for specific order types.
};

type CanceledOrder = {
  symbol: string;
  isIsolated?: boolean;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  selfTradePreventionMode: string;
};

type OCOOrderList = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  isIsolated?: boolean;
  orders: {
    symbol: string;
    orderId: number;
    clientOrderId: string;
  }[];
  orderReports: OrderReport[];
};

export type CancelAllMarginOrdersResponse = (CanceledOrder | OCOOrderList)[];

type SuccessResponse = {
  success: boolean;
};

export type AdjustCrossMarginLeverageResponse = SuccessResponse;

// TODO: rename
enum TransferType {
  SPOT = "SPOT",
  FUTURES = "FUTURES",
  FIAT = "FIAT",
  DELIVERY = "DELIVERY",
  MINING = "MINING",
  ISOLATED_MARGIN = "ISOLATED_MARGIN",
  FUNDING = "FUNDING",
  MOTHER_SPOT = "MOTHER_SPOT",
  OPTION = "OPTION",
  SUB_SPOT = "SUB_SPOT",
  SUB_MARGIN = "SUB_MARGIN",
  CROSS_MARGIN = "CROSS_MARGIN",
}

export type MarginTransferHistoryResponse = {
  rows: {
    amount: string;
    asset: string;
    status: string;
    timestamp: number;
    txId: number;
    type: "ROLL_IN" | "ROLL_OUT";
    transFrom?: TransferType;
    transTo?: TransferType;
    fromSymbol?: string;
    toSymbol?: string;
  }[];
  total: number;
};

export type GetMarginInterestHistoryResponse = {
  rows: {
    txId: number;
    interestAccuredTime: number;
    asset: string;
    rawAsset?: string; // Optional, not returned for isolated margin
    principal: string;
    interest: string;
    interestRate: string;
    type: string;
    isolatedSymbol?: string; // Optional, not returned for crossed margin
  }[];
  total: number;
};

export type GetMarginForceLiquidationRecordResponse = {
  rows: {
    avgPrice: string;
    executedQty: string;
    orderId: number;
    price: string;
    qty: string;
    side: string; //TODO: enum?
    symbol: string;
    timeInForce: string; //TODO: enum?
    isIsolated?: boolean;
    updatedTime: number;
  }[];
  total: number;
};

type UserAsset = {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
};

export type GetCrossMarginAccountDetailsResponse = {
  created: boolean; // True means margin account created, false means margin account not created
  borrowEnabled: boolean;
  marginLevel: string;
  collateralMarginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  totalCollateralValueInUSDT: string;
  tradeEnabled: boolean;
  transferEnabled: boolean;
  accountType: "MARGIN_1" | "MARGIN_2"; // "MARGIN_1" for Cross Margin Classic, "MARGIN_2" for Cross Margin Pro TODO: anything else? enum?
  userAssets: UserAsset[];
};

export type GetMarginOrderResponse = {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: string;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: string; //TODO: "BUY" | "SELL" enum
  status: string; //TODO: enum
  stopPrice: string;
  symbol: string;
  isIsolated?: boolean;
  time: number; // Unix timestamp in milliseconds
  timeInForce: string; //TODO: "GTC" | "IOC" | "FOK" enum
  type: string; //TODO: enum
  selfTradePreventionMode: string; //TODO: enum
  updateTime: number; // Unix timestamp in milliseconds
};

export type GetMarginOpenOrdersResponse = GetMarginOrderResponse[];

export type GetMarginAllOrdersResponse = GetMarginOrderResponse[];

export type CreateMarginOcoOrderResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  marginBuyBorrowAmount?: string; // Optional, as it may not be present if no margin trade happens
  marginBuyBorrowAsset?: string; // Optional, as it may not be present if no margin trade happens
  isIsolated?: boolean;
  orders: {
    symbol: string;
    orderId: number;
    clientOrderId: string;
  }[];
  orderReports: {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: string; // You can replace with an enum if needed
    timeInForce: string; // You can replace with an enum if needed
    type: string; // You can replace with an enum if needed
    side: string; // "BUY" | "SELL"
    stopPrice?: string; // Optional for specific order types
    selfTradePreventionMode: string; // You can replace with an enum if needed
  }[];
};

export type CancelMarginOcoOrderResponse = OCOOrderList;

export type GetMarginOcoOrderResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  isIsolated?: boolean;
  orders: {
    symbol: string;
    orderId: number;
    clientOrderId: string;
  };
};

export type GetMarginAllOcoOrdersResponse = GetMarginOcoOrderResponse[];

export type GetMarginOpenOcoOrdersResponse = GetMarginOcoOrderResponse[];

export type GetMarginAccountTradeListResponse = {
  commission: string;
  commissionAsset: string;
  id: number;
  isBestMatch: boolean;
  isBuyer: boolean;
  isMaker: boolean;
  orderId: number;
  price: string;
  qty: string;
  symbol: string;
  isIsolated: boolean;
  time: number; // Unix timestamp in milliseconds
}[];

export type GetMarginMaxBorrowableResponse = {
  amount: string;
  borrowLimit: string;
};

export type GetMarginMaxTransferableResponse = {
  amount: string;
};

export type GetMarginAccountSummaryResponse = {
  normalBar: string;
  marginCallBar: string;
  forceLiquidationBar: string;
};

type AssetDetails = {
  asset: string;
  borrowEnabled: boolean;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
  netAssetOfBtc: string;
  repayEnabled: boolean;
  totalAsset: string;
};

type IsolatedMarginAsset = {
  baseAsset: AssetDetails;
  quoteAsset: AssetDetails;
  symbol: string;
  isolatedCreated: boolean;
  enabled: boolean; // true-enabled, false-disabled
  marginLevel: string;
  // marginLevelStatus: string; //TODO: enum? // "EXCESSIVE", "NORMAL", "MARGIN_CALL", "PRE_LIQUIDATION", "FORCE_LIQUIDATION" (from binance api)
  marginRatio: string;
  indexPrice: string;
  liquidatePrice: string;
  liquidateRate: string;
  tradeEnabled: boolean;
};

export type GetIsolatedMarginAcccountInfoResponse = {
  assets: IsolatedMarginAsset[];
  totalAssetOfBtc?: string; // if symbols are sent
  totalLiabilityOfBtc?: string; // if symbols are sent
  totalNetAssetOfBtc?: string; // if symbols are sent
};

type IsolatedMarginAccountStatusResponse = {
  success: boolean;
  symbol: string;
};

export type DisableIsolatedMarginAccountResponse =
  IsolatedMarginAccountStatusResponse;

export type EnableIsolatedMarginAccountResponse =
  IsolatedMarginAccountStatusResponse;

export type GetIsolatedMarginAccountLimitResponse = {
  enabledAccount: number;
  maxAccount: number;
};

export type GetAllIsolatedMarginSymbolResponse = {
  base: string;
  isBuyAllowed: boolean;
  isMarginTrade: boolean;
  isSellAllowed: boolean;
  quote: string;
  symbol: string;
  delistTime?: number; // Optional because it's only present in some objects
}[];

type BnbBurnStatusResponse = {
  spotBNBBurn: boolean;
  interestBNBBurn: boolean;
};

export type ToggleBnbBurnStatusResponse = BnbBurnStatusResponse;

export type GetBnbBurnStatusResponse = BnbBurnStatusResponse;

export type GetMarginInterestRateHistoryResponse = {
  asset: string;
  dailyInterestRate: string;
  timestamp: number; // Unix timestamp in milliseconds
  vipLevel: number;
}[];

export type GetCrossMarginFeeDataResponse = {
  vipLevel: number;
  coin: string;
  transferIn: boolean;
  borrowable: boolean;
  dailyInterest: string;
  yearlyInterest: string;
  borrowLimit: string;
  marginablePairs: string[];
}[];

export type GetIsolatedMarginFeeDataResponse = {
  vipLevel: number;
  symbol: string;
  leverage: string;
  data: { coin: string; dailyInterest: string; borrowLimit: string }[];
}[];

export type GetIsolatedMarginTierDataResponse = {
  symbol: string;
  tier: number;
  effectiveMultiple: string;
  initialRiskRatio: string;
  liquidationRiskRatio: string;
  baseAssetMaxBorrowable: string;
  quoteAssetMaxBorrowable: string;
}[];

export type GetCurrentMarginOrderCountResponse = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
  count: number;
}[];

export type GetCrossMarginCollateralRatioResponse = {
  collaterals: {
    minUsdValue: string;
    maxUsdValue?: string; // Optional, as it's not always present
    discountRate: string;
  }[];
  assetNames: string[];
}[];

export type GetSmallLiabilityExchangeCoinListResponse = {
  asset: string;
  interest: string;
  principal: string;
  liabilityAsset: string;
  liabilityQty: number;
}[];

export type GetNextHourlyInterestRateResponse = {
  asset: string;
  nextHourlyInterestRate: string;
}[];

export type GetMarginCapitalFlowResponse = {
  id: number;
  tranId: number;
  timestamp: number; // Unix timestamp in milliseconds
  asset: string;
  symbol: string;
  type: string; //TODO: enum
  amount: string;
}[];

type MarginDelistInfo = {
  delistTime: number; // Unix timestamp in milliseconds
  crossMarginAssets: string[];
  isolatedMarginSymbols: string[];
};

export type GetMarginDelistScheduleResponse = (
  | MarginDelistInfo
  | { updateTime: number }
)[];

export type GetMarginAvailableInventoryResponse = {
  assets: {
    [asset: string]: string; // Index signature for dynamic asset names
  };
  updateTime: number; // Unix timestamp
};

export type LiquidateMarginSymbolManuallyResponse = {
  asset: string;
  interest: string;
  principal: string;
  liabilityAsset: string;
  liabilityQty: number;
}[];

export type GetMarginLeverageBracketResponse = {
  assetNames: string[];
  rank: number;
  brackets: {
    leverage: number;
    maxDebt: number;
    maintenanceMarginRate: number;
    initialMarginRate: number;
    fastNum: number;
  }[];
}[];
