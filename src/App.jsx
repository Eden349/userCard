import React from 'react';

const UserCard = ({ name, email, age, backgroundColor = '#f0f0f0' }) => {
  return (
    <div style={{ 
        backgroundColor: backgroundColor, 
        borderRadius: '10px', 
        padding: '20px', 
        width: '250px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        textAlign: 'center'
      }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
