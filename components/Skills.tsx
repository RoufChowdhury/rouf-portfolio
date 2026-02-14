import React from 'react';
import { SkillCategory } from '../types';

const categories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'LLMs', 'RAG'],
  },
  {
    title: 'Programming',
    items: ['Python', 'TypeScript', 'SQL', 'R', 'Java', 'Bash'],
  },
  {
    title: 'Business & Strategy',
    items: ['Product Management', 'Market Analysis', 'Financial Modeling', 'Go-to-Market', 'Fundraising'],
  },
  {
    title: 'Tools & Platforms',
    items: ['AWS', 'GCP', 'Docker', 'Git', 'Tableau', 'Figma'],
  },
];

const colorMap: Record<number, string> = {
  0: 'bg-blue-50 text-blue-700',
  1: 'bg-emerald-50 text-emerald-700',
  2: 'bg-amber-50 text-amber-700',
  3: 'bg-violet-50 text-violet-700',
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Skills</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-shadow duration-300 reveal"
            >
              <h3 className="font-semibold text-lg mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`text-sm font-medium px-4 py-2 rounded-lg ${colorMap[i] || colorMap[0]}`}
                  >
                    {item}
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

export default Skills;
