import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPostgresql, SiExpress, SiRedux, SiCss3, SiXero,   SiNetlify, SiVercel } from 'react-icons/si';

const projects = [
  {
    title: "Bummi AI",
    description:
      "Bummi AI es una herramienta avanzada para analíticas en el comercio minorista y mayorista, que simplifica la toma de decisiones mediante preguntas, respuestas y alertas, integrándose con plataformas como Siigo, Xero, Mercado Libre, y más. En este proyecto, colaboré en la parte del front end, creando interfaces de usuario para dashboards y páginas de login, asegurando una experiencia intuitiva y eficiente.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Next.js", "Node.js", "PostgreSQL"],
    image: "/bumi2.png",
    github: "https://github.com/HMusicProyect/henry-music",
    live: "#proyectos",
  },
  {
    title: "CodeForge",
    description:
      "Está diseñada para proporcionar una experiencia de aprendizaje interactiva y personalizada. En esta plataforma, los usuarios pueden resolver problemas de programación y recibir orientación inmediata gracias a un chatbot integrado con Gemini AI. El chatbot no solo responde a las preguntas de los usuarios, sino que también ofrece explicaciones detalladas y las mejores soluciones para cada problema presentado.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express", "Gemini AI"],
    image: "/chat.png",
    github: null,
    live: "https://front-chatbot-pi.vercel.app/",
  },
  {
    title: "E-commerce Ftit",
    description:
      "Plataforma moderna y funcional para usuarios y administradores con funcionalidades como navegación de productos, inicio de sesión con Google, compras seguras vía MercadoPago y gestión eficiente desde un dashboard administrativo.",
    technologies: ["React", "JavaScript", "CSS", "PostgreSQL", "Node.js"],
    image: "/tienda-jose.png",
    github: null,
    live: "https://tienda-costa.vercel.app/",
  },
  {
    title: "Iglesia VTL",
    description:
      "Proyecto que utiliza React y JavaScript para funciones como ver imágenes de actividades, inscripciones a eventos y listas de canciones.",
    technologies: ["JavaScript", "React", "CSS"],
    image: "/498shots_so.png",
    github: "https://github.com/pheralb/svgl",
    live: "https://icevtl.com/",
  },
  {
    title: "H Music",
    description:
      "Aplicación de música diseñada para explorar, descubrir y disfrutar una amplia variedad de canciones con una experiencia de usuario excepcional.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Next.js", "Node.js", "PostgreSQL"],
    image: "/ejemplo2.png",
    github: "https://github.com/HMusicProyect/henry-music",
    live: "https://henry-music.vercel.app",
  },
  {
    title: "Space App",
    description:
      "Aplicación móvil que permite a los usuarios explorar datos sobre el espacio utilizando información de las API de SpaceX y NASA.",
    technologies: ["React Native", "JavaScript", "CSS"],
    image: "/space.png",
    github: null,
    live: "https://expo.dev/artifacts/eas/aBvXQjpEBS3y2oypM7PHmT.apk",
  },
  {
    title: "Galería de Imágenes",
    description:
      "Diseñada para que los usuarios puedan explorar fotos. Utiliza tecnologías modernas para proporcionar una experiencia interactiva y receptiva.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "PostgreSQL"],
    image: "/310shots_so.png",
    github: null,
    live: "https://fastidious-tulumba-647404.netlify.app/",
  },
  {
    title: "Cryptos Web",
    description:
      "Página para ver precios, información y noticias del mundo cripto. Utiliza tecnologías modernas e integra autenticación con NextAuth.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "PostgreSQL", "Next.js"],
    image: "/crypto.png",
    github: null,
    live: "https://wallet-black-seven.vercel.app/",
  },
  {
    title: "Drivers",
    description:
      "Proyecto individual desarrollado para Soy Henry utilizando React, Redux y PostgreSQL.",
    technologies: ["React", "JavaScript", "CSS", "PostgreSQL", "Node.js"],
    image: "/348shots_so.png",
    github: "https://github.com/JuanManuelRamosL/proyecto-I",
    live: null,
  },
  {
    title: "Fierros Motor",
    description:
      "Landing page dedicada a la estética vehicular, con un chatbot integrado mediante Voiceflow para consultas automatizadas.",
    technologies: ["React", "JavaScript", "CSS", "Voiceflow"],
    image: "/fierros.png",
    github: null,
    live: "https://fierros-motor.netlify.app/",
  },
  {
    title: "Beauty Studio D'art",
    description:
      "Landing page diseñada para un negocio de estética, con navegación fluida y enlace directo a WhatsApp para consultas rápidas.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/beauty.png",
    github: null,
    live: "https://beauty-studio-d-art.netlify.app/",
  },
  {
    title: "App Clima",
    description:
      "Proyecto para ver el clima en diferentes ciudades utilizando una API para obtener datos actuales y pronósticos extendidos.",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    image: "/94shots_so.png",
    github: null,
    live: "https://resonant-empanada-40c444.netlify.app/",
  },
];

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('');

  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  const technologyIcons = {
    JavaScript: <SiJavascript size={20} />,
    React: <SiReact size={20} />,
    'Tailwind CSS': <SiTailwindcss size={20} />,
    'Next.js': <SiNextdotjs size={20} />,
    'Node.js': <SiNodedotjs size={20} />,
    PostgreSQL: <SiPostgresql size={20} />,
    Express: <SiExpress size={20} />,
    Redux: <SiRedux size={20} />,
    CSS: <SiCss3 size={20} />,
    Xero: <SiXero size={20} />,
    Netlify: <SiNetlify size={20} />,
    Vercel: <SiVercel size={20} />,
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Proyectos Destacados
      </h2>
  
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedTech('')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedTech === '' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-slate-700'
          }`}
        >
          Todos
        </button>
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTech === tech ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              {technologyIcons[tech]}
              {tech}
            </span>
          </button>
        ))}
      </div>
  
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={4}  // Mostrar 4 proyectos por vez en pantallas grandes
        breakpoints={{
     
          768: {
            slidesPerView: 3,  // 3 proyectos en pantallas medianas
          },
          640: {
            slidesPerView: 2,  // 2 proyectos en pantallas pequeñas
          },
          480: {
            slidesPerView: 1,  // 1 proyecto en pantallas muy pequeñas
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
  
        <div className="swiper-button-prev -left-8 lg:-left-12 absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200 dark:bg-slate-800 rounded-full flex justify-center items-center shadow-md hover:bg-gray-300 dark:hover:bg-slate-700 transition">
          ◀
        </div>
        <div className="swiper-button-next -right-8 lg:-right-12 absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200 dark:bg-slate-800 rounded-full flex justify-center items-center shadow-md hover:bg-gray-300 dark:hover:bg-slate-700 transition">
          ▶
        </div>
      </Swiper>
    </div>
  </section>
  
  );
} 