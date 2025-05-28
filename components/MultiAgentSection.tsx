
import React from 'react';
import VerticalDivider from '../components/VerticalDivider';
import { MediumButton } from './Button/Button';

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
    <h3 style={{
      // fontSize: '45px',
      fontWeight: 300,
      marginBottom: '0px', marginRight: "10px" }}>
  Build{' '}
  <span style={{
    // fontSize: '45px',
    fontWeight: 900 }}>
    Apps, Chatbots, and AI Models
  </span>{' '}
  Effortlessly with No Code Required
</h3>
<p style={{
  // fontSize: '16px',
  color: '#606060', marginTop:'0px', marginBottom: '20px' }}>
  Leverage Digisquares’ all-in-one platform for quick app development, chatbot creation, and AI model deployment.
</p>


      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
         {/* <Link href="https://app.digisquares.com/register" passHref>
        <RoundedButton
          text="Register"
          bgColor="#FF0707"
          hoverColor="#e74c3c"
        />
        </Link> */}

        <MediumButton
        text="Register"
        bgColor="#FF0707"
        color='#fff'
        hoverBgColor="#e74c3c"
        hoverTextColor="#000000"
        onClick={() => window.location.href = "https://app.digisquares.com/register"}
        />

        <VerticalDivider />


        {/* <Link href="https://app.digisquares.com/login" passHref>
        <RoundedButton
          text="Login"
          bgColor="#000000"
          hoverColor="#333333"
        />
        </Link> */}

<MediumButton
  text="Login"
  bgColor="#000000"
  hoverBgColor="#e74c3c"  // Dynamic hover background color
  hoverTextColor="#ffffff"  // Dynamic hover text color
  color="#fff"
  onClick={() => window.location.href = "https://app.digisquares.com/login"}
/>



      </div>
    </div>
  );
};

export default MultiAgentSection;
