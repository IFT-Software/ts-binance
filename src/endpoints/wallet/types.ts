export type GetSystemStatusResponse = {
  status: string;
  msg: string;
};

type CoinNetwork = {
  addressRegex: string;
  coin: string;
  depositDesc?: string; // Optional because it's only shown when depositEnable is false
  depositEnable: boolean;
  isDefault: boolean;
  memoRegex: string;
  minConfirm: number;
  name: string;
  network: string;
  specialTips?: string; // Optional as it's not always present
  unLockConfirm: number;
  withdrawDesc?: string; // Optional because it's only shown when withdrawEnable is false
  withdrawEnable: boolean;
  withdrawFee: string;
  withdrawIntegerMultiple: string;
  withdrawMax: string;
  withdrawMin: string;
  sameAddress: boolean;
  estimatedArrivalTime: number;
  busy: boolean;
  contractAddressUrl: string;
  contractAddress: string;
};

type CoinInfo = {
  coin: string;
  depositAllEnable: boolean;
  free: string;
  freeze: string;
  ipoable: string;
  ipoing: string;
  isLegalMoney: boolean;
  locked: string;
  name: string;
  networkList: CoinNetwork[];
  storage: string;
  trading: boolean;
  withdrawAllEnable: boolean;
  withdrawing: string;
};

export type GetAllCoinsInfoResponse = CoinInfo[];

type SpotAccountData = {
  balances: {
    asset: string;
    free: string;
    locked: string;
  }[];
  totalAssetOfBtc: string;
};

type MarginAccountData = {
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  userAssets: {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
  }[];
};

type FuturesAccountData = {
  assets: {
    asset: string;
    marginBalance: string; // Not real-time data
    walletBalance: string;
  }[];
  positions: {
    entryPrice: string;
    markPrice: string;
    positionAmt: string;
    symbol: string;
    unRealizedProfit: string; // Value at the time of opening the position
  }[];
};

type AccountSnapshot = {
  data: SpotAccountData | MarginAccountData | FuturesAccountData;
  type: string;
  updateTime: number; // Unix timestamp in milliseconds
};

export type GetAccountSnapshotResponse = {
  code: number; // 200 for success; others are error codes
  msg: string; // error message
  snapshotVos: AccountSnapshot[];
};

export type WithdrawFundResponse = {
  id: string;
};

type Deposit = {
  id: string;
  amount: string;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number; // Unix timestamp in milliseconds
  transferType: number;
  confirmTimes: string;
  unlockConfirm: number;
  walletType: number;
};

export type GetDepositHistoryResponse = Deposit[];

type Withdrawal = {
  id: string; // Withdrawal ID in Binance
  amount: string; // Withdrawal amount
  transactionFee: string; // Transaction fee
  coin: string;
  status: number; // Status code (e.g., 6 for success)
  address: string;
  txId: string; // Withdrawal transaction ID
  applyTime: string; // UTC time when the withdrawal was applied
  network?: string; // May not be present for old withdrawals
  transferType: number; // 1 for internal transfer, 0 for external transfer
  withdrawOrderId?: string; // Optional: will not be returned if there's no withdrawOrderId
  info: string; // Reason for withdrawal failure (if applicable)
  confirmNo: number; // Confirm times for withdraw
  walletType: number; // 1: Funding Wallet, 0: Spot Wallet
  txKey: string;
  completeTime?: string; // Optional: complete time only when status = 6 (success)
};

export type GetWithdrawHistoryResponse = Withdrawal[];

export type GetDepositAddressResponse = {
  address: string;
  coin: string;
  tag: string;
  url: string;
};

export type GetAccountStatusResponse = {
  data: string;
};

export type GetAccountApiTradingStatusResponse = {
  data: {
    isLocked: boolean; // API trading function is locked or not
    plannedRecoverTime: number; // Planned recover time if the function is locked
    triggerCondition: {
      GCR: number; // Number of GTC orders
      IFER: number; // Number of FOK/IOC orders
      UFR: number; // Number of orders
    };
    updateTime: number; // Unix timestamp in milliseconds
  }; // API trading status detail
};

type UserAssetDribbletDetail = {
  transId: number;
  serviceChargeAmount: string;
  amount: string;
  operateTime: number; // Unix timestamp in milliseconds
  transferedAmount: string;
  fromAsset: string;
};

type UserAssetDribblet = {
  operateTime: number; // Unix timestamp in milliseconds
  totalTransferedAmount: string; // Total transferred BNB amount for this exchange
  totalServiceChargeAmount: string; // Total service charge amount for this exchange
  transId: number;
  userAssetDribbletDetails: UserAssetDribbletDetail[]; // Details of this exchange
};

export type GetDustLogResponse = {
  total: number; // Total count of exchanges
  userAssetDribblets: UserAssetDribblet[];
};

type BnbConvertableDetail = {
  asset: string;
  assetFullName: string;
  amountFree: string; // Convertible amount
  toBTC: string; // BTC amount
  toBNB: string; // BNB amount (Not deducted commission fee)
  toBNBOffExchange: string; // BNB amount (Deducted commission fee)
  exchange: string; // Commission fee
};

export type GetBnbConvertableAssetsResponse = {
  details: BnbConvertableDetail[];
  totalTransferBtc: string; // Total BTC amount
  totalTransferBNB: string; // Total BNB amount
  dribbletPercentage: string; // Commission fee percentage
};

type DustTransferResult = {
  amount: string;
  fromAsset: string;
  operateTime: number; // Unix timestamp in milliseconds
  serviceChargeAmount: string;
  tranId: number;
  transferedAmount: string;
};

export type DustTransferResponse = {
  totalServiceCharge: string;
  totalTransfered: string;
  transferResult: DustTransferResult[];
};

type AssetDividenRecord = {
  id: number;
  amount: string;
  asset: string;
  divTime: number; // Unix timestamp in milliseconds
  enInfo: string; // Description of the distribution
  tranId: number;
};

export interface GetAssetDividendRecordResponse {
  rows: AssetDividenRecord[];
  total: number; // Total number of records
}

type AssetDetail = {
  minWithdrawAmount: string; // Minimum withdraw amount
  depositStatus: boolean; // Deposit status
  withdrawFee: number; // Withdraw fee
  withdrawStatus: boolean; // Withdraw status
  depositTip?: string; // Optional: Reason for suspension or other info
};

export type GetAssetDetailResponse = {
  [key: string]: AssetDetail; // The asset symbol is the key (e.g., CTR, SKY)
};

interface TradeFee {
  symbol: string;
  makerCommission: string;
  takerCommission: string;
}

export type GetTradeFeeResponse = TradeFee[];

export type UserUniversalTransferResponse = {
  tranId: number;
};

type UniversalTransfer = {
  asset: string;
  amount: string;
  type: string;
  status: "CONFIRMED" | "FAILED" | "PENDING"; // Status enum with specific values
  tranId: number;
  timestamp: number; // Unix timestamp in milliseconds
};

export type GetUserUniversalTransferHistoryResponse = {
  total: number;
  rows: UniversalTransfer[];
};

type FundingWalletAssetBalance = {
  asset: string;
  free: string; // Available balance
  locked: string; // Locked asset
  freeze: string; // Frozen asset
  withdrawing: string;
  btcValuation: string; // BTC equivalent of the asset
};

export type GetFundingWalletResponse = FundingWalletAssetBalance[];

type UserAsset = {
  asset: string;
  free: string; // Available balance
  locked: string; // Locked asset
  freeze: string; // Frozen asset
  withdrawing: string; // Assets being withdrawn
  ipoable: string; // Amount available for IPO
  btcValuation: string; // BTC equivalent of the asset
};

export type GetUserAssetResponse = UserAsset[];

export type ConvertBusdResponse = {
  tranId: number;
  status: string;
};

type BusdConversion = {
  tranId: number;
  type: number;
  time: number; // Unix timestamp in milliseconds
  deductedAsset: string;
  deductedAmount: string;
  targetAsset: string;
  targetAmount: string;
  status: string; // Status of the transaction, e.g., "S"
  accountType: string;
};

export type GetConvertBusdHistoryResponse = {
  total: number;
  rows: BusdConversion[];
};

interface CloudMiningTransactionDetail {
  createTime: number; // Unix timestamp in milliseconds
  tranId: number;
  type: number;
  asset: string;
  amount: string;
  status: string; // Status of the transaction, e.g., "S"
}

export type GetCloudMiningTransactionHistoryResponse = {
  total: number;
  rows: CloudMiningTransactionDetail[];
};

export type GetApiKeyPermissionsResponse = {
  ipRestrict: boolean;
  createTime: number; // Unix timestamp in milliseconds
  enableInternalTransfer: boolean; // Authorizes internal transfers between master and sub-accounts
  enableFutures: boolean; // Futures API availability
  enablePortfolioMarginTrading: boolean; // Portfolio margin trading authorization
  enableVanillaOptions: boolean; // Vanilla options trading authorization
  permitsUniversalTransfer: boolean; // Universal transfer API authorization
  enableReading: boolean; // Enables reading data through API
  enableSpotAndMarginTrading: boolean; // Enables spot and margin trading
  enableWithdrawals: boolean; // Enables withdrawals via API (requires IP restriction)
  enableMargin: boolean; // Margin trading permission after cross margin account transfer
};

export type GetConvertableStableCoinsResponse = {
  convertEnabled: boolean;
  coins: string[]; // Array of coin symbols
  exchangeRates: { [key: string]: string }; // Mapping of coin symbols to their exchange rates
};

export type ApplyOneClickArrivalDepositResponse = {
  code: string;
  message: string;
  data: boolean;
  success: boolean;
};

type DepositAddress = {
  coin: string;
  address: string;
  tag: string;
  isDefault: number; // 1 means the address is default, 0 means it is not
};

export type GetDepositAddressListResponse = DepositAddress[];

type UserWalletBalance = {
  activate: boolean;
  balance: string;
  walletName: string;
};

export type GetUserWalletBalanceResponse = UserWalletBalance[];

type MasterAccountUserDelegationDetail = {
  clientTranId: string;
  transferType: string; // "Delegate" or "Undelegate"
  asset: string;
  amount: string;
  time: number; // Unix timestamp in milliseconds
};

export type GetMasterAccountUserDelegationHistoryResponse = {
  total: number;
  rows: MasterAccountUserDelegationDetail[];
};
export type GetSpotSymbolsDelistScheduleResponse = {
  delistTime: number;
  symbol: string[];
}[];

export type GetWithdrawAddressListResponse = {
  address: string;
  addressTag: string;
  coin: string;
  name: string; //is a user-defined name
  network: string;
  origin: string; //if originType=='others', the address source manually filled in by the user
  originType: string; //Address source type
  whiteStatus: true; //Is it whitelisted
}[];

export type GetAccountInfoResponse = {
  vipLevel: number;
  isMarginEnabled: boolean;
  isFutureEnabled: boolean;
};
