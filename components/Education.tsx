import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../types';

const degrees: EducationType[] = [
  {
    school: 'Stanford University',
    degree: 'M.S. in Computer Science (AI Track)',
    period: '2019 — 2021',
    details:
      'Focused on natural language processing and deep learning. Thesis on hierarchical attention mechanisms for document summarization.',
  },
  {
    school: 'University of Pennsylvania',
    degree: 'B.S. in Economics & Computer Science',
    period: '2015 — 2019',
    details:
      "Double major combining quantitative economics with computer science fundamentals. Dean's List all semesters.",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {degrees.map((d, i) => (
            <div
              key={i}
              className="bg-brand-bg rounded-2xl p-8 shadow-soft hover:shadow-hover transition-shadow duration-300 reveal"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mt-1">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{d.degree}</h3>
                  <p className="text-brand-primary font-medium">{d.school}</p>
                  <p className="text-sm text-brand-secondary mt-1">{d.period}</p>
                  {d.details && (
                    <p className="text-brand-secondary mt-3 text-sm leading-relaxed">
                      {d.details}
                    </p>
                  )}
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
