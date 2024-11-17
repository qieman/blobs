import { parseGwei, stringToHex, toBlobs } from 'viem';
import { client } from './client';
import { kzg } from './kzg';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Data is required' });
    }

    const blobs = toBlobs({ data: stringToHex(data) });
    const hash = await client.sendTransaction({
      blobs,
      kzg,
      maxFeePerBlobGas: parseGwei('300'),
      to: '0x0000000000000000000000000000000000000000',
    });

    return res.status(200).json({ hash });
  } catch (error) {
    console.error('Error sending transaction:', error);

    // Always return a JSON response
    return res.status(500).json({
      error: 'Internal Server Error',
      details: error.message || 'An unexpected error occurred',
    });
  }
}
