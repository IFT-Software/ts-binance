import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client
import type { Authentication } from "../../types";

import type {
  AdjustCrossMarginLeverageResponse,
  AllCrossMarginPairsResponse,
  AllMarginAssetsResponse,
  CancelAllMarginOrdersResponse,
  CancelMarginOcoOrderResponse,
  CancelMarginOrderResponse,
  CreateMarginOcoOrderResponse,
  CreateMarginOrderResponse,
  DisableIsolatedMarginAccountResponse,
  EnableIsolatedMarginAccountResponse,
  GetAllIsolatedMarginSymbolResponse,
  GetBnbBurnStatusResponse,
  GetCrossMarginAccountDetailsResponse,
  GetCrossMarginCollateralRatioResponse,
  GetCrossMarginFeeDataResponse,
  GetCurrentMarginOrderCountResponse,
  GetIsolatedMarginAccountLimitResponse,
  GetIsolatedMarginFeeDataResponse,
  GetIsolatedMarginTierDataResponse,
  GetMarginAccountSummaryResponse,
  GetMarginAccountTradeListResponse,
  GetMarginAllOcoOrdersResponse,
  GetMarginAllOrdersResponse,
  GetMarginAvailableInventoryResponse,
  GetMarginCapitalFlowResponse,
  GetMarginDelistScheduleResponse,
  GetMarginForceLiquidationRecordResponse,
  GetMarginInterestHistoryResponse,
  GetMarginInterestRateHistoryResponse,
  GetMarginLeverageBracketResponse,
  GetMarginMaxBorrowableResponse,
  GetMarginMaxTransferableResponse,
  GetMarginOcoOrderResponse,
  GetMarginOpenOcoOrdersResponse,
  GetMarginOpenOrdersResponse,
  GetMarginOrderResponse,
  GetNextHourlyInterestRateResponse,
  GetSmallLiabilityExchangeCoinListResponse,
  LiquidateMarginSymbolManuallyResponse,
  MarginBorrowRepayResponse,
  MarginPriceIndexResponse,
  MarginTransferHistoryResponse,
  ToggleBnbBurnStatusResponse,
} from "./types";

// TODO: convert all interfaces to types.
type MarginBorrowRepayParams = {
  asset: string;
  isIsolated: "TRUE" | "FALSE";
  symbol?: string;
  amount: number;
  type: "BORROW" | "REPAY";
  recvWindow?: number;
  timestamp: number;
};

async function marginBorrowRepay(
  params: MarginBorrowRepayParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<MarginBorrowRepayResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/borrow-repay", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as MarginBorrowRepayResponse;
}

type MarginBorrowRepayRecordsParams = {
  asset?: string;
  isolatedSymbol?: string;
  txId?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  type: "BORROW" | "REPAY";
  recvWindow?: number;
  timestamp: number;
};

async function getMarginBorrowRepayRecords(
  params: MarginBorrowRepayRecordsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<MarginBorrowRepayResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/borrow-repay", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as MarginBorrowRepayResponse;
}

type AllMarginAssetsParams = {
  asset?: string;
};

async function getAllMarginAssets(
  params: AllMarginAssetsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<AllMarginAssetsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/allAssets", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as AllMarginAssetsResponse;
}

type AllCrossMarginPairsParams = {
  symbol?: string;
};

async function getAllCrossMarginPairs(
  params: AllCrossMarginPairsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<AllCrossMarginPairsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/allPairs", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as AllCrossMarginPairsResponse;
}

type MarginPriceIndexParams = {
  symbol: string;
};

async function getMarginPriceIndex(
  params: MarginPriceIndexParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<MarginPriceIndexResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/priceIndex", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as MarginPriceIndexResponse;
}

type CreateMarginOrderParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  side: "BUY" | "SELL";
  type: string; // TODO: this should be an enum
  quantity?: string;
  quoteOrderQty?: string;
  price?: string;
  stopPrice?: string;
  newClientOrderId?: string;
  icebergQty?: string;
  newOrderRespType?: string; // TODO: this should be an enum
  sideEffectType?: string; // TODO: this should be an enum
  timeInForce?: string; // TODO: this should be an enum
  selfTradePrevention?: string; // TODO: this should be an enum
  autoRepayAtCancel?: boolean;
  recvWindow?: number;
  timestamp: number;
};

async function createMarginOrder(
  params: CreateMarginOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<CreateMarginOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CreateMarginOrderResponse;
}

type CancelMarginOrderParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
  timestamp: number;
};

async function cancelMarginOrder(
  params: CancelMarginOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<CancelMarginOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/sapi/v1/margin/order", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as CancelMarginOrderResponse;
}

type CancelAllMarginOrdersParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  recvWindow?: number;
  timestamp: number;
};

async function cancelAllMarginOrders(
  params: CancelAllMarginOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<CancelAllMarginOrdersResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/sapi/v1/margin/openOrders", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as CancelAllMarginOrdersResponse;
}

type AdjustCrossMarginLeverageParams = {
  maxLeverage: number;
};

async function adjustCrossMarginLeverage(
  params: AdjustCrossMarginLeverageParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<AdjustCrossMarginLeverageResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/max-leverage", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as AdjustCrossMarginLeverageResponse;
}

type MarginTransferHistoryParams = {
  asset?: string;
  type?: "ROLL_IN" | "ROLL_OUT";
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  isolatedSymbol?: string;
  recvWindow?: number;
  timestamp: number;
};

// TODO: test this function to understand whether is it only for cross margin or not
async function getMarginTransferHistory(
  params: MarginTransferHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<MarginTransferHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/transfer", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as MarginTransferHistoryResponse;
}

// TODO: inconsistent naming convention
type GetMarginInterestHistoryParams = {
  asset?: string;
  isolatedSymbol?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginInterestHistory(
  params: GetMarginInterestHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginInterestHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/interestHistory", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginInterestHistoryResponse;
}

type GetMarginForceLiquidationRecordParams = {
  startTime?: number;
  endTime?: number;
  isolatedSymbol?: string;
  current?: number;
  size?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginForceLiquidationRecord(
  params: GetMarginForceLiquidationRecordParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginForceLiquidationRecordResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/forceLiquidationRec", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginForceLiquidationRecordResponse;
}

type GetCrossMarginAccountDetailsParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getCrossMarginAccountDetails(
  params: GetCrossMarginAccountDetailsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetCrossMarginAccountDetailsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetCrossMarginAccountDetailsResponse;
}

type GetMarginOrderParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginOrder(
  params: GetMarginOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginOrderResponse;
}

type GetMarginOpenOrdersParams = {
  symbol?: string;
  isIsolated?: "TRUE" | "FALSE";
  recvWindow?: number;
  timestamp: number;
};

async function getMarginOpenOrders(
  params: GetMarginOpenOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginOpenOrdersResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/openOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginOpenOrdersResponse;
}

type GetMarginAllOrdersParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginAllOrders(
  params: GetMarginAllOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginAllOrdersResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/allOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginAllOrdersResponse;
}

type CreateMarginOcoOrderParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  listClientOrderId?: string;
  side: "BUY" | "SELL";
  quantity: string;
  limitClientOrderId?: string;
  price: string;
  limitIcebergQty?: string;
  stopClientOrderId?: string;
  stopPrice: string;
  stopLimitPrice?: string;
  stopIcebergQty?: string;
  stopLimitTimeInForce?: string;
  newOrderRespType?: string;
  sideEffectType?: string;
  selfTradePreventionMode?: string;
  autoRepayAtCancel?: boolean;
  recvWindow?: number;
  timestamp: number;
};

async function createMarginOcoOrder(
  params: CreateMarginOcoOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<CreateMarginOcoOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/order/oco", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CreateMarginOcoOrderResponse;
}

type CancelMarginOcoOrderParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderListId?: number;
  listClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
  timestamp: number;
};

async function cancelMarginOcoOrder(
  params: CancelMarginOcoOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<CancelMarginOcoOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/sapi/v1/margin/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CancelMarginOcoOrderResponse;
}

type GetMarginOcoOrderParams = {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  orderListId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginOcoOrder(
  params: GetMarginOcoOrderParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginOcoOrderResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginOcoOrderResponse;
}

type GetMarginAllOcoOrdersParams = {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginAllOcoOrders(
  params: GetMarginAllOcoOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginAllOcoOrdersResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/allOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginAllOcoOrdersResponse;
}

type GetMarginOpenOcoOrdersParams = {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginOpenOcoOrders(
  params: GetMarginOpenOcoOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginOpenOcoOrdersResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/openOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginOpenOcoOrdersResponse;
}

type GetMarginAccountTradeListParams = {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginAccountTradeList(
  params: GetMarginAccountTradeListParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginAccountTradeListResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/myTrades", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginAccountTradeListResponse;
}

type GetMarginMaxBorrowableParams = {
  asset: string;
  isolatedSymbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginMaxBorrowable(
  params: GetMarginMaxBorrowableParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginMaxBorrowableResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/maxBorrowable", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginMaxBorrowableResponse;
}

type GetMarginMaxTransferableParams = {
  asset: string;
  isolatedSymbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginMaxTransferable(
  params: GetMarginMaxTransferableParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginMaxTransferableResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/maxTransferable", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginMaxTransferableResponse;
}

type GetMarginAccountSummaryParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getMarginAccountSummary(
  params: GetMarginAccountSummaryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginAccountSummaryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/tradeCoeff", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginAccountSummaryResponse;
}

type GetIsolatedMarginAccountInfoParams = {
  symbols?: Array<string>;
  recvWindow?: number;
  timestamp: number;
};

async function getIsolatedMarginAccountInfo(
  params: GetIsolatedMarginAccountInfoParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetIsolatedMarginAccountInfoParams> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/isolated/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetIsolatedMarginAccountInfoParams;
}

type DisableIsolatedMarginAccountParams = {
  symbol: string;
  recvWindow?: number;
  timestamp: number;
};

async function disableIsolatedMarginAccount(
  params: DisableIsolatedMarginAccountParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<DisableIsolatedMarginAccountResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/sapi/v1/margin/isolated/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as DisableIsolatedMarginAccountResponse;
}

type EnableIsolatedMarginAccountParams = {
  symbol: string;
  recvWindow?: number;
  timestamp: number;
};

async function enableIsolatedMarginAccount(
  params: EnableIsolatedMarginAccountParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<EnableIsolatedMarginAccountResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/isolated/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as EnableIsolatedMarginAccountResponse;
}

type GetIsolatedMarginAccountLimitParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getIsolatedMarginAccountLimit(
  params: GetIsolatedMarginAccountLimitParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetIsolatedMarginAccountLimitResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/margin/isolated/accountLimit",
    {
      params,
      authentication,
      httpsAgent,
    }
  );
  return response.data as GetIsolatedMarginAccountLimitResponse;
}

type GetAllIsolatedMarginSymbolParams = {
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getAllIsolatedMarginSymbol(
  params: GetAllIsolatedMarginSymbolParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAllIsolatedMarginSymbolResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/isolated/allPairs", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAllIsolatedMarginSymbolResponse;
}

type ToggleBnbBurnStatusParams = {
  spotBNBBurn?: boolean;
  interestBNBBurn?: boolean;
  recvWindow?: number;
  timestamp: number;
};

async function toggleBnbBurnStatus(
  params: ToggleBnbBurnStatusParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<ToggleBnbBurnStatusResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/bnbBurn", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as ToggleBnbBurnStatusResponse;
}

type GetBnbBurnStatusParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getBnbBurnStatus(
  params: GetBnbBurnStatusParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetBnbBurnStatusResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/bnbBurn", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetBnbBurnStatusResponse;
}

type GetMarginInterestRateHistoryParams = {
  asset: string;
  vipLevel?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginInterestRateHistory(
  params: GetMarginInterestRateHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginInterestRateHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/interestRateHistory", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginInterestRateHistoryResponse;
}

type GetCrossMarginFeeDataParams = {
  vipLevel?: number;
  coin?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getCrossMarginFeeData(
  params: GetCrossMarginFeeDataParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetCrossMarginFeeDataResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/crossMarginData", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetCrossMarginFeeDataResponse;
}

type GetIsolatedMarginFeeDataParams = {
  vipLevel?: number;
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getIsolatedMarginFeeData(
  params: GetIsolatedMarginFeeDataParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetIsolatedMarginFeeDataResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/isolatedMarginData", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetIsolatedMarginFeeDataResponse;
}

type GetIsolatedMarginTierDataParams = {
  symbol: string;
  tier?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getIsolatedMarginTierData(
  params: GetIsolatedMarginTierDataParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetIsolatedMarginTierDataResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/isolatedMarginTier", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetIsolatedMarginTierDataResponse;
}

type GetCurrentMarginOrderCountParams = {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getCurrentMarginOrderCount(
  params: GetCurrentMarginOrderCountParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetCurrentMarginOrderCountResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/rateLimit/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetCurrentMarginOrderCountResponse;
}

async function getCrossMarginCollateralRatio(
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetCrossMarginCollateralRatioResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/margin/crossMarginCollateralRatio",
    {
      authentication,
      httpsAgent,
    }
  );
  return response.data as GetCrossMarginCollateralRatioResponse;
}

type GetSmallLiabilityExchangeCoinListParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getSmallLiabilityExchangeCoinList(
  params: GetSmallLiabilityExchangeCoinListParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetSmallLiabilityExchangeCoinListResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/margin/exchange-small-liability",
    {
      params,
      authentication,
      httpsAgent,
    }
  );
  return response.data as GetSmallLiabilityExchangeCoinListResponse;
}

type GetNextHourlyInterestRateParams = {
  assets: string;
  isIsolated?: "TRUE" | "FALSE"; // TODO: In documentation it is written as "TRUE" | "FALSE" but type shown as boolean test it
};

async function getNextHourlyInterestRate(
  params: GetNextHourlyInterestRateParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetNextHourlyInterestRateResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/margin/next-hourly-interest-rate",
    {
      params,
      authentication,
      httpsAgent,
    }
  );
  return response.data as GetNextHourlyInterestRateResponse;
}

type GetMarginCapitalFlowParams = {
  asset?: string;
  symbol?: string;
  type?: string;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMarginCapitalFlow(
  params: GetMarginCapitalFlowParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginCapitalFlowResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/capital-flow", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginCapitalFlowResponse;
}

type GetMarginDelistScheduleParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getMarginDelistSchedule(
  params: GetMarginDelistScheduleParams, // TODO: Add more params
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginDelistScheduleResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/delist-schedule", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginDelistScheduleResponse;
}

type GetMarginAvailableInventoryParams = {
  type: "MARGIN" | "ISOLATED";
  recvWindow?: number;
  timestamp: number;
};

async function getMarginAvailableInventory(
  params: GetMarginAvailableInventoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginAvailableInventoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/available-inventory", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginAvailableInventoryResponse;
}

type LiquidateMarginSymbolManuallyParams = {
  type: "MARGIN" | "ISOLATED";
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function liquidateMarginSymbolManually(
  params: LiquidateMarginSymbolManuallyParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<LiquidateMarginSymbolManuallyResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/margin/manual-liquidation", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as LiquidateMarginSymbolManuallyResponse;
}

async function getMarginLeverageBracket(
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMarginLeverageBracketResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/margin/leverageBracket", {
    authentication,
    httpsAgent,
  });
  return response.data as GetMarginLeverageBracketResponse;
}

const margin = {
  marginBorrowRepay,
  getMarginBorrowRepayRecords,
  getAllMarginAssets,
  getAllCrossMarginPairs,
  getMarginPriceIndex,
  createMarginOrder,
  cancelMarginOrder,
  cancelAllMarginOrders,
  adjustCrossMarginLeverage,
  getMarginTransferHistory,
  getMarginInterestHistory,
  getMarginForceLiquidationRecord,
  getCrossMarginAccountDetails,
  getMarginOrder,
  getMarginOpenOrders,
  getMarginAllOrders,
  createMarginOcoOrder,
  cancelMarginOcoOrder,
  getMarginOcoOrder,
  getMarginAllOcoOrders,
  getMarginOpenOcoOrders,
  getMarginAccountTradeList,
  getMarginMaxBorrowable,
  getMarginMaxTransferable,
  getMarginAccountSummary,
  getIsolatedMarginAccountInfo,
  disableIsolatedMarginAccount,
  enableIsolatedMarginAccount,
  getIsolatedMarginAccountLimit,
  getAllIsolatedMarginSymbol,
  toggleBnbBurnStatus,
  getBnbBurnStatus,
  getMarginInterestRateHistory,
  getCrossMarginFeeData,
  getIsolatedMarginFeeData,
  getIsolatedMarginTierData,
  getCurrentMarginOrderCount,
  getCrossMarginCollateralRatio,
  getSmallLiabilityExchangeCoinList,
  getNextHourlyInterestRate,
  getMarginCapitalFlow,
  getMarginDelistSchedule,
  getMarginAvailableInventory,
  liquidateMarginSymbolManually,
  getMarginLeverageBracket,
};

export { margin };

export type {
  MarginBorrowRepayParams,
  MarginBorrowRepayRecordsParams,
  AllMarginAssetsParams,
  AllCrossMarginPairsParams,
  MarginPriceIndexParams,
  CreateMarginOrderParams,
  CancelMarginOrderParams,
  CancelAllMarginOrdersParams,
  AdjustCrossMarginLeverageParams,
  MarginTransferHistoryParams,
  GetMarginInterestHistoryParams,
  GetMarginForceLiquidationRecordParams,
  GetCrossMarginAccountDetailsParams,
  GetMarginOrderParams,
  GetMarginOpenOrdersParams,
  GetMarginAllOrdersParams,
  CreateMarginOcoOrderParams,
  CancelMarginOcoOrderParams,
  GetMarginOcoOrderParams,
  GetMarginAllOcoOrdersParams,
  GetMarginOpenOcoOrdersParams,
  GetMarginAccountTradeListParams,
  GetMarginMaxBorrowableParams,
  GetMarginMaxTransferableParams,
  GetMarginAccountSummaryParams,
  GetIsolatedMarginAccountInfoParams,
  DisableIsolatedMarginAccountParams,
  EnableIsolatedMarginAccountParams,
  GetIsolatedMarginAccountLimitParams,
  GetAllIsolatedMarginSymbolParams,
  ToggleBnbBurnStatusParams,
  GetBnbBurnStatusParams,
  GetMarginInterestRateHistoryParams,
  GetCrossMarginFeeDataParams,
  GetIsolatedMarginFeeDataParams,
  GetIsolatedMarginTierDataParams,
  GetCurrentMarginOrderCountParams,
  GetSmallLiabilityExchangeCoinListParams,
  GetNextHourlyInterestRateParams,
  GetMarginCapitalFlowParams,
  GetMarginDelistScheduleParams,
  GetMarginAvailableInventoryParams,
  LiquidateMarginSymbolManuallyParams,
};
