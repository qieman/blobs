import React, { useState } from 'react';

function App() {
  // State variables for input data, output, and error status
  const [inputData, setInputData] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setOutput('');
    setIsError(false);

    try {
      // Sending data to the backend server
      const response = await fetch('http://localhost:3002/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data. Please try again.');
      }

      const result = await response.json();
      setOutput(`Transaction Hash: ${result.hash}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setIsError(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Submit Data to Blockchain</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="inputData" style={styles.label}>Enter some data:</label><br />
        <input
          type="text"
          id="inputData"
          placeholder="Type something..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          required
          style={styles.input}
        />
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
