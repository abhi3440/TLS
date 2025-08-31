import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustedClients from '../components/TrustedClients';
import GrowthApproach from '../components/GrowthApproach';
import ClientLogos from '../components/ClientLogos';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <TrustedClients />
      <GrowthApproach />
      <Portfolio />
      <ClientLogos />
      <Contact />
    </>
  );
};

export default HomePage;