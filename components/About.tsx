import React from 'react';
import { Lightbulb, TrendingUp, Brain } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Technology',
    text: 'Leveraging artificial intelligence to create scalable business solutions and drive data-informed decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    text: 'Developing growth strategies that align technology capabilities with market opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Research & Innovation',
    text: 'Conducting applied research to explore emerging technologies and their real-world applications.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-lg text-brand-secondary leading-relaxed">
            I'm a multidisciplinary professional passionate about bridging the gap
            between cutting-edge AI technologies and practical business applications.
            With experience spanning strategic consulting, venture building, and
            academic research, I bring a unique perspective to every challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-brand-bg rounded-2xl p-8 text-center hover:shadow-hover transition-shadow duration-300 reveal"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-xl mb-5">
                <h.icon size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-3">{h.title}</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
