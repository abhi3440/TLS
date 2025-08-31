import React, { useEffect, useRef, useState } from 'react';
import { LineChart, Lightbulb, Activity, TrendingUp, Check } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step, isActive, onClick }) => {
  return (
    <div 
      className={`relative flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'opacity-80 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
          isActive 
            ? 'bg-blue-700 text-white shadow-lg shadow-blue-200' 
            : 'bg-gray-200 text-gray-500'
        }`}
      >
        {icon}
      </div>
      
      <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>
        {title}
      </h3>
      
      <p className="text-gray-600 max-w-xs">{description}</p>
      
      <div className="mt-4 font-semibold text-sm text-gray-500">
        Step {step}
      </div>
    </div>
  );
};

const GrowthApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: <LineChart size={24} />,
      title: "We Analyze",
      description: "Deep dive into your brand & metrics to understand your current position and growth potential."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "We Plan",
      description: "Tailored strategies for each channel based on data-driven insights and industry expertise."
    },
    {
      icon: <Activity size={24} />,
      title: "We Execute",
      description: "Precision-driven implementation with continuous monitoring and optimization."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "We Scale",
      description: "Optimize & multiply growth by doubling down on what works and refining what doesn't."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="container">
        <div 
          className="text-center mb-16"
          ref={sectionRef}
        >
          <h2 className="section-title">Our Method to Scale</h2>
          <p className="section-subtitle">
            A systematic approach to growing your business
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-200">
            <div 
              className="h-full bg-blue-700 transition-all duration-500"
              style={{ width: `${(activeStep - 1) * 33.33}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={index + 1}
                isActive={activeStep === index + 1}
                onClick={() => setActiveStep(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-700 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Why Our Approach Works</h3>
              <p className="mb-6 opacity-90">
                Our method has been refined through years of experience. We focus on what matters: measurable results and sustainable growth.
              </p>
              <ul className="space-y-3">
                {['Data-driven decision making', 'Channel-specific expertise', 'Continuous optimization', 'Scalable strategies'].map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Results You Can Expect</h3>
              <div className="space-y-4">
                {[
                  { metric: 'Increase in conversion rate', value: '35-75%' },
                  { metric: 'Growth in organic traffic', value: '50-200%' },
                  { metric: 'Reduction in customer acquisition cost', value: '15-40%' },
                  { metric: 'Improvement in ROAS', value: '2-4x' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-gray-700">
                    <span>{item.metric}</span>
                    <span className="text-blue-700 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthApproach;