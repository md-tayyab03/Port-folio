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

export const skillsData: Skill[] = [
  {
    id: 1,
    title: 'Core Competencies',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-indigo-500/30',
    skills: [
      { name: 'Problem Solving', color: 'bg-[#0277BD]/95 text-white' },
      { name: 'DSA', color: 'bg-[#1565C0]/95 text-white' },
      { name: 'System Design', color: 'bg-[#0097A7]/95 text-white' },
      { name: 'OOP', color: 'bg-[#00838F]/95 text-white' },
      { name: 'Multithreading', color: 'bg-[#2E7D32]/95 text-white' }
    ]
  },
  {
    id: 2,
    title: 'Programming Languages',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-blue-500/30',
    skills: [
      { name: 'C', color: 'bg-[#5C6BC0]/95 text-white' },
      { name: 'C++', color: 'bg-[#00599C]/95 text-white' },
      { name: 'Java', color: 'bg-[#007396]/95 text-white' },
      { name: 'Python', color: 'bg-[#3776AB]/95 text-white' },
      { name: 'JavaScript', color: 'bg-[#F7DF1E]/95 text-gray-900' },
      { name: 'TypeScript', color: 'bg-[#3178C6]/95 text-white' }
    ]
  },
  {
    id: 3,
    title: 'Frontend Development',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-rose-500/30',
    skills: [
      { name: 'React.js', color: 'bg-[#61DAFB]/95 text-gray-900' },
      { name: 'Next.js', color: 'bg-black/95 text-white' },
      { name: 'HTML5', color: 'bg-[#E34F26]/95 text-white' },
      { name: 'CSS', color: 'bg-[#1572B6]/95 text-white' },
      { name: 'Tailwind CSS', color: 'bg-[#06B6D4]/95 text-white' }
    ]
  },
  {
    id: 4,
    title: 'Backend Development',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-green-500/30',
    skills: [
      { name: 'Node.js', color: 'bg-[#339933]/95 text-white' },
      { name: 'Express.js', color: 'bg-[#000000]/95 text-white' },
      { name: 'MongoDB', color: 'bg-[#47A248]/95 text-white' },
      { name: 'RESTful APIs', color: 'bg-[#009688]/95 text-white' },
      { name: 'MySQL', color: 'bg-[#4479A1]/95 text-white' }
    ]
  },
  {
    id: 5,
    title: 'AI & ML Technologies',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-emerald-500/30',
    skills: [
      { name: 'Gemini AI', color: 'bg-[#8E44AD]/95 text-white' },
      { name: 'LangChain', color: 'bg-[#00A67E]/95 text-white' },
      { name: 'FAISS', color: 'bg-[#0A66C2]/95 text-white' },
      { name: 'Streamlit', color: 'bg-[#FF4B4B]/95 text-white' }
    ]
  },
  {
    id: 6,
    title: 'Developer Tools',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-purple-500/30',
    skills: [
      { name: 'Git', color: 'bg-[#F05032]/95 text-white' },
      { name: 'GitHub', color: 'bg-[#181717]/95 text-white' },
      { name: 'VS Code', color: 'bg-[#007ACC]/95 text-white' },
      { name: 'Docker', color: 'bg-[#2496ED]/95 text-white' },
      { name: 'Postman', color: 'bg-[#FF6C37]/95 text-white' }
    ]
  },
  {
    id: 7,
    title: 'Design & CMS',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-pink-500/30',
    skills: [
      { name: 'Figma', color: 'bg-[#A259FF]/95 text-white' },
      { name: 'Adobe XD', color: 'bg-[#FF61F6]/95 text-white' },
      { name: 'WordPress', color: 'bg-[#21759B]/95 text-white' }
    ]
  },
  {
    id: 8,
    title: 'Cloud & Deployment',
    titleColor: 'text-white',
    cardColor: 'from-black/90 to-zinc-900/90 border-yellow-500/30',
    skills: [
      { name: 'Vercel', color: 'bg-black/95 text-white' },
      { name: 'Render', color: 'bg-[#46E3B7]/95 text-gray-900' },
      { name: 'Firebase', color: 'bg-[#FFCA28]/95 text-gray-900' }
    ]
  }
]; 