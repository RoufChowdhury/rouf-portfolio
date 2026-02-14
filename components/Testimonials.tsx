import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Rouf has a rare ability to connect deep technical understanding with real business impact. His work on our AI strategy was transformative.',
    name: 'Sarah Chen',
    title: 'VP of Product, Fintech Co.',
  },
  {
    quote:
      "An exceptional researcher and strategist. Rouf's insights on transformer models directly influenced our product roadmap.",
    name: 'Dr. James Park',
    title: 'Professor, Stanford AI Lab',
  },
  {
    quote:
      'Working with Rouf was a masterclass in disciplined thinking. He brings clarity and rigor to everything he touches.',
    name: 'Michael Torres',
    title: 'Managing Partner, Apex Ventures',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-shadow duration-300 flex flex-col reveal"
            >
              <Quote size={28} className="text-brand-primary/30 mb-4" />
              <p className="text-brand-secondary text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-brand-light">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-brand-secondary">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
