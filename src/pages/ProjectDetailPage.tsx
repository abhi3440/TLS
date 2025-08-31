import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.ts';
import { ArrowLeft, Check } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="container py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The project you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-16">
      <div className="container">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        <header className="mb-12 text-center">
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.client}</p>
        </header>

        <div className="mb-12">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">About the Project</h2>
              {project.details.about.map((paragraph, index) => (
                 <p key={index} className="text-gray-700 text-lg mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Contribution</h2>
               <ul className="space-y-3">
                {project.details.contribution.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;