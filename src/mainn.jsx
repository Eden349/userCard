import React from 'react';
import UserCard from './UserCard';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <UserCard name="someone someone" email="someone.someone@example.com" age={30} />
      <UserCard name="someone someone" email="someone.someone@example.com" age={25} backgroundColor="#a3c9f1" />
    </div>
  );
};

export default App;

