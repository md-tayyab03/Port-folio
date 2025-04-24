import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = [
    {
      text: "Aspiring Software Engineer",
      color: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" // Modern tech gradient
    },
    {
      text: "Full Stack Developer",
      color: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent" // Vibrant sunset
    },
    {
      text: "Problem Solver",
      color: "bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent" // Nature inspired
    },
    {
      text: "Software Tester",
      color: "bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent" // Golden glow
    }
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex].text;
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 100); // Typing speed
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(updateText, 50); // Deleting speed
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-black to-dark-lighter w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-5xl font-bold text-white mb-4"
          >
            Mohammed Tayyab
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[40px] flex items-center justify-center"
          >
            <p className={`text-xl md:text-2xl font-semibold relative ${roles[currentRoleIndex].color} transition-all duration-500`}>
              {displayText}
              <span className="absolute ml-1 animate-blink opacity-70">|</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-5 mt-6 px-8 sm:px-0"
          >
            <button
              onClick={(e) => e.preventDefault()}
              className="btn btn-secondary w-[160px] h-[36px] mx-auto sm:mx-0 rounded-xl text-sm px-3 py-1"
            >
              Download CV
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary w-[160px] h-[36px] mx-auto sm:mx-0 rounded-xl text-sm px-3 py-1"
            >
              Contact Info
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-8 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/md-tayyab03/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-10 opacity-80 hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
              />
            </a>
            <a
              href="https://github.com/md-tayyab03"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <img
                src="/assets/github.png"
                alt="GitHub"
                className="w-10 h-10 opacity-80 hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 