import React from 'react';
import { FlaskConical, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            Projects
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profile.projects.map((project, i) => (
            <div
              key={i}
              className="reveal bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-accent" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FlaskConical size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-secondary">{project.organization}</p>
                    <p className="text-xs text-brand-secondary">{project.year}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-brand-dark mb-1">{project.title}</h3>
                <p className="text-brand-primary text-sm font-medium mb-3">{project.role}</p>
                <p className="text-brand-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white text-brand-secondary text-xs rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-primary hover:underline"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
