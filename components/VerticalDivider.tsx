import React from 'react';

const VerticalDivider: React.FC = () => {
  return (
    <div
      style={{
        width: '2px',
        backgroundColor: '#FF0707',
        alignSelf: 'stretch', // Makes it fill parent's height in flex layouts
        minHeight: '50px',    // Fallback for smaller mobile buttons
      }}
    />
  );
};

export default VerticalDivider;
