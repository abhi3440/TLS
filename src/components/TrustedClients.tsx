import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Zap, Megaphone } from 'lucide-react';

const TrustedClients: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container">
        <div 
          className="max-w-3xl mx-auto text-center"
          ref={sectionRef}
          style={{ opacity: 0 }}
        >
          <h2 className="section-title">Proven Results, Across Industries</h2>
          <p className="section-subtitle mb-8">
            We've worked with 30+ brands in D2C, EdTech, and SaaS to drive measurable growth.
          </p>

          <button 
            onClick={scrollToPortfolio}
            className="btn btn-primary"
          >
            View Portfolio
          </button>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          ref={statsRef}
          style={{ opacity: 0 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Users className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">30+ Happy Clients</h3>
            <p className="text-gray-600">
              Trusted by startups and established brands alike across multiple industries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Zap className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
            <p className="text-gray-600">
              Our clients see tangible growth within the first 30 days of partnership.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Megaphone className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Marketing Support</h3>
            <p className="text-gray-600">
              Comprehensive organic and paid marketing solutions for sustainable growth.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Client Success Guarantee</h3>
              <p className="text-gray-600 mb-4">
                We're so confident in our ability to deliver results that we offer a 100% satisfaction guarantee. If we don't meet the agreed KPIs, we'll continue working at no additional cost until we do.
              </p>
              
              <ul className="space-y-2">
                {['Transparent reporting', 'Weekly check-ins', 'No long-term contracts', 'Results-focused approach'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">94%</p>
                <p className="text-lg font-medium mb-4">Client Retention Rate</p>
                <p className="text-gray-600 text-sm">
                  Our clients stay with us because we deliver consistent results month after month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;