import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "Fashion Retailer",
      description: "Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversion rate.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["E-commerce", "UI/UX", "Web Development"],
      link: "#"
    },
    {
      title: "Social Media Growth Campaign",
      client: "Food & Beverage Brand",
      description: "Strategic social media campaign that grew following by 200% and engagement by 150% in 3 months.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Social Media", "Content Strategy", "Growth"],
      link: "#"
    },
    {
      title: "SaaS Marketing Website",
      client: "Tech Startup",
      description: "Design and development of a high-converting marketing website that increased demo signups by 80%.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web Design", "Development", "SaaS"],
      link: "#"
    },
    {
      title: "Brand Identity Design",
      client: "Wellness Company",
      description: "Complete brand identity redesign including logo, guidelines, and marketing materials.",
      image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Branding", "Design", "Identity"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our best work and the results we've achieved for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.client}</p>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-600">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;