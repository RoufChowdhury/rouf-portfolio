import React from 'react';
import { GraduationCap } from 'lucide-react';
import { profile } from '../data/profile';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Education</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="reveal bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{edu.degree}</h3>
                  <p className="text-brand-primary font-medium text-sm">{edu.school}</p>
                  <p className="text-brand-secondary text-sm mt-1">{edu.period}</p>
                  <p className="text-brand-secondary mt-3 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
