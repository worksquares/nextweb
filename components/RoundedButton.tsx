// components/RoundedButton.tsx
import React from 'react';

interface RoundedButtonProps {
  text: string;
  bgColor: string;
  hoverColor: string;
  onClick?: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  bgColor,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: 'white',
        padding: '10px 30px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '45px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        height:'40px',
        width:'132px',
        marginTop:'30px'
      }}
      onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = bgColor)}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
