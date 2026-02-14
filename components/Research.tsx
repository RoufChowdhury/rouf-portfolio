import React from 'react';
import { ExternalLink, FlaskConical } from 'lucide-react';
import { ResearchProject } from '../types';

const projects: ResearchProject[] = [
  {
    title: 'Transformer-based Document Summarization at Scale',
    role: 'Lead Researcher',
    period: '2020 — 2021',
    institution: 'Stanford AI Lab',
    description:
      'Developed a novel fine-tuning approach for long-form document summarization using hierarchical attention mechanisms, achieving state-of-the-art results on benchmark datasets.',
    tags: ['NLP', 'Transformers', 'Deep Learning', 'Python'],
  },
  {
    title: 'AI-Driven Market Segmentation Framework',
    role: 'Co-Investigator',
    period: '2022',
    institution: 'Apex Ventures',
    description:
      'Built an unsupervised learning pipeline that clusters customers by behavioral patterns, enabling hyper-targeted product positioning for early-stage startups.',
    tags: ['Machine Learning', 'Clustering', 'Product Strategy', 'Data Science'],
  },
  {
    title: 'Ethics of Generative AI in Business Decision-Making',
    role: 'Author',
    period: '2023',
    institution: 'Independent Research',
    description:
      'Published a white paper examining the ethical implications of deploying generative AI models for strategic business decisions, with a focus on bias mitigation and transparency.',
    tags: ['AI Ethics', 'Generative AI', 'Policy', 'Governance'],
  },
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Research & Projects</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-brand-bg rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300 flex flex-col reveal"
            >
              {/* Colored top bar */}
              <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-accent" />

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center">
                    <FlaskConical size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-secondary">{p.institution}</p>
                    <p className="text-xs text-brand-secondary">{p.period}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-brand-primary font-medium mb-3">{p.role}</p>
                <p className="text-sm text-brand-secondary leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
