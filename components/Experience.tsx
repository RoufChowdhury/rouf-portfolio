import React from 'react';
import { Briefcase } from 'lucide-react';
import { Job } from '../types';

const jobs: Job[] = [
  {
    company: 'Apex Ventures',
    role: 'Founder & CEO',
    period: '2023 — Present',
    location: 'New York, NY',
    description:
      'Leading a venture studio focused on AI-powered SaaS products for small and medium businesses.',
    achievements: [
      'Launched 3 AI-driven products reaching 10K+ users in the first year',
      'Raised pre-seed funding and built a cross-functional team of 8',
      'Established partnerships with enterprise clients across fintech and healthcare',
    ],
    skills: ['Leadership', 'Product Strategy', 'AI/ML', 'Fundraising'],
  },
  {
    company: 'McKinsey & Company',
    role: 'Business Analyst',
    period: '2021 — 2023',
    location: 'Chicago, IL',
    description:
      'Advised Fortune 500 clients on digital transformation and operational efficiency.',
    achievements: [
      'Led data analytics workstream for a $2B retail transformation',
      'Developed an AI adoption framework adopted across 4 client engagements',
      'Mentored junior analysts and contributed to firm knowledge initiatives',
    ],
    skills: ['Consulting', 'Data Analytics', 'Digital Strategy', 'Client Management'],
  },
  {
    company: 'Stanford AI Lab',
    role: 'Research Assistant',
    period: '2019 — 2021',
    location: 'Stanford, CA',
    description:
      'Contributed to NLP research exploring transformer architectures for document summarization.',
    achievements: [
      'Co-authored 2 papers published at top-tier NLP conferences',
      'Built evaluation pipelines used across multiple research projects',
      'Presented findings at internal seminars and external workshops',
    ],
    skills: ['NLP', 'Python', 'PyTorch', 'Research Methods'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-shadow duration-300 reveal"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mt-1">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-brand-primary font-medium">{job.company}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-sm text-brand-secondary">{job.period}</p>
                  <p className="text-sm text-brand-secondary">{job.location}</p>
                </div>
              </div>

              {job.description && (
                <p className="text-brand-secondary mb-4">{job.description}</p>
              )}

              {job.achievements && (
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-brand-dark">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}

              {job.skills && (
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
