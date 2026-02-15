import React from 'react';
import { Lightbulb, TrendingUp, Target } from 'lucide-react';
import { profile } from '../data/profile';

// Map icon names from profile.ts to actual components.
// Add any icons you use in profile.about.highlights here.
const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Lightbulb,
  TrendingUp,
  Target,
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {profile.about.heading}
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
          <p className="text-brand-secondary mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            {profile.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profile.about.highlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="reveal bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                {Icon && (
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-brand-primary" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
