import { createWalletClient, http,  } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet, sepolia } from "viem/chains";

export const account = privateKeyToAccount("0x4b1012dbed8a68b9fea640437d2d01a22d9b04ecedacb7188baecb6da1d66b4d");

export const client = createWalletClient({
  account,
  chain: sepolia,
//   transport: http("https://sepolia.blockpi.network/v1/rpc/26bf80a1194ddc50a6f2fbdd851808c751b5b02e"),
  transport: http(),
});
