import React, { useState } from 'react';

const Review = () => {
    const [ptac, setPtac] = useState('');
    const [marks1, setMarks1] = useState('');
    const [marks2, setMarks2] = useState('');
    const [marks3, setMarks3] = useState('');
    const [marks4, setMarks4] = useState('');
    const [marks5, setMarks5] = useState('');
    const [marks6, setMarks6] = useState('');
    const [marks7, setMarks7] = useState('');
    const [worklogMarks, setWorklogMarks] = useState('');

    const handlePtacChange = (e) => {
        setPtac(e.target.value);
    };

    const handleMarksChange = (setMarksFn) => (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 10)) {
            setMarksFn(value);
        }
    };

    const handleWorklogChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 5)) {
            setWorklogMarks(value);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Review Marks Page</h2>

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
                            <h3 style={styles.documentTitle}>Review Marks</h3>
                            <div style={styles.inputContainer}>
                                <label style={styles.label}>Novelty of the project:</label>
                                <input
                                    type="number"
                                    value={marks1}
                                    onChange={handleMarksChange(setMarks1)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                                <label style={styles.label}>Uniqueness of the project:</label>
                                <input
                                    type="number"
                                    value={marks2}
                                    onChange={handleMarksChange(setMarks2)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                                <label style={styles.label}>Feasibility of the project:</label>
                                <input
                                    type="number"
                                    value={marks3}
                                    onChange={handleMarksChange(setMarks3)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                                <label style={styles.label}>Impact of the project:</label>
                                <input
                                    type="number"
                                    value={marks4}
                                    onChange={handleMarksChange(setMarks4)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                                <label style={styles.label}>Sustainability of the project:</label>
                                <input
                                    type="number"
                                    value={marks5}
                                    onChange={handleMarksChange(setMarks5)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                                <label style={styles.label}>Scalability of the project:</label>
                                <input
                                    type="number"
                                    value={marks6}
                                    onChange={handleMarksChange(setMarks6)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                            </div>
                        </div>

                        <div style={styles.documentContainer}>
                            <h3 style={styles.documentTitle}>Team Collaboration and Communication Marks</h3>
                            <div style={styles.inputContainer}>
                                <label style={styles.label}>Marks (1-10):</label>
                                <input
                                    type="number"
                                    value={marks7}
                                    onChange={handleMarksChange(setMarks7)}
                                    style={styles.input}
                                    min="1"
                                    max="10"
                                />
                            </div>
                        </div>

                        <div style={styles.inputContainer}>
                            <label style={styles.label}>Worklog Marks (1-5):</label>
                            <input
                                type="number"
                                value={worklogMarks}
                                onChange={handleWorklogChange}
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
        width: '90%',
    },
    documentTitle: {
        marginBottom: '10px',
        fontSize: '20px',
        color: '#0073e6',
        fontFamily: 'Noto Sans, Arial',
    },
    inputContainer: {
        marginBottom: '10px',
        width: '90%',
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
};

export default Review;
