import React, { useState } from 'react';

export const Profile = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const auth = JSON.parse(sessionStorage?.auth);

  const signOut = () => {
    sessionStorage?.removeItem('auth');
    window.location.reload(3);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={togglePopover}>My Profile</button>
      {isPopoverOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            padding: '1rem',
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              lineHeight: '1',
              cursor: 'pointer',
            }}
            onClick={togglePopover}
          >
            &times;
          </button>
          <div style={{ marginBottom: '0.5rem' }}>Gmail: {auth?.Gmail}</div>
          <div style={{ marginBottom: '0.5rem' }}>Password: {auth?.Password}</div>
          <div style={{ marginBottom: '0.5rem' }}>Phone: {auth?.Phone}</div>
          <div style={{ marginBottom: '0.5rem' }}>Register No: {auth?.Registerno}</div>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
