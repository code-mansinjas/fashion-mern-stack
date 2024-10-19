import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Loading...</h2>
      {/* You can add a spinner or any loading indicator here */}
      <div className="spinner" />
    </div>
  );
};

export default Loading;
