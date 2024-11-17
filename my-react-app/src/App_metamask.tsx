// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// function App() {
//   // State variables for input data, output, error status, and wallet connection
//   const [inputData, setInputData] = useState('');
//   const [output, setOutput] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [walletAddress, setWalletAddress] = useState('');

//   // Handle MetaMask connection
//   const connectWallet = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         // Request account access if needed
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setWalletAddress(accounts[0]);
//       } catch (error) {
//         console.error('User rejected the request.');
//       }
//     } else {
//       alert('MetaMask is not installed. Please install MetaMask to use this feature.');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setOutput('');
//     setIsError(false);

//     if (!walletAddress) {
//       setOutput('Please connect your MetaMask wallet first.');
//       setIsError(true);
//       return;
//     }

//     try {
//       // Sending data to the backend server
//       const response = await fetch('http://localhost:3002/send-data', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ data: inputData, walletAddress }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit data. Please try again.');
//       }

//       const result = await response.json();
//       setOutput(`Transaction Hash: ${result.hash}`);
//     } catch (error) {
//       if (error instanceof Error) {
//         setOutput(`Error: ${error.message}`);
//       } else {
//         setOutput('An unknown error occurred.');
//       }
//       setIsError(true);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Submit Data to Blockchain</h1>
//       {!walletAddress ? (
//         <button onClick={connectWallet} style={styles.connectButton}>
//           Connect MetaMask Wallet
//         </button>
//       ) : (
//         <div style={styles.walletInfo}>Connected Wallet: {walletAddress}</div>
//       )}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label htmlFor="inputData" style={styles.label}>Enter some data:</label><br />
//         <input
//           type="text"
//           id="inputData"
//           placeholder="Type something..."
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//       {output && (
//         <div style={{ ...styles.output, ...(isError ? styles.error : styles.success) }}>
//           {output}
//         </div>
//       )}
//     </div>
//   );
// }

// // Styles for the React component
// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f5f5f5',
//   },
//   form: {
//     marginBottom: '20px',
//   },
//   label: {
//     fontSize: '16px',
//     marginBottom: '10px',
//   },
//   input: {
//     padding: '10px',
//     margin: '5px 0',
//     fontSize: '16px',
//     width: '300px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   connectButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     marginBottom: '20px',
//   },
//   walletInfo: {
//     marginBottom: '20px',
//     fontSize: '16px',
//   },
//   output: {
//     marginTop: '20px',
//     padding: '10px',
//     border: '1px solid',
//   },
//   success: {
//     backgroundColor: '#d4edda',
//     borderColor: '#c3e6cb',
//     color: '#155724',
//   },
//   error: {
//     backgroundColor: '#f8d7da',
//     borderColor: '#f5c6cb',
//     color: '#721c24',
//   },
// };

// export default App;








// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// function App() {
//   // State variables for input data, output, error status, and wallet connection
//   const [inputData, setInputData] = useState('');
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [signature, setSignature] = useState('');
//   const [output, setOutput] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [walletAddress, setWalletAddress] = useState('');

//   // Handle MetaMask connection
//   const connectWallet = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         // Request account access if needed
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setWalletAddress(accounts[0]);
//       } catch (error) {
//         console.error('User rejected the request.');
//       }
//     } else {
//       alert('MetaMask is not installed. Please install MetaMask to use this feature.');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setOutput('');
//     setIsError(false);

//     if (!walletAddress) {
//       setOutput('Please connect your MetaMask wallet first.');
//       setIsError(true);
//       return;
//     }

//     try {
//       // Sending data to the backend server
//       const response = await fetch('http://localhost:3002/send-data', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           data: inputData,
//           from,
//           to,
//           signature,
//           walletAddress,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit data. Please try again.');
//       }

//       const result = await response.json();
//       setOutput(`Transaction Hash: ${result.hash}`);
//     } catch (error) {
//       if (error instanceof Error) {
//         setOutput(`Error: ${error.message}`);
//       } else {
//         setOutput('An unknown error occurred.');
//       }
//       setIsError(true);
//     }
//   };



//   return (
//     <div style={styles.container}>
//       <h1>Submit Data to Blockchain</h1>
//       {!walletAddress ? (
//         <button onClick={connectWallet} style={styles.connectButton}>
//           Connect MetaMask Wallet
//         </button>
//       ) : (
//         <div style={styles.walletInfo}>Connected Wallet: {walletAddress}</div>
//       )}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label htmlFor="inputData" style={styles.label}>Enter some data:</label><br />
//         <input
//           type="text"
//           id="inputData"
//           placeholder="Type something..."
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <label htmlFor="from" style={styles.label}>From:</label><br />
//         <input
//           type="text"
//           id="to"
//           placeholder="to address..."
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <label htmlFor="to" style={styles.label}>To:</label><br />
//         <input
//           type="text"
//           id="to"
//           placeholder="To address..."
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <label htmlFor="signature" style={styles.label}>Signature:</label><br />
//         <input
//           type="text"
//           id="signature"
//           placeholder="Signature..."
//           value={signature}
//           onChange={(e) => setSignature(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//       {output && (
//         <div style={{ ...styles.output, ...(isError ? styles.error : styles.success) }}>
//           {output}
//         </div>
//       )}
//     </div>
//   );
// }

// // Styles for the React component
// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f5f5f5',
//   },
//   form: {
//     marginBottom: '20px',
//   },
//   label: {
//     fontSize: '16px',
//     marginBottom: '10px',
//   },
//   input: {
//     padding: '10px',
//     margin: '5px 0',
//     fontSize: '16px',
//     width: '300px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   connectButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     marginBottom: '20px',
//   },
//   walletInfo: {
//     marginBottom: '20px',
//     fontSize: '16px',
//   },
//   output: {
//     marginTop: '20px',
//     padding: '10px',
//     border: '1px solid',
//   },
//   success: {
//     backgroundColor: '#d4edda',
//     borderColor: '#c3e6cb',
//     color: '#155724',
//   },
//   error: {
//     backgroundColor: '#f8d7da',
//     borderColor: '#f5c6cb',
//     color: '#721c24',
//   },
// };

// export default App;






import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function App() {
  // State variables for input data, output, error status, and wallet connection
  const [inputData, setInputData] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [signature, setSignature] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  // Handle MetaMask connection
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('User rejected the request.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setOutput('');
    setIsError(false);

    if (!walletAddress) {
      setOutput('Please connect your MetaMask wallet first.');
      setIsError(true);
      return;
    }

    try {
      // Sending data to the backend server
      const response = await fetch('/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: inputData,
          from: from,
          to:to
        }),
      });


      if (!response.ok) {
        throw new Error('Failed to submit data. Please try again.');
      }

      const result = await response.json();
      setOutput(`Transaction Hash: ${result.hash}`);
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('An unknown error occurred.');
      }
      setIsError(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Submit Data to Blockchain</h1>
      {!walletAddress ? (
        <button onClick={connectWallet} style={styles.connectButton}>
          Connect MetaMask Wallet
        </button>
      ) : (
        <div style={styles.walletInfo}>Connected Wallet: {walletAddress}</div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="from" style={styles.label}>From:</label><br />
        <input
          type="text"
          id="from"
          placeholder="From address..."
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          style={styles.input}
        /><br />
        <label htmlFor="to" style={styles.label}>To:</label><br />
        <input
          type="text"
          id="to"
          placeholder="To address..."
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          style={styles.input}
        /><br />
        <label htmlFor="inputData" style={styles.label}>Message:</label><br />
        <input
          type="text"
          id="inputData"
          placeholder="Type something..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          required
          style={styles.input}
        /><br />
        <label htmlFor="signature" style={styles.label}>Signature:</label><br />
        <input
          type="text"
          id="signature"
          placeholder="Signature..."
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          required
          style={styles.input}
        /><br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {output && (
        <div style={{ ...styles.output, ...(isError ? styles.error : styles.success) }}>
          {output}
        </div>
      )}
    </div>
  );
}

// Styles for the React component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  form: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    fontSize: '16px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  connectButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    marginBottom: '20px',
  },
  walletInfo: {
    marginBottom: '20px',
    fontSize: '16px',
  },
  output: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid',
  },
  success: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    color: '#155724',
  },
  error: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    color: '#721c24',
  },
};

export default App;
