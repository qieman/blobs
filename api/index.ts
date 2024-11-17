import { parseGwei, stringToHex, toBlobs } from 'viem';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { setupKzg } from 'viem';
import cKzg from 'c-kzg';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Directly embed the private key (not recommended for production)
const PRIVATE_KEY = '0x4b1012dbed8a68b9fea640437d2d01a22d9b04ecedacb7188baecb6da1d66b4d';
const RPC_URL = 'https://sepolia.blockpi.network/v1/rpc/26bf80a1194ddc50a6f2fbdd851808c751b5b02e';

// Initialize account and client
const account = privateKeyToAccount(PRIVATE_KEY);
const client = createWalletClient({
  account,
  chain: sepolia,
  transport: http(RPC_URL),
});

// Initialize KZG setup
const kzg = setupKzg(cKzg, 'https://trusted-setup-path-url.com/setup');

// Main handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Validate HTTP method
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { data } = req.body;

    // Validate request body
    if (!data || typeof data !== 'string') {
      return res.status(400).json({ error: 'Data is required and must be a string' });
    }

    // Prepare transaction
    const blobs = toBlobs({ data: stringToHex(data) });
    const hash = await client.sendTransaction({
      blobs,
      kzg,
      maxFeePerBlobGas: parseGwei('300'),
      to: '0x0000000000000000000000000000000000000000',
    });

    // Respond with the transaction hash
    return res.status(200).json({ hash });
  } catch (error: any) {
    console.error('Error sending transaction:', error);

    // Respond with error details
    return res.status(500).json({
      error: 'Internal Server Error',
      details: error.message || 'An unexpected error occurred',
    });
  }
}
