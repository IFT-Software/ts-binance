import { HttpsProxyAgent } from "hpagent";

import { binanceApi } from "../../clients/api"; // Import the already created client
import type { Authentication } from "../../types";

import {
  ApplyOneClickArrivalDepositResponse,
  ConvertBusdResponse,
  DustTransferResponse,
  GetAccountApiTradingStatusResponse,
  GetAccountInfoResponse,
  GetAccountSnapshotResponse,
  GetAccountStatusResponse,
  GetAllCoinsInfoResponse,
  GetApiKeyPermissionsResponse,
  GetAssetDetailResponse,
  GetAssetDividendRecordResponse,
  GetBnbConvertableAssetsResponse,
  GetCloudMiningTransactionHistoryResponse,
  GetConvertBusdHistoryResponse,
  GetConvertableStableCoinsResponse,
  GetDepositAddressListResponse,
  GetDepositAddressResponse,
  GetDepositHistoryResponse,
  GetDustLogResponse,
  GetFundingWalletResponse,
  GetMasterAccountUserDelegationHistoryResponse,
  GetSpotSymbolsDelistScheduleResponse,
  GetSystemStatusResponse,
  GetTradeFeeResponse,
  GetUserAssetResponse,
  GetUserUniversalTransferHistoryResponse,
  GetUserWalletBalanceResponse,
  GetWithdrawAddressListResponse,
  GetWithdrawHistoryResponse,
  UserUniversalTransferResponse,
  WithdrawFundResponse,
} from "./types";

async function getSystemStatus(
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetSystemStatusResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/system/status", {
    authentication,
    httpsAgent,
  });

  return response.data as GetSystemStatusResponse;
}

type GetAllCoinsInfoParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getAllCoinsInfo(
  params: GetAllCoinsInfoParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAllCoinsInfoResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/capital/config/getall", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAllCoinsInfoResponse;
}

type GetAccountSnapshotParams = {
  type: "SPOT" | "MARGIN" | "FUTURES";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getAccountSnapshot(
  params: GetAccountSnapshotParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAccountSnapshotResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/accountSnapshot", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAccountSnapshotResponse;
}

type DisableFastWithdrawSwitchParams = {
  recvWindow?: number;
  timestamp: number;
};

async function disableFastWithdrawSwitch(
  params: DisableFastWithdrawSwitchParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<void> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  await binanceApi.post("/sapi/v1/account/disableFastWithdrawSwitch", {
    params,
    authentication,
    httpsAgent,
  });
}

type EnableFastWithdrawSwitchParams = {
  recvWindow?: number;
  timestamp: number;
};

async function enableFastWithdrawSwitch(
  params: EnableFastWithdrawSwitchParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<void> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  await binanceApi.post("/sapi/v1/account/enableFastWithdrawSwitch", {
    params,
    authentication,
    httpsAgent,
  });
}

type WithdrawFundParams = {
  coin: string;
  withdrawOrderId?: string;
  network?: string;
  address: string;
  addressTag?: string;
  amount: string;
  transactionFeeFlag?: boolean;
  name?: string;
  walletType?: number;
  recvWindow?: number;
  timestamp: number;
};

async function withdrawFund(
  params: WithdrawFundParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<WithdrawFundResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/capital/withdraw/apply", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as WithdrawFundResponse;
}

type GetDepositHistoryParams = {
  includeSource?: boolean;
  coin?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
  offset?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
  txId?: string;
};

async function getDepositHistory(
  params: GetDepositHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetDepositHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/capital/deposit/hisrec", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetDepositHistoryResponse;
}

type GetWithdrawHistoryParams = {
  coin?: string;
  withdrawOrderId?: string;
  status?: number;
  offset?: number;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getWithdrawHistory(
  params: GetWithdrawHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetWithdrawHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/capital/withdraw/history", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetWithdrawHistoryResponse;
}

type GetDepositAddressParams = {
  coin: string;
  network?: string;
  amount?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getDepositAddress(
  params: GetDepositAddressParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetDepositAddressResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/capital/deposit/address", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetDepositAddressResponse;
}

type GetAccountStatusParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getAccountStatus(
  params: GetAccountStatusParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAccountStatusResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/account/status", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAccountStatusResponse;
}

type GetAccountApiTradingStatusParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getAccountApiTradingStatus(
  params: GetAccountApiTradingStatusParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAccountApiTradingStatusResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/account/apiTradingStatus", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAccountApiTradingStatusResponse;
}

type GetDustLogParams = {
  accountType?: "SPOT" | "MARGIN";
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getDustLog(
  params: GetDustLogParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetDustLogResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/dribblet", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetDustLogResponse;
}

type GetBnbConvertableAssetsParams = {
  accountType?: "SPOT" | "MARGIN";
  recvWindow?: number;
  timestamp: number;
};

async function getBnbConvertableAssets(
  params: GetBnbConvertableAssetsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetBnbConvertableAssetsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/dust-btc", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetBnbConvertableAssetsResponse;
}

type DustTransferParams = {
  asset: string;
  accountType?: "SPOT" | "MARGIN";
  recvWindow?: number;
  timestamp: number;
};

async function dustTransfer(
  params: DustTransferParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<DustTransferResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/asset/dust", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as DustTransferResponse;
}

type GetAssetDividendRecordParams = {
  asset?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getAssetDividendRecord(
  params: GetAssetDividendRecordParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAssetDividendRecordResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/assetDividend", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAssetDividendRecordResponse;
}

type GetAssetDetailParams = {
  asset?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getAssetDetail(
  params: GetAssetDetailParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAssetDetailResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/assetDetail", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAssetDetailResponse;
}

type GetTradeFeeParams = {
  symbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getTradeFee(
  params: GetTradeFeeParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetTradeFeeResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/tradeFee", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetTradeFeeResponse;
}

type UserUniversalTransferParams = {
  type: string;
  asset: string;
  amount: string;
  fromSymbol?: string;
  toSymbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function userUniversalTransfer(
  params: UserUniversalTransferParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<UserUniversalTransferResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/asset/transfer", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as UserUniversalTransferResponse;
}

type GetUserUniversalTransferHistoryParams = {
  type: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  fromSymbol?: string;
  toSymbol?: string;
  recvWindow?: number;
  timestamp: number;
};

async function getUserUniversalTransferHistory(
  params: GetUserUniversalTransferHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetUserUniversalTransferHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/transfer", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetUserUniversalTransferHistoryResponse;
}

type GetFundingWalletParams = {
  asset?: string;
  needBtcValuation?: "TRUE" | "FALSE";
  recvWindow?: number;
  timestamp: number;
};

async function getFundingWallet(
  params: GetFundingWalletParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetFundingWalletResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/asset/get-funding-asset", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetFundingWalletResponse;
}

type GetUserAssetParams = {
  asset?: string;
  needBtcValuation?: "TRUE" | "FALSE";
  recvWindow?: number;
  timestamp: number;
};

async function getUserAsset(
  params: GetUserAssetParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetUserAssetResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v3/asset/getUserAsset", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetUserAssetResponse;
}

type ConvertBusdParams = {
  clientTranId: string;
  asset: string;
  amount: string;
  targetAsset: string;
  accountType?: "MAIN" | "CARD";
};

async function convertBusd(
  params: ConvertBusdParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<ConvertBusdResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post("/sapi/v1/asset/convert-transfer", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as ConvertBusdResponse;
}

type GetConvertBusdHistoryParams = {
  trandId?: string;
  clientTranId?: string;
  asset?: string;
  startTime: number;
  endTime: number;
  accountType?: "MAIN" | "CARD";
  current?: number;
  size?: number;
};

async function getConvertBusdHistory(
  params: GetConvertBusdHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetConvertBusdHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/asset/convert-transfer/queryByPage",
    {
      params,
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetConvertBusdHistoryResponse;
}

type GetCloudMiningTransactionHistoryParams = {
  trandId?: string;
  clientTranId?: string;
  asset?: string;
  startTime: number;
  endTime: number;
  current?: number;
  size?: number;
};

async function getCloudMiningTransactionHistory(
  params: GetCloudMiningTransactionHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetCloudMiningTransactionHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage",
    {
      params,
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetCloudMiningTransactionHistoryResponse;
}

type GetApiKeyPermissionsParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getApiKeyPermissions(
  params: GetApiKeyPermissionsParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetApiKeyPermissionsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/account/apiRestrictions", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetApiKeyPermissionsResponse;
}

async function getConvertableStableCoins(
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetConvertableStableCoinsResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/capital/contract/convertible-coin",
    {
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetConvertableStableCoinsResponse;
}

type SwitchStableCoinConversionParams = {
  coin: string;
  enable: "true" | "false";
};

async function switchStableCoinConversion(
  params: SwitchStableCoinConversionParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<void> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  await binanceApi.post("/sapi/v1/capital/contract/convertible-coins", {
    params,
    authentication,
    httpsAgent,
  });
}

type ApplyOneClickArrivalDepositParams = {
  depositId?: number;
  txId?: string;
  subAccountId?: number;
  subUserId?: number;
};

async function applyOneClickArrivalDeposit(
  params: ApplyOneClickArrivalDepositParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<ApplyOneClickArrivalDepositResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.post(
    "/sapi/v1/capital/deposit/credit-apply",
    {
      params,
      authentication,
      httpsAgent,
    }
  );

  return response.data as ApplyOneClickArrivalDepositResponse;
}

type GetDepositAddressListParams = {
  coin: string;
  network?: string;
  timestamp: number;
};

async function getDepositAddressList(
  params: GetDepositAddressListParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetDepositAddressListResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/capital/deposit/address/list",
    {
      params,
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetDepositAddressListResponse;
}

type GetUserWalletBalanceParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getUserWalletBalance(
  params: GetUserWalletBalanceParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetUserWalletBalanceResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/asset/wallet/balance", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetUserWalletBalanceResponse;
}

type GetMasterAccountUserDelegationHistoryParams = {
  email: string;
  startTime: number;
  endTime: number;
  type?: "Delegate" | "Undelegate";
  asset?: string;
  current?: number;
  size?: number;
  recvWindow?: number;
  timestamp: number;
};

async function getMasterAccountUserDelegationHistory(
  params: GetMasterAccountUserDelegationHistoryParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetMasterAccountUserDelegationHistoryResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/asset/custody/transfer-history",
    {
      params,
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetMasterAccountUserDelegationHistoryResponse;
}

type GetSpotSymbolsDelistScheduleParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getSpotSymbolsDelistSchedule(
  params: GetSpotSymbolsDelistScheduleParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetSpotSymbolsDelistScheduleResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/spot/delist-schedule", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetSpotSymbolsDelistScheduleResponse;
}

async function getWithdrawAddressList(
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetWithdrawAddressListResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get(
    "/sapi/v1/capital/withdraw/address/list",
    {
      authentication,
      httpsAgent,
    }
  );

  return response.data as GetWithdrawAddressListResponse;
}

type GetAccountInfoParams = {
  recvWindow?: number;
  timestamp: number;
};

async function getAccountInfo(
  params: GetAccountInfoParams,
  authentication: Authentication,
  proxy?: URL | string
): Promise<GetAccountInfoResponse> {
  const httpsAgent = proxy
    ? new HttpsProxyAgent({ proxy, timeout: 5000 })
    : undefined;

  const response = await binanceApi.get("/sapi/v1/account/info", {
    params,
    authentication,
    httpsAgent,
  });

  return response.data as GetAccountInfoResponse;
}

const wallet = {
  getSystemStatus,
  getAllCoinsInfo,
  getAccountSnapshot,
  disableFastWithdrawSwitch,
  enableFastWithdrawSwitch,
  withdrawFund,
  getDepositHistory,
  getWithdrawHistory,
  getDepositAddress,
  getAccountStatus,
  getAccountApiTradingStatus,
  getDustLog,
  getBnbConvertableAssets,
  dustTransfer,
  getAssetDividendRecord,
  getAssetDetail,
  getTradeFee,
  userUniversalTransfer,
  getUserUniversalTransferHistory,
  getFundingWallet,
  getUserAsset,
  convertBusd,
  getConvertBusdHistory,
  getCloudMiningTransactionHistory,
  getApiKeyPermissions,
  getConvertableStableCoins,
  switchStableCoinConversion,
  applyOneClickArrivalDeposit,
  getDepositAddressList,
  getUserWalletBalance,
  getMasterAccountUserDelegationHistory,
  getSpotSymbolsDelistSchedule,
  getWithdrawAddressList,
  getAccountInfo,
};

export { wallet };

export type {
  GetAllCoinsInfoParams,
  GetAccountSnapshotParams,
  DisableFastWithdrawSwitchParams,
  EnableFastWithdrawSwitchParams,
  WithdrawFundParams,
  GetDepositHistoryParams,
  GetWithdrawHistoryParams,
  GetDepositAddressParams,
  GetAccountStatusParams,
  GetAccountApiTradingStatusParams,
  GetDustLogParams,
  GetBnbConvertableAssetsParams,
  DustTransferParams,
  GetAssetDividendRecordParams,
  GetAssetDetailParams,
  GetTradeFeeParams,
  UserUniversalTransferParams,
  GetUserUniversalTransferHistoryParams,
  GetFundingWalletParams,
  GetUserAssetParams,
  ConvertBusdParams,
  GetConvertBusdHistoryParams,
  GetCloudMiningTransactionHistoryParams,
  GetApiKeyPermissionsParams,
  SwitchStableCoinConversionParams,
  ApplyOneClickArrivalDepositParams,
  GetDepositAddressListParams,
  GetUserWalletBalanceParams,
  GetMasterAccountUserDelegationHistoryParams,
  GetSpotSymbolsDelistScheduleParams,
  GetAccountInfoParams,
};
