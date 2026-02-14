import React from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-brand-primary font-medium text-sm tracking-widest uppercase mb-4 reveal">
            Welcome to my portfolio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 reveal">
            Rouf
            <br />
            Chowdhury
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary leading-relaxed mb-8 max-w-2xl reveal">
            AI-integrated business strategist, Founder, and Researcher — driving
            innovation at the intersection of technology and strategy.
          </p>

          <div className="flex items-center gap-4 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-soft"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-light text-brand-dark px-6 py-3 rounded-lg font-medium hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-secondary"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
