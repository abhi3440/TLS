import React, { useEffect, useRef } from 'react';

// Import your specific logo images
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

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
    { name: 'Client Logo 3', url: logo3 },
    { name: 'Client Logo 2', url: logo2 }
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12" ref={sectionRef}>
          <h2 className="section-title">Brands That Trust Us</h2>
          <p className="section-subtitle">
            We've helped these amazing companies grow and scale
          </p>
        </div>

        {/* Updated grid for equal distribution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-20 transition-all duration-300 hover:scale-105"
            >
              <img
                src={client.url}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
