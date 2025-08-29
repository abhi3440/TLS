import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustedClients from './components/TrustedClients';
import GrowthApproach from './components/GrowthApproach';
import ClientLogos from './components/ClientLogos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="font-inter text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustedClients />
        <GrowthApproach />
        <Portfolio />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;