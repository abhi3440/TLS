import React, { useEffect, useRef } from 'react';

// Import your specific logo images
import logo1 from '../assets/logo1.png'; // Assuming .jpeg, adjust if .png or other
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

const ClientLogos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const clientLogos = [
    { name: 'Client Logo 1', url: logo1 },
    { name: 'Client Logo 2', url: logo2 },
    { name: 'Client Logo 3', url: logo3 },
    { name: 'Client Logo 4', url: logo4 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div 
          className="text-center mb-12"
          ref={sectionRef}
        >
          <h2 className="section-title">Brands That Trust Us</h2>
          <p className="section-subtitle">
            We've helped these amazing companies grow and scale
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={client.url} 
                alt={client.name} 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* The "Client Success Stories" section you asked to remove was here */}

      </div>
    </section>
  );
};

export default ClientLogos;