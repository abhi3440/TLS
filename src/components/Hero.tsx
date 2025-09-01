import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-white to-blue-50"
      ref={heroRef}
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Your Digital Growth Partner</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            We don’t just build — we scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary group"
            >
              Let's Grow Together
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn btn-secondary"
            >
              Our Portfolio
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8">
  {[
    { number: '30+', label: 'Clients' },
    { number: '9.5', label: 'Customer Satisfaction Score' },
    { number: '4x', label: 'Avg ROI' }
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <p className="text-3xl font-bold text-blue-700">{stat.number}</p>
      <p className="text-sm text-gray-600">{stat.label}</p>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;