import React from 'react';
import { Quote } from 'lucide-react';
import { profile } from '../data/profile';

const Testimonials: React.FC = () => {
  if (!profile.testimonials || profile.testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profile.testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote size={28} className="text-brand-primary/30 mb-4" />
              <p className="text-brand-dark leading-relaxed italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-brand-dark">{t.author}</p>
                <p className="text-sm text-brand-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
