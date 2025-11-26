import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Research'; // Importing the Research component as Projects
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
      </main>
      <Contact />
    </div>
  );
};

export default App;