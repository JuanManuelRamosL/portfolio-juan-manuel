import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaTrello,
  FaGithub,
  FaRobot,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiAstro,
  SiFastapi,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiFigma,
  SiPrisma,
  SiSequelize,
  SiNetlify,
  SiVercel,
  SiRender,
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
      { name: 'Astro', icon: <SiAstro className="text-orange-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaNodeJs className="text-yellow-500" /> }, // Agregado JavaScript
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-white" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-600" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    ],
  },
  {
    category: 'Database/ORM',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
      { name: 'Drizzle ORM', icon: <FaDatabase className="text-purple-500" /> },
      { name: 'Prisma ORM', icon: <SiPrisma className="text-green-600" /> },
      { name: 'Sequelize', icon: <SiSequelize className="text-blue-400" /> },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Zustand', icon: <FaReact className="text-blue-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Git', icon: <SiGit className="text-red-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: 'Trello', icon: <FaTrello className="text-blue-600" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    ],
  },
  {
    category: 'Herramientas de IA',
    items: [
      { name: 'GPT', icon: <FaRobot className="text-purple-400" /> },
      { name: 'Gemini', icon: <FaRobot className="text-green-500" /> },
      { name: 'Voiceflow', icon: <FaRobot className="text-blue-400" /> },
      { name: 'WhatsApp Bot', icon: <FaRobot className="text-teal-400" /> },
      { name: 'Make.com', icon: <FaRobot className="text-orange-400" /> },
      { name: 'Flowise', icon: <FaRobot className="text-pink-500" /> },
      { name: 'n8n', icon: <FaRobot className="text-white" /> },
    ],
  },
  {
    category: 'Deploys',
    items: [
      { name: 'Netlify', icon: <SiNetlify className="text-green-400" /> },
      { name: 'Render', icon: <SiRender className="text-purple-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
    ],
  },
];

export function Skills() {
  return (
<section
  id="skills"
  className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300"
>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-12">
      Tecnologías
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skillGroup, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {skillGroup.category}
          </h3>
          <ul className="space-y-2">
            {skillGroup.items.map((skill, i) => (
              <li
                key={i}
                className="text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

  
  );
}
