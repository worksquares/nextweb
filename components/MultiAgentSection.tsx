import React from 'react';
import VerticalDivider from '../components/VerticalDivider';
import { LearnMoreButton } from './Button/Button';

const MultiAgentSection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginLeft: '20px',
        marginBottom: '100px',
        padding: '1rem',
      }}
    >
      <h3
        style={{
          fontWeight: 300,
          marginBottom: '0px',
          marginRight: '10px',
          fontSize: '2rem',
        }}
      >
        Build{' '}
        <span style={{ fontWeight: 900 }}>
          Apps, Chatbots, and AI Models
        </span>{' '}
        Effortlessly with No Code Required
      </h3>

      <p
        style={{
          color: '#606060',
          marginTop: '0px',
          marginBottom: '20px',
          fontSize: '1rem',
        }}
      >
        Leverage Digisquares’ all-in-one platform for quick app development, chatbot creation, and AI model deployment.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '10px',
          flexWrap: 'nowrap',
          width: '100%',
          maxWidth: '340px', // Keep buttons and divider aligned on mobile
        }}
      >
        <LearnMoreButton
          text="Register"
          bgColor="#FF0707"
          color="#fff"
          hoverBgColor="#E74C3C"
          hoverTextColor="#fff"
          onClick={() => window.location.href = "https://app.digisquares.com/register"}
          style={{ flex: 1 }}
        />

        <VerticalDivider />

        <LearnMoreButton
          text="Login"
          bgColor="#000000"
          hoverBgColor="#e74c3c"
          hoverTextColor="#ffffff"
          color="#fff"
          onClick={() => window.location.href = "https://app.digisquares.com/login"}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default MultiAgentSection;
