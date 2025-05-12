
import Link from 'next/link';
import React from 'react';
import RoundedButton from '../components/RoundedButton';
import VerticalDivider from '../components/VerticalDivider';

const MultiAgentSection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginLeft:'20px',
        marginBottom:'100px'
      }}
    >
    <h1 style={{ fontSize: '45px', fontWeight: 300, marginBottom: '0px', marginRight: "10px" }}>
  Build{' '}
  <span style={{ fontSize: '45px', fontWeight: 900 }}>
    Apps, Chatbots, and AI Models
  </span>{' '}
  Effortlessly with No Code Required
</h1>
<p style={{ fontSize: '16px', color: '#606060', marginBottom: '20px' }}>
  Leverage Digisquares’ all-in-one platform for quick app development, chatbot creation, and AI model deployment.
</p>


      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
         <Link href="https://app.digisquares.com/register" passHref>
        <RoundedButton
          text="Register"
          bgColor="#FF0707"
          hoverColor="#e74c3c"
        />
        </Link>
        <VerticalDivider />
        <Link href="https://app.digisquares.com/login" passHref>
        <RoundedButton
          text="Login"
          bgColor="#000000"
          hoverColor="#333333"
        />
        </Link>
      </div>
    </div>
  );
};

export default MultiAgentSection;
