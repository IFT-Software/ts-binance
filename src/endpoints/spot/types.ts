export type CreateNewTestOrderResponse =
  | {}
  | {
      standardCommissionForOrder: {
        // Standard commission rates on trades from the order.
        maker: string;
        taker: string;
      };
      taxCommissionForOrder: {
        // Tax commission rates for trades from the order.
        maker: string;
        taker: string;
      };
      discount: {
        // Discount on standard commissions when paying in BNB.
        enabledForAccount: boolean;
        enabledForSymbol: boolean;
        discountAsset: string;
        discount: string; // Standard commission is reduced by this rate when paying commission in BNB.
      };
    };

type CreateNewOrderACKResponse = {
  symbol: string;
  orderId: number;
  orderListId: number; // Unless an order list, value will be -1
  clientOrderId: string;
  transactTime: number;
};

type CreateNewOrderResultResponse = CreateNewOrderACKResponse & {
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  workingTime: number;
  selfTradePreventionMode: string;
};

type CreateNewOrderFullResponse = CreateNewOrderResultResponse & {
  fills: Array<{
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
    tradeId: number;
  }>;
};

export type CreateNewOrderResponse =
  | CreateNewOrderACKResponse
  | CreateNewOrderResultResponse
  | CreateNewOrderFullResponse;

export type CancelOrderResponse = {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number; // Unless part of an order list, the value will always be -1.
  clientOrderId: string;
  transactTime: number;
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

type OrderListData = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: Array<{
    symbol: string;
    orderId: number;
    clientOrderId: string;
  }>;
};

type OpenOrderReport = CancelOrderResponse & {
  stopPrice?: string; // Optional, only present in STOP_LOSS_LIMIT orders
  icebergQty: string; // TODO: make sure this is not optional
};

type CancelOpenOrderListResponse = OrderListData & {
  orderReports: OpenOrderReport[];
};

export type CancelAllOpenOrdersResponse = Array<
  CancelOrderResponse | CancelOpenOrderListResponse
>;

export type GetOrderResponse = {
  symbol: string;
  orderId: number;
  orderListId: number; // Unless an order list, value will be -1
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  workingTime: number;
  origQuoteOrderQty: string;
  selfTradePreventionMode: string;
};

type CancelReplaceOrderSuccessResponse = {
  cancelResult: "SUCCESS";
  newOrderResult: "SUCCESS";
  cancelResponse: CancelOrderResponse;
  newOrderResponse: CreateNewOrderFullResponse;
};

type CancelReplaceOrderFailureResponse = {
  code: number;
  msg: string;
  data: {
    cancelResult: string; //TODO: enum
    newOrderResult: string; //TODO: enum
    cancelResponse: CancelOrderResponse | { code: number; msg: string };
    newOrderResponse:
      | CreateNewOrderACKResponse
      | { code: number; msg: string }
      | null;
  };
};

export type CancelReplaceOrderResponse =
  | CancelReplaceOrderSuccessResponse
  | CancelReplaceOrderFailureResponse;

export type GetCurrentOpenOrdersResponse = Array<GetOrderResponse>;

export type GetAllOrdersResponse = Array<GetOrderResponse>;

type OrderReport = CreateNewOrderResultResponse & { stopPrice?: string };

export type CreateNewOcoOrderResponse = OrderListData & {
  orderReports: OrderReport[];
};

type CreateNewOrderListResponse = OrderListData & {
  orderReports: (OrderReport & { iceberQty?: string })[];
};

export type CreateNewOcoOrderListResponse = CreateNewOrderListResponse;

export type CreateNewOtoOrderListResponse = CreateNewOrderListResponse;

export type CreateNewOtoocoOrderListResponse = CreateNewOrderListResponse;

type CancelOrderReport = CancelOrderResponse & { stopPrice?: string };

export type CancelOrderListResponse = OrderListData & {
  orderReports: CancelOrderReport[];
};

export type GetOrderListResponse = OrderListData;

export type GetAllOrderListResponse = Array<OrderListData>;

export type GetOpenOrderListResponse = Array<OrderListData>;

type SorFill = {
  matchType: string;
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
  tradeId: number;
  allocId: number;
};

export type CreateNewOrderSorResponse = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  workingTime: number;
  fills: SorFill[];
  workingFloor: string;
  selfTradePreventionMode: string;
  usedSor: boolean;
};

export type TestCreateNewOrderSorResponse = CreateNewTestOrderResponse;

type CommissionRates = {
  maker: string;
  taker: string;
  buyer: string;
  seller: string;
};

type Balance = {
  asset: string;
  free: string;
  locked: string;
};

export type GetAccountInformationResponse = {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  commissionRates: CommissionRates;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  brokered: boolean;
  requireSelfTradePrevention: boolean;
  preventSor: boolean;
  updateTime: number;
  accountType: string;
  balances: Balance[];
  permissions: string[];
  uid: number;
};

export type GetAccountTradeListResponse = {
  symbol: string;
  id: number;
  orderId: number;
  orderListId: number; // -1 if not an order list
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isBestMatch: boolean;
}[];

export type GetUnfilledOrderCountResponse = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
  count: number;
}[];

export type GetPreventedMatchesResponse = {
  symbol: string;
  preventedMatchId: number;
  takerOrderId: number;
  makerOrderId: number;
  tradeGroupId: number;
  selfTradePreventionMode: string;
  price: string;
  makerPreventedQuantity: string;
  transactTime: number;
}[];

export type GetAllocationsResponse = {
  symbol: string;
  allocationId: number;
  allocationType: string;
  orderId: number;
  orderListId: number;
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isAllocator: boolean;
}[];

export type GetComissionRatesResponse = {
  symbol: string;
  standardCommission: CommissionRates;
  taxCommission: CommissionRates;
  discount: {
    enabledForAccount: boolean;
    enabledForSymbol: boolean;
    discountAsset: string;
    discount: string;
  };
};
