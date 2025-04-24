import { motion } from 'framer-motion';

interface Skill {
  id: number;
  title: string;
  titleColor: string;
  cardColor: string;
  skills: Array<{
    name: string;
    color: string;
  }>;
}

const skillsData: Skill[] = [
  {
    id: 1,
    title: 'Core Competencies',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-indigo-500/20',
    skills: [
      { name: 'Problem Solving', color: 'bg-[#0277BD]/80 text-white' },
      { name: 'DSA', color: 'bg-[#1565C0]/80 text-white' },
      { name: 'System Design', color: 'bg-[#0097A7]/80 text-white' },
      { name: 'OOP', color: 'bg-[#00838F]/80 text-white' },
      { name: 'Multithreading', color: 'bg-[#2E7D32]/80 text-white' }
    ]
  },
  {
    id: 2,
    title: 'Programming Languages',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-blue-500/20',
    skills: [
      { name: 'C', color: 'bg-[#5C6BC0]/80 text-white' },
      { name: 'C++', color: 'bg-[#00599C]/80 text-white' },
      { name: 'Java', color: 'bg-[#007396]/80 text-white' },
      { name: 'Python', color: 'bg-[#3776AB]/80 text-white' },
      { name: 'JavaScript', color: 'bg-[#F7DF1E]/80 text-gray-900' },
      { name: 'TypeScript', color: 'bg-[#3178C6]/80 text-white' }
    ]
  },
  {
    id: 3,
    title: 'Frontend Development',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-rose-500/20',
    skills: [
      { name: 'React.js', color: 'bg-[#61DAFB]/80 text-gray-900' },
      { name: 'Next.js', color: 'bg-black/80 text-white' },
      { name: 'HTML5', color: 'bg-[#E34F26]/80 text-white' },
      { name: 'CSS', color: 'bg-[#1572B6]/80 text-white' },
      { name: 'Tailwind CSS', color: 'bg-[#06B6D4]/80 text-white' }
    ]
  },
  {
    id: 4,
    title: 'Backend Development',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-green-500/20',
    skills: [
      { name: 'Node.js', color: 'bg-[#339933]/80 text-white' },
      { name: 'Express.js', color: 'bg-[#000000]/80 text-white' },
      { name: 'MongoDB', color: 'bg-[#47A248]/80 text-white' },
      { name: 'RESTful APIs', color: 'bg-[#009688]/80 text-white' },
      { name: 'MySQL', color: 'bg-[#4479A1]/80 text-white' }
    ]
  },
  {
    id: 5,
    title: 'AI & ML Technologies',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-emerald-500/20',
    skills: [
      { name: 'Gemini AI', color: 'bg-[#8E44AD]/80 text-white' },
      { name: 'LangChain', color: 'bg-[#00A67E]/80 text-white' },
      { name: 'FAISS', color: 'bg-[#0A66C2]/80 text-white' },
      { name: 'Streamlit', color: 'bg-[#FF4B4B]/80 text-white' }
    ]
  },
  {
    id: 6,
    title: 'Developer Tools',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-purple-500/20',
    skills: [
      { name: 'Git', color: 'bg-[#F05032]/80 text-white' },
      { name: 'GitHub', color: 'bg-[#181717]/80 text-white' },
      { name: 'VS Code', color: 'bg-[#007ACC]/80 text-white' },
      { name: 'Docker', color: 'bg-[#2496ED]/80 text-white' },
      { name: 'Postman', color: 'bg-[#FF6C37]/80 text-white' }
    ]
  },
  {
    id: 7,
    title: 'Design & CMS',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-pink-500/20',
    skills: [
      { name: 'Figma', color: 'bg-[#A259FF]/80 text-white' },
      { name: 'Adobe XD', color: 'bg-[#FF61F6]/80 text-white' },
      { name: 'WordPress', color: 'bg-[#21759B]/80 text-white' }
    ]
  },
  {
    id: 8,
    title: 'Cloud & Deployment',
    titleColor: 'text-white',
    cardColor: 'from-black/80 to-zinc-900/80 border-yellow-500/20',
    skills: [
      { name: 'Vercel', color: 'bg-black/80 text-white' },
      { name: 'Render', color: 'bg-[#46E3B7]/80 text-gray-900' },
      { name: 'Firebase', color: 'bg-[#FFCA28]/80 text-gray-900' }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const skillTagVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 70
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">Explore My</p>
          <h2 className="section-title text-white">Skills</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              variants={skillVariants}
              className={`bg-gradient-to-br ${category.cardColor} backdrop-blur-sm rounded-xl p-6 border shadow-lg transition-all duration-500 hover:scale-105`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${category.titleColor}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={skillTagVariants}
                    className={`skill-tag ${skill.color}`}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 