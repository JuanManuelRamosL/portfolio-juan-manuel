import React from 'react';
import { Code2, Database, Server } from 'lucide-react';
import './hero.css';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 pt-20">
      {/* Aquí he añadido pt-20 para agregar un margen superior */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Desarrollador Full Stack
          </span>
        </h1>
        <div className="flex justify-center gap-6 mb-8">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Soy un desarrollador apasionado por crear soluciones digitales innovadoras. 
          Con experiencia en el desarrollo full-stack, me especializo en construir 
          aplicaciones web, aplicaciones móviles y automatizaciones con IA escalables utilizando las últimas tecnologías.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Actualmente, estoy buscando oportunidades para aplicar mis habilidades en el desarrollo de software en un entorno que me permita seguir creciendo y aprendiendo.
          Siempre estoy abierto a nuevas colaboraciones.
          Mi objetivo es seguir creciendo como profesional y contribuir al mundo tecnológico
          con soluciones innovadoras y de calidad.
        </p>
        <a
          className="button-download-cv "
          href="/download-cv/Juan-Manuel-Ramos-Lencina.pdf"
          download="CV-Juan-Manuel-Ramos-Lencina.pdf"
        >
          <svg
            width="23px"
            height="auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-download inline-block"
          >
            <path
              d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Descargar CV
        </a>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors inline-block"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}
