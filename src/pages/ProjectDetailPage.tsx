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

  const renderContent = (content: string) => {
    return <span className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const getGalleryImage = (index: number) => {
    return Array.isArray(project.galleryImages) && project.galleryImages.length > index 
      ? project.galleryImages[index] 
      : null;
  };

  const heroImage = getGalleryImage(0);
  const instagramImage = getGalleryImage(1);
  const amazonImage = getGalleryImage(2);
  const backendImage = getGalleryImage(3);
  
  const howWeScaledSection = project.details.sections[0];
  const keyResultsSection = project.details.sections[1];


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
          {Array.isArray(project.tags) && (
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.client}</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* 1. Immersive Hero Image */}
          {heroImage && (
            <div className="mb-12">
              <img 
                src={heroImage}
                alt={`${project.title} hero`}
                className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* 2. About Section */}
          {project.details?.about && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{project.details.about.title}</h2>
              {Array.isArray(project.details.about.content) && project.details.about.content.map((paragraph, index) => (
                 <p key={index} className="text-gray-700 text-lg mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          )}
          
          {/* 3. "How We Scaled" Section */}
          {howWeScaledSection && (
              <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">{howWeScaledSection.title}</h2>
                  <div className="space-y-8">
                    {howWeScaledSection.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-2xl font-semibold mb-4">{subsection.subtitle}</h3>
                        <ul className="space-y-4">
                          {subsection.content.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <Check className="w-4 h-4 text-blue-600" />
                              </div>
                              {renderContent(item)}
                            </li>
                          ))}
                        </ul>

                        {/* Insert images at specific points */}
                        {subIndex === 1 && instagramImage && (
                          <div className="my-12">
                              <img 
                                  src={instagramImage} 
                                  alt="Project Instagram presence"
                                  className="w-full h-auto rounded-xl shadow-lg" 
                              />
                          </div>
                        )}
                        {subIndex === 3 && amazonImage && backendImage && (
                          <div className="my-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
                              <img src={amazonImage} alt="Project Amazon listing" className="rounded-xl shadow-lg" />
                              <img src={backendImage} alt="Project e-commerce backend" className="rounded-xl shadow-lg" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
              </div>
          )}

          {/* 4. "Key Results" Section */}
          {keyResultsSection && (
              <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4">{keyResultsSection.title}</h2>
                  {Array.isArray(keyResultsSection.content) && (
                    <ul className="space-y-4">
                      {keyResultsSection.content.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          {renderContent(item)}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;