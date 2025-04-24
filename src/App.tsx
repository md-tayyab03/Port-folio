import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
