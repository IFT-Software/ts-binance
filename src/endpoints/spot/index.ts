import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client
import type { Authentication } from "../../types";
import {
  CancelAllOpenOrdersResponse,
  CancelOrderListResponse,
  CancelOrderResponse,
  CancelReplaceOrderResponse,
  CreateNewOcoOrderListResponse,
  CreateNewOcoOrderResponse,
  CreateNewOrderResponse,
  CreateNewOrderSorResponse,
  CreateNewOtoocoOrderListResponse,
  CreateNewOtoOrderListResponse,
  CreateNewTestOrderResponse,
  GetAccountInformationResponse,
  GetAccountTradeListResponse,
  GetAllocationsResponse,
  GetAllOrderListResponse,
  GetAllOrdersResponse,
  GetComissionRatesResponse,
  GetCurrentOpenOrdersResponse,
  GetOpenOrderListResponse,
  GetOrderListResponse,
  GetOrderResponse,
  GetPreventedMatchesResponse,
  GetUnfilledOrderCountResponse,
  TestCreateNewOrderSorResponse,
} from "./types";

type CreateNewTestOrderParams = {
  symbol: string;
  side: string;
  type: string;
  timeInForce?: string;
  quantity?: string;
  quoteOrderQty?: string;
  price?: string;
  newClientOrderId?: string;
  strategyId?: string;
  strategyType?: string;
  stopPrice?: string;
  trailingDelta?: string;
  icebergQty?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp?: number;
  computeComissionRates?: boolean;
};

// Test Create New Order
async function createNewTestOrder(
  params: CreateNewTestOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/order/test", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewTestOrderResponse;
}

type CreateNewOrderParams = {
  symbol: string;
  side: string;
  type: string;
  timeInForce?: string;
  quantity?: string;
  quoteOrderQty?: string;
  price?: string;
  newClientOrderId?: string;
  strategyId?: string;
  strategyType?: string;
  stopPrice?: string;
  trailingDelta?: string;
  icebergQty?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Create New Order
async function createNewOrder(
  params: CreateNewOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/order", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOrderResponse;
}

type CancelOrderParams = {
  symbol: string;
  orderId?: string;
  origClientOrderId?: string;
  newClientOrderId?: string;
  cancelRestrictions?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Cancel Order
async function cancelOrder(
  params: CancelOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.delete("/api/v3/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CancelOrderResponse;
}

type CancelAllOpenOrdersParams = {
  symbol: string;
  recvWindow?: number;
  timestamp?: number;
};

// Cancel All Open Orders
async function cancelAllOpenOrders(
  params: CancelAllOpenOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.delete("/api/v3/openOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CancelAllOpenOrdersResponse;
}

type GetOrderParams = {
  symbol: string;
  orderId?: string;
  origClientOrderId?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Order
async function getOrder(
  params: GetOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetOrderResponse;
}

type CancelReplaceOrderParams = {
  symbol: string;
  side: string;
  type: string;
  cancelReplaceMode: string;
  timeInForce?: string;
  quantity?: string;
  quoteOrderQty?: string;
  price?: string;
  cancelNewClientOrderId?: string;
  cancelOrigClientOrderId?: string;
  cancelOrderId?: string;
  newClientOrderId?: string;
  strategyId?: string;
  strategyType?: string;
  stopPrice?: string;
  trailingDelta?: string;
  icebergQty?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  cancelRestrictions?: string;
  orderRateLimitExceededMode?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Cancel Replace Order
async function cancelReplaceOrder(
  params: CancelReplaceOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post(
    "/api/v3/order/cancelReplace",
    params,
    {
      authentication,
      httpsAgent,
    }
  );
  return response.data as CancelReplaceOrderResponse;
}

type GetCurrentOpenOrdersParams = {
  symbol?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Current Open Orders
async function getCurrentOpenOrders(
  params: GetCurrentOpenOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/openOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetCurrentOpenOrdersResponse;
}

type GetAllOrdersParams = {
  symbol: string;
  orderId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get All Orders
async function getAllOrders(
  params: GetAllOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/allOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAllOrdersResponse;
}

type CreateNewOcoOrderParams = {
  symbol: string;
  listClientOrderId?: string;
  side: string;
  quantity: string;
  limitClientOrderId?: string;
  limitStrategyId?: string;
  limitStrategyType?: string;
  price: string;
  limitIcebergQty?: string;
  trailingDelta?: string;
  stopClientOrderId?: string;
  stopPrice: string;
  stopStrategyId?: string;
  stopStrategyType?: string;
  stopLimitPrice?: string;
  stopIcebergQty?: string;
  stopLimitTimeInForce?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp: number;
};

// Create New OCO
async function createNewOcoOrder(
  params: CreateNewOcoOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/order/oco", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOcoOrderResponse;
}

type CreateNewOcoOrderListParams = {
  symbol: string;
  listClientOrderId?: string;
  side: string;
  quantity: string;
  aboveType: string;
  aboveClientOrderId?: string;
  aboveIcebergQty?: string;
  abovePrice?: string;
  aboveStopPrice?: string;
  aboveTrailingDelta?: string;
  aboveTimeInForce?: string;
  aboveStrategyId?: string;
  aboveStrategyType?: string;
  belowType: string;
  belowClientOrderId?: string;
  belowIcebergQty?: string;
  belowPrice?: string;
  belowStopPrice?: string;
  belowTrailingDelta?: string;
  belowTimeInForce?: string;
  belowStrategyId?: string;
  belowStrategyType?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Create New OCO List
async function createNewOcoOrderList(
  params: CreateNewOcoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/orderList/oco", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOcoOrderListResponse;
}

type CreateNewOtoOrderListParams = {
  symbol: string;
  listClientOrderId?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  workingType: string;
  workingSide: string;
  workingClientOrderId?: string;
  workingPrice: string;
  workingQuantity: string;
  workingIcebergQty?: string;
  workingTimeInForce?: string;
  workingStrategyId?: string;
  workingStrategyType?: string;
  pendingType: string;
  pendingSide: string;
  pendingClientOrderId?: string;
  pendingPrice: string;
  pendingQuantity: string;
  pendingIcebergQty?: string;
  pendingTimeInForce?: string;
  pendingStrategyId?: string;
  pendingStrategyType?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Create New OTO List
async function createNewOtoOrderList(
  params: CreateNewOtoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/orderList/oto", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOtoOrderListResponse;
}

type CreateNewOtocoOrderListParams = {
  symbol: string;
  listClientOrderId?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  workingType: string;
  workingSide: string;
  workingClientOrderId?: string;
  workingPrice: string;
  workingQuantity: string;
  workingIcebergQty?: string;
  workingTimeInForce?: string;
  workingStrategyId?: string;
  workingStrategyType?: string;
  pendingType: string;
  pendingSide: string;
  pendingClientOrderId?: string;
  pendingPrice: string;
  pendingQuantity: string;
  pendingIcebergQty?: string;
  pendingTimeInForce?: string;
  pendingStrategyId?: string;
  pendingStrategyType?: string;
  pendingAbovePrice?: string;
  pendingAboveStopPrice?: string;
  pendingAboveTrailingDelta?: string;
  pendingAboveIcebergQty?: string;
  pendingAboveTimeInForce?: string;
  pendingAboveStrategyId?: string;
  pendingAboveStrategyType?: string;
  pendingBelowPrice?: string;
  pendingBelowStopPrice?: string;
  pendingBelowTrailingDelta?: string;
  pendingBelowIcebergQty?: string;
  pendingBelowTimeInForce?: string;
  pendingBelowStrategyId?: string;
  pendingBelowStrategyType?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Create New OTOCO List
async function createNewOtocoOrderList(
  params: CreateNewOtocoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/orderList/otoco", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOtoocoOrderListResponse;
}

type CancelOrderListParams = {
  symbol: string;
  orderListId?: string;
  listClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Cancel Order List
async function cancelOrderList(
  params: CancelOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.delete("/api/v3/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as CancelOrderListResponse;
}

type GetOrderListParams = {
  orderListId?: string;
  origClientOrderId?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Order List
async function getOrderList(
  params: GetOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetOrderListResponse;
}

type GetAllOrderListParams = {
  fromId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get All Order List
async function getAllOrderList(
  params: GetAllOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/allOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAllOrderListResponse;
}

type GetOpenOrderListParams = {
  recvWindow?: number;
  timestamp?: number;
};

// Get Open Order List
async function getOpenOrderList(
  params: GetOpenOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/openOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetOpenOrderListResponse;
}

type CreateNewOrderSorParams = {
  symbol: string;
  side: string;
  type: string;
  timeInForce?: string;
  quantity: string;
  quoteOrderQty?: string;
  price?: string;
  newClientOrderId?: string;
  strategyId?: string;
  strategyType?: string;
  icebergQty?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Create New Order - SOR
async function createNewOrderSor(
  params: CreateNewOrderSorParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/sor/order", params, {
    authentication,
    httpsAgent,
  });
  return response.data as CreateNewOrderSorResponse;
}

type TestNewOrderSorParams = {
  symbol: string;
  side: string;
  type: string;
  timeInForce?: string;
  quantity: string;
  quoteOrderQty?: string;
  price?: string;
  newClientOrderId?: string;
  strategyId?: string;
  strategyType?: string;
  icebergQty?: string;
  newOrderRespType?: string;
  selfTradePreventionMode?: string;
  recvWindow?: number;
  timestamp?: number;

  computeComissionRates?: boolean;
};

// Test Create New Order - SOR
async function testCreateNewOrderSor(
  params: TestNewOrderSorParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.post("/api/v3/sor/order/test", params, {
    authentication,
    httpsAgent,
  });
  return response.data as TestCreateNewOrderSorResponse;
}

type GetAccountInformationParams = {
  omitZeroBalances?: boolean;
  recvWindow?: number;
  timestamp?: number;
};

// Get Account Information
async function getAccountInformation(
  params: GetAccountInformationParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAccountInformationResponse;
}

type GetAccountTradeListParams = {
  symbol: string;
  orderId?: string;
  startTime?: string;
  endTime?: string;
  fromId?: string;
  limit?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Account Trade List
async function getAccountTradeList(
  params: GetAccountTradeListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/myTrades", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAccountTradeListResponse;
}

type GetUnfilledOrderCountParams = {
  recvWindow?: number;
  timestamp?: number;
};

// Get Unfilled Order Count
async function getUnfilledOrderCount(
  params: GetUnfilledOrderCountParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/rateLimit/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetUnfilledOrderCountResponse;
}

type GetPreventedMatchesParams = {
  symbol: string;
  preventedMatchId?: string;
  orderId?: string;
  fromPreventedMatchId?: string;
  limit?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Prevented Matches
async function getPreventedMatches(
  params: GetPreventedMatchesParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/myPreventedMatches", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetPreventedMatchesResponse;
}

type GetAllocationsParams = {
  symbol: string;
  startTime?: string;
  endTime?: string;
  fromAllocationId?: string;
  limit?: string;
  orderId?: string;
  recvWindow?: number;
  timestamp?: number;
};

// Get Allocations
async function getAllocations(
  params: GetAllocationsParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  if (!params.timestamp) params = { ...params, timestamp: Date.now() };

  const response = await binanceApi.get("/api/v3/myAllocations", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetAllocationsResponse;
}

type GetComissionRatesParams = {
  symbol: string;
};

// Get Comission Rates
async function getComissionRates(
  params: GetComissionRatesParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/account/commission", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data as GetComissionRatesResponse;
}

const spot = {
  createNewTestOrder,
  createNewOrder,
  cancelOrder,
  cancelAllOpenOrders,
  getOrder,
  cancelReplaceOrder,
  getCurrentOpenOrders,
  getAllOrders,
  createNewOcoOrder,
  createNewOcoOrderList,
  createNewOtoOrderList,
  createNewOtocoOrderList,
  cancelOrderList,
  getOrderList,
  getAllOrderList,
  getOpenOrderList,
  createNewOrderSor,
  testCreateNewOrderSor,
  getAccountInformation,
  getAccountTradeList,
  getUnfilledOrderCount,
  getPreventedMatches,
  getAllocations,
  getComissionRates,
};

export { spot };

export type {
  CreateNewTestOrderParams,
  CreateNewOrderParams,
  CancelOrderParams,
  CancelAllOpenOrdersParams,
  GetOrderParams,
  CancelReplaceOrderParams,
  GetCurrentOpenOrdersParams,
  GetAllOrdersParams,
  CreateNewOcoOrderParams,
  CreateNewOcoOrderListParams,
  CreateNewOtoOrderListParams,
  CreateNewOtocoOrderListParams,
  CancelOrderListParams,
  GetOrderListParams,
  GetAllOrderListParams,
  GetOpenOrderListParams,
  CreateNewOrderSorParams,
  TestNewOrderSorParams,
  GetAccountInformationParams,
  GetAccountTradeListParams,
  GetUnfilledOrderCountParams,
  GetPreventedMatchesParams,
  GetAllocationsParams,
  GetComissionRatesParams,
};
