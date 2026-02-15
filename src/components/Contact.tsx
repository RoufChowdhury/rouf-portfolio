import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, Globe } from 'lucide-react';
import { profile } from '../data/profile';

const socialIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  website: Globe,
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Get in Touch</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-md mx-auto text-center reveal">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail size={20} className="text-brand-accent" />
            <a
              href={`mailto:${profile.email}`}
              className="text-lg hover:text-brand-accent transition-colors"
            >
              {profile.email}
            </a>
          </div>

          {profile.location && (
            <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
          )}

          <div className="flex justify-center gap-4">
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
                  className="p-3 rounded-full bg-white/10 hover:bg-brand-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <p className="mt-12 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
