import React, { useEffect, useRef } from 'react';
import { BarChart3, Users, Search, Globe , Store, MapPin } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in');
              entry.target.classList.add('slide-up');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      className="card p-6 flex flex-col h-full text-center items-center"
      ref={cardRef}
    >
      <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      icon: <Globe size={28} />,
      title: "Website Building",
      description: "Custom, conversion-ready storefronts designed to maximize sales, speed, and user experience."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Marketing",
      description: "ROI-driven paid campaigns that deliver measurable results across multiple platforms and touchpoints."
    },
    {
      icon: <Users size={28} />,
      title: "Social Media Management",
      description: "Build a strong brand voice and community through strategic content creation, scheduling, and engagement."
    },
    {
      icon: <Search size={28} />,
      title: "AI-powered SEO",
      description: "Rank faster and smarter with AI-driven, geo-targeted strategies designed to improve visibility and traffic."
    },
    {
        icon: <Store size={28} />,
        title: "eCommerce Marketplace Management",
        description: "Seamless management of your Amazon, Flipkart, Myntra, and other marketplace stores to maximize sales and growth."
    },
    {
        icon: <MapPin size={28} />,
        title: "Local SEO & Marketing",
        description: "Boost your local presence with optimized listings, targeted campaigns, and strategies that drive customers to your doorstep."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div
          className="text-center mb-12"
          ref={titleRef}
        >
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            Our specialized services designed to accelerate your brand's growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;