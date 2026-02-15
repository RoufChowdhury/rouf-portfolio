import React from 'react';
import { Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Experience</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-8">
          {profile.experience.map((job, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-brand-primary/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm text-brand-secondary">{job.company}</p>
                  <p className="text-sm text-brand-secondary">{job.period}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-1">{job.role}</h3>
              <p className="text-brand-secondary mb-4 leading-relaxed">{job.description}</p>

              <ul className="space-y-2 mb-4">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-brand-secondary">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-brand-secondary text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
