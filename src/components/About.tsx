import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ 
              type: "spring",
              damping: 15,
              mass: 0.5
            }}
            className="relative flex justify-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden group rounded-[80px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-10 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tl from-black via-transparent to-transparent z-20" />
              <img
                src="/assets/Goku.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-all duration-700"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 50%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 75%)',
                  filter: 'contrast(1.1) brightness(0.9)'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x500?text=Profile+Picture';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ 
              type: "spring",
              damping: 15,
              mass: 0.5,
              delay: 0.2
            }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm an aspiring software engineer with a strong proficiency in C, C++, JavaScript & React
              specializing in both frontend and backend development within Agile methodologies.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about technology, I am constantly exploring advancements in AI and large
              language models (LLMs) to stay at the forefront of innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 