import React from 'react';
import logo from '../components/log.jpeg';
// import { useNavigate } from 'react-router-dom';
import GAuth from "../components/GAuth";
import Gauthtest from '../components/Gauthtest';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f5f9',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  welcomeText: {
    marginBottom: '20px',
    fontSize: '24px',
    alignItems: 'center',
    color: '#0073e6',
    fontFamily:'Noto Sans,Ariel',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily:'Noto Sans',
    cursor: 'pointer',
  },
};
const Signin = () => {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate('/review');
  // };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.welcomeText}>Reward Point Calculation Portal</h2>
        <img src={logo} alt=" jk  "/>
         <button style={styles.loginButton} ><GAuth/></button> 
        
      </div>
    </div>
  );
};



export default Signin;
