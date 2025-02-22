import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Team } from './components/team';
import { Experience } from './components/experiencia';
import { EducationAndCertifications } from './components/Estudios';
import AboutContact from './components/about';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
     {/*  <Experience></Experience> */}
      <EducationAndCertifications></EducationAndCertifications>
     {/* <Team></Team>  */}
     <AboutContact></AboutContact>
      <Contact />
     
    </div>
  );
}

export default App;