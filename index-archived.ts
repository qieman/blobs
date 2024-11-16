import { parseGwei, stringToHex, toBlobs } from "viem";
import { account, client } from "./client";
import { kzg } from "./kzg";

const blobs = toBlobs({ data: stringToHex("hello world") });

const main = async () => {
  const hash = await client.sendTransaction({
    blobs,
    kzg,
    maxFeePerBlobGas: parseGwei("300"),
    to: "0x0000000000000000000000000000000000000000",
  });
  console.log("🚀 ~ main ~ hash:", hash);
};

main();
