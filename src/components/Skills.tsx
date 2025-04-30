import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-12 md:py-20 bg-black scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="section-subtitle">Explore My</p>
          <h2 className="section-title text-white">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative z-10 bg-gradient-to-br ${category.cardColor} backdrop-blur-sm rounded-xl p-4 md:p-6 border shadow-lg transition-all duration-500 hover:scale-105`}
            >
              <h3 className={`text-xl font-semibold mb-4 md:mb-6 ${category.titleColor}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-tag ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 