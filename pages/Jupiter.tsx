import Head from 'next/head';
import CTA from '../components/CTA';
import Demo from '../components/Demo';
import Features from '../components/Features';
import Hero from '../components/Hero';
import JupiterFooter from '../components/JupiterFooter';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

export default function JupiterLanding() {
  return (
    <>
      <Head>
        <title>Jupiter CLI - AI-Powered Coding Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Stats />
      <CTA />
      <JupiterFooter />
    </>
  );
}
