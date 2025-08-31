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
              // Removed 'grayscale hover:grayscale-0' classes
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={client.url} 
                alt={client.name} 
                className="max-h-16 max-w-full object-contain" // Increased max-h slightly for better visibility
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Success Stories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { company: "TechStartup Inc.", industry: "SaaS", result: "250% increase in MRR within 6 months through targeted performance marketing." },
                { company: "EcoGoods", industry: "D2C E-commerce", result: "4x ROAS on ad spend and 3x growth in organic traffic through combined SEO and paid strategy." },
                { company: "LearnFast", industry: "EdTech", result: "Reduced CAC by 45% while scaling acquisition from 300 to 2,000 users per month." }
              ].map((story, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {story.industry}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{story.company}</h4>
                  <p className="text-gray-600">{story.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;