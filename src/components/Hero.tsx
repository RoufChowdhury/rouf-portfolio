import React from 'react';
import { ArrowDown, Linkedin, Github, Twitter, Globe } from 'lucide-react';
import { profile } from '../data/profile';

const socialIcons: Record<string, React.FC<{ size?: number }>> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  website: Globe,
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-brand-primary/20 shadow-xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-brand-primary font-medium tracking-wide uppercase text-sm mb-2">
            Welcome
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-tight">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary mt-3 font-light">
            {profile.tagline}
          </p>
          <p className="text-brand-secondary mt-4 max-w-lg">
            {profile.subtitle}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            {Object.entries(profile.social).map(([key, url]) => {
              if (!url) return null;
              const Icon = socialIcons[key];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow-sm border border-gray-100 text-brand-secondary hover:text-brand-primary hover:shadow-md transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-gray-200 text-brand-dark font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-brand-secondary"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
