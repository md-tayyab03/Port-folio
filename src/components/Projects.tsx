import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'HealthGenie',
      description: 'HealthGenie is a Streamlit chatbot using Gemini AI to deliver evidence-based medical info, with general and RAG-powered document responses.',
      image: '/assets/P-1.png',
      githubUrl: 'https://github.com/md-tayyab03/Health-Genie',
      demoUrl: 'https://health-genie.streamlit.app/',
      tags: [
        { name: 'Python', color: 'bg-[#3776AB] text-white' },
        { name: 'Gemini AI', color: 'bg-[#4285F4] text-white' },
        { name: 'LangChain', color: 'bg-[#00A67E] text-white' }
      ]
    },
    {
      id: 2,
      title: 'MetaForge',
      description: 'MetaForge is a pro SEO tool that analyzes and optimizes HTML in real time to boost search visibility for developers and content creators.',
      image: '/assets/P-2.png',
      githubUrl: 'https://github.com/md-tayyab03/Meta-Forge',
      demoUrl: 'https://meta-forge-seo.vercel.app/',
      tags: [
        { name: 'React', color: 'bg-[#61DAFB] text-black' },
        { name: 'Node.js', color: 'bg-[#339933] text-white' },
        { name: 'NPM', color: 'bg-[#CB3837] text-white' },
        { name: 'Gemini AI', color: 'bg-[#4285F4] text-white' }
      ]
    },
    {
      id: 3,
      title: 'LaborLoom',
      description: 'LaborLoom is a job platform for laborers and contractors, providing real-time job listings, easy applications, and hiring tools to simplify trade and construction work connections.',
      image: '/assets/P-3.png',
      githubUrl: 'https://github.com/md-tayyab03/LaborsLoom-MERN',
      demoUrl: 'https://labors-loom-mern.vercel.app/',
      tags: [
        { name: 'MongoDB', color: 'bg-[#47A248] text-white' },
        { name: 'Express.js', color: 'bg-[#000000] text-white' },
        { name: 'React', color: 'bg-[#61DAFB] text-black' },
        { name: 'Node.js', color: 'bg-[#339933] text-white' }
      ]
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">Browse My Recent</p>
          <h2 className="section-title text-white">Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800/50 rounded-2xl overflow-hidden w-full max-w-[280px] mx-auto"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-36 overflow-hidden rounded-t-2xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-t-2xl" />
              </div>

              <div className="p-3">
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-2 text-xs line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/5 px-2 py-1"
                  >
                    {FiGithub({ size: 12 })}
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/5 px-2 py-1"
                  >
                    {FiExternalLink({ size: 12 })}
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 