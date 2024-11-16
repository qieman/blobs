// index.ts
import express from 'express';
import cors from 'cors';
import { parseGwei, stringToHex, toBlobs } from 'viem';
import { account, client } from './client';
import { kzg}  from './kzg';



const app = express();
app.use(express.json());
app.use(cors());

// API endpoint to receive data and create blockchain transaction
app.post('/send-data', async (req, res) => {
  const { data } = req.body;

  function stringToHex(jsonObject) {
    // Convert the object to a JSON string
    const jsonString = JSON.stringify(jsonObject);

    // Convert the JSON string to hex
    let hexString = '';
    for (let i = 0; i < jsonString.length; i++) {
        hexString += jsonString.charCodeAt(i).toString(16).padStart(2, '0');
    }

    return hexString;
}

const hexResult = stringToHex(req.body);

  console.log(req.body)

  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  try {
    // Convert the data to a hex string, create blobs, and send a transaction
    const blobs = toBlobs({ data: hexResult });

    console.log("blobs",blobs)

    const hash = await client.sendTransaction({
      blobs,
      kzg,
      maxFeePerBlobGas: parseGwei('300'),
      to: '0x0000000000000000000000000000000000000000',
    });


    res.json({ hash });
  } catch (error) {
    console.error('Error sending transaction:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
