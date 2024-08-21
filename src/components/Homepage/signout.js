import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('authToken'); 
    sessionStorage.removeItem('userData'); 
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Out</h2>
      <button
        style={styles.button}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '12px auto',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#38B2AC', // Teal color
    marginBottom: '16px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#38B2AC', // Teal color
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2C7A7B', // Darker teal
  },
  buttonActive: {
    backgroundColor: '#285E61', // Even darker teal
    transform: 'scale(0.95)',
  },
};

export default SignOut;
