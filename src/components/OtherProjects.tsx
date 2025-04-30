import { motion } from 'framer-motion';

interface OtherProject {
  year: string;
  title: string;
  description: string;
}

const otherProjects = [
  {
    year: "2025",
    title: "HealthGenie",
    description: "RAG-Medical Chatbot"
  },
  {
    year: "2024",
    title: "Meta-Forge",
    description: "AI-SEO Analysis Tool"
  },
  {
    year: "2023",
    title: "Productivity Tool",
    description: "Chrome Extension"
  },
  {
    year: "2023",
    title: "Skynomics",
    description: "Travel Web"
  },
  {
    year: "2023",
    title: "Throwdown",
    description: "Rock-Paper-Scissors"
  },
  {
    year: "2022",
    title: "Breakout Frenzy",
    description: "Brick-Break Game"
  }
];

const OtherProjects = () => {
  return (
    <section className="py-12 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Extra <span className="text-yellow-500">stuff</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-zinc-800 py-5 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <div className="flex flex-row items-center gap-x-4 md:gap-x-8 px-4 flex-wrap md:flex-nowrap">
                <div className="text-gray-500 text-sm md:text-base min-w-[48px]">
                  {project.year}
                </div>
                <motion.h3 
                  className="text-base md:text-lg text-white group-hover:text-yellow-500 transition-colors duration-300 min-w-[120px]"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  {project.title}
                </motion.h3>
                <motion.span 
                  className="text-sm md:text-lg text-gray-400 group-hover:text-white transition-colors duration-300 ml-auto"
                  initial={{ x: 0 }}
                  whileHover={{ x: -10 }}
                >
                  {project.description}
                </motion.span>
              </div>

              <motion.div 
                className="absolute left-0 right-0 -bottom-px h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OtherProjects; 