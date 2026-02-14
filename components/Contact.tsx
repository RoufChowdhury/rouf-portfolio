import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, research
            collaborations, or just having a conversation about AI and business.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-16 reveal">
          <a
            href="mailto:rouf@example.com"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
          >
            <Mail size={18} />
            Email
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
          >
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Rouf Chowdhury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
