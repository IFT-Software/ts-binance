import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client
import type { Authentication } from "../../types";

interface TestNewOrderParams {
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
  recvWindow?: string;
  timestamp: string;

  computeComissionRates?: boolean;
}

// Test Create New Order
async function testCreateNewOrder(
  params: TestNewOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/order/test", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOrderParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New Order
async function createNewOrder(
  params: NewOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/order", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface CancelOrderParams {
  symbol: string;
  orderId?: string;
  origClientOrderId?: string;
  newClientOrderId?: string;
  cancelRestrictions?: string;
  recvWindow?: string;
  timestamp: string;
}

// Cancel Order
async function cancelOrder(
  params: CancelOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/api/v3/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface CancelAllOpenOrdersParams {
  symbol: string;
  recvWindow?: string;
  timestamp: string;
}

// Cancel All Open Orders
async function cancelAllOpenOrders(
  params: CancelAllOpenOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/api/v3/openOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryOrderParams {
  symbol: string;
  orderId?: string;
  origClientOrderId?: string;
  recvWindow?: string;
  timestamp: string;
}

// Query Order
async function queryOrder(
  params: QueryOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface CancelReplaceOrderParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Cancel Replace Order
async function cancelReplaceOrder(
  params: CancelReplaceOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post(
    "/api/v3/order/cancelReplace",
    params,
    {
      authentication,
      httpsAgent,
    }
  );
  return response.data;
}

interface CurrentOpenOrdersParams {
  symbol?: string;
  recvWindow?: string;
  timestamp: string;
}

// Get Current Open Orders
async function getCurrentOpenOrders(
  params: CurrentOpenOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/openOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface AllOrdersParams {
  symbol: string;
  orderId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  recvWindow?: string;
  timestamp: string;
}

// Get All Orders
async function getAllOrders(
  params: AllOrdersParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/allOrders", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOcoOrderParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New OCO
async function createNewOcoOrder(
  params: NewOcoOrderParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/order/oco", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOcoOrderListParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New OCO List
async function createNewOcoOrderList(
  params: NewOcoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/orderList/oco", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOtoOrderListParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New OTO List
async function createNewOtoOrderList(
  params: NewOtoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/orderList/oto", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOtocoOrderListParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New OTOCO List
async function createNewOtocoOrderList(
  params: NewOtocoOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/orderList/otoco", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface CancelOrderListParams {
  symbol: string;
  orderListId?: string;
  listClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: string;
  timestamp: string;
}

// Cancel Order List
async function cancelOrderList(
  params: CancelOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.delete("/api/v3/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryOrderListParams {
  orderListId?: string;
  origClientOrderId?: string;
  recvWindow?: string;
  timestamp: string;
}

// Query Order List
async function queryOrderList(
  params: QueryOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/orderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryAllOrderListParams {
  fromId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  recvWindow?: string;
  timestamp: string;
}

// Query All Order List
async function queryAllOrderList(
  params: QueryAllOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/allOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryOpenOrderListParams {
  recvWindow?: string;
  timestamp: string;
}

// Query Open Order List
async function queryOpenOrderList(
  params: QueryOpenOrderListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/openOrderList", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface NewOrderSorParams {
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
  recvWindow?: string;
  timestamp: string;
}

// Create New Order - SOR
async function createNewOrderSor(
  params: NewOrderSorParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/sor/order", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface TestNewOrderSorParams {
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
  recvWindow?: string;
  timestamp: string;

  computeComissionRates?: boolean;
}

// Test Create New Order - SOR
async function testCreateNewOrderSor(
  params: TestNewOrderSorParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/api/v3/sor/order/test", params, {
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface AccountInformationParams {
  omitZeroBalances?: string;
  recvWindow?: string;
  timestamp: string;
}

// Get Account Information
async function getAccountInformation(
  params: AccountInformationParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/account", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface AccountTradeListParams {
  symbol: string;
  orderId?: string;
  startTime?: string;
  endTime?: string;
  fromId?: string;
  limit?: string;
  recvWindow?: string;
  timestamp: string;
}

// Get Account Trade List
async function getAccountTradeList(
  params: AccountTradeListParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/myTrades", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryUnfilledOrderCountParams {
  recvWindow?: string;
  timestamp: string;
}

// Query Unfilled Order Count
async function queryUnfilledOrderCount(
  params: QueryUnfilledOrderCountParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/rateLimit/order", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryPreventedMatchesParams {
  symbol: string;
  preventedMatchId?: string;
  orderId?: string;
  fromPreventedMatchId?: string;
  limit?: string;
  recvWindow?: string;
  timestamp: string;
}

// Query Prevented Matches
async function queryPreventedMatches(
  params: QueryPreventedMatchesParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/myPreventedMatches", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryAllocationsParams {
  symbol: string;
  startTime?: string;
  endTime?: string;
  fromAllocationId?: string;
  limit?: string;
  orderId?: string;
  recvWindow?: string;
  timestamp: string;
}

// Query Allocations
async function queryAllocations(
  params: QueryAllocationsParams,
  authentication: Authentication,
  proxy?: URL | string
) {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/api/v3/myAllocations", {
    params,
    authentication,
    httpsAgent,
  });
  return response.data;
}

interface QueryComissionRatesParams {
  symbol: string;
}

// Query Comission Rates
async function queryComissionRates(
  params: QueryComissionRatesParams,
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
  return response.data;
}

const spot = {
  testCreateNewOrder,
  createNewOrder,
  cancelOrder,
  cancelAllOpenOrders,
  queryOrder,
  cancelReplaceOrder,
  getCurrentOpenOrders,
  getAllOrders,
  createNewOcoOrder,
  createNewOcoOrderList,
  createNewOtoOrderList,
  createNewOtocoOrderList,
  cancelOrderList,
  queryOrderList,
  queryAllOrderList,
  queryOpenOrderList,
  createNewOrderSor,
  testCreateNewOrderSor,
  getAccountInformation,
  getAccountTradeList,
  queryUnfilledOrderCount,
  queryPreventedMatches,
  queryAllocations,
  queryComissionRates,
};

export { spot };

export type {
  TestNewOrderParams,
  NewOrderParams,
  CancelOrderParams,
  CancelAllOpenOrdersParams,
  QueryOrderParams,
  CancelReplaceOrderParams,
  CurrentOpenOrdersParams,
  AllOrdersParams,
  NewOcoOrderParams,
  NewOcoOrderListParams,
  NewOtoOrderListParams,
  NewOtocoOrderListParams,
  CancelOrderListParams,
  QueryOrderListParams,
  QueryAllOrderListParams,
  QueryOpenOrderListParams,
  NewOrderSorParams,
  TestNewOrderSorParams,
  AccountInformationParams,
  AccountTradeListParams,
  QueryUnfilledOrderCountParams,
  QueryPreventedMatchesParams,
  QueryAllocationsParams,
  QueryComissionRatesParams,
};
