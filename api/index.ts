import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseGwei, stringToHex, toBlobs } from 'viem';
import { client } from './client';
import { kzg } from './kzg';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  try {
    // Convert the data to a hex string, create blobs, and send a transaction
    const blobs = toBlobs({ data: stringToHex(data) });

    const hash = await client.sendTransaction({
      blobs,
      kzg,
      maxFeePerBlobGas: parseGwei('300'),
      to: '0x0000000000000000000000000000000000000000',
    });

    res.status(200).json({ hash });
  } catch (error) {
    console.error('Error sending transaction:', error);
    res.status(500).json({ error: error.message });
  }
}

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
