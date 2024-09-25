import React, { useState } from 'react';

const Admin = () => {
  const [ptac, setPtac] = useState('');
  const [marks1, setMarks1] = useState('');
  const [marks2, setMarks2] = useState('');
  const [plagiarismMarks, setPlagiarismMarks] = useState('');

  const handlePtacChange = (e) => {
    setPtac(e.target.value);
  };

  const handleMarksChange1 = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 10)) {
      setMarks1(value);
    }
  };

  const handleMarksChange2 = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 10)) {
      setMarks2(value);
    }
  };

  const handlePlagiarismMarksChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 5)) {
      setPlagiarismMarks(value);
    }
  };

  const viewInitialSubmission = () => {
    alert('Viewing Initial Submission document from the database');
  };

  const viewFinalSubmission = () => {
    alert('Viewing Final Submission document from the database');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Page</h2>
        <div style={styles.inputContainer}>
          <label style={styles.label}>PTAC:</label>
          <select style={styles.input} value={ptac} onChange={handlePtacChange}>
            <option value="">Select PTAC</option>
            <option value="ptac1">PTAC 1</option>
            <option value="ptac2">PTAC 2</option>
            <option value="ptac3">PTAC 3</option>
          </select>
        </div>

        {ptac && (
          <>
            <div style={styles.documentContainer}>
              <h3 style={styles.documentTitle}>Initial Submission</h3>
              <div style={styles.inputContainer}>
                <label style={styles.label}>Marks (1-10):</label>
                <input
                  type="number"
                  value={marks1}
                  onChange={handleMarksChange1}
                  style={styles.input}
                  min="1"
                  max="10"
                />
              </div>
              <button style={styles.button} onClick={viewInitialSubmission}>
                View Initial Submission Document
              </button>
            </div>

            <div style={styles.documentContainer}>
              <h3 style={styles.documentTitle}>Final Submission</h3>
              <div style={styles.inputContainer}>
                <label style={styles.label}>Marks (1-10):</label>
                <input
                  type="number"
                  value={marks2}
                  onChange={handleMarksChange2}
                  style={styles.input}
                  min="1"
                  max="10"
                />
              </div>
              <button style={styles.button} onClick={viewFinalSubmission}>
                View Final Submission Document
              </button>
            </div>

            <div style={styles.inputContainer}>
              <label style={styles.label}>Plagiarism Marks (1-5):</label>
              <input
                type="number"
                value={plagiarismMarks}
                onChange={handlePlagiarismMarksChange}
                style={styles.input}
                min="1"
                max="5"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f2f5f9',
    padding: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#0073e6',
    fontFamily: 'Noto Sans, Arial',
  },
  documentContainer: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  documentTitle: {
    marginBottom: '10px',
    fontSize: '20px',
    color: '#0073e6',
    fontFamily: 'Noto Sans, Arial',
  },
  inputContainer: {
    marginBottom: '10px',
    width: '100%',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    fontFamily: 'Noto Sans, Arial',
    marginRight: '10px',
  },
  input: {
    width: '90%',
    padding: '5px',
    marginTop: '5px',
    marginRight: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'Noto Sans, Arial',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0073e6',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Admin;
