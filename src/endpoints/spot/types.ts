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

type OrderReport = CancelOrderResponse & {
  stopPrice?: string; // Optional, only present in STOP_LOSS_LIMIT orders
  icebergQty: string; // TODO: make sure this is not optional
};

type CancelOrderListResponse = {
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
  orderReports: OrderReport[];
};

export type CancelAllOpenOrdersResponse = Array<
  CancelOrderResponse | CancelOrderListResponse
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

type OcoOrderReport = CreateNewOrderResultResponse & { stopPrice?: string };

export type CreateNewOcoOrderResponse = {
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
  orderReports: OcoOrderReport[];
};

export type CreateNewOcoOrderListResponse = {
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
  orderReports: (OcoOrderReport & { iceberQty?: string })[];
};
