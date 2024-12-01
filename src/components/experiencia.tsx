import React from 'react';
import { FaBriefcase, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Mi Experiencia Laboral</h2>
        
        {/* Experiencia 1: Bummi AI */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaBriefcase /> Bummi AI 
          </h3>
          <p className="text-gray-300">
            Trabajé como desarrollador freelance en Bummi AI, enfocándome en el desarrollo de soluciones basadas en inteligencia artificial para mejorar la experiencia de los usuarios en plataformas de e-commerce.
          </p>
        </div>

        {/* Experiencia 2: Fierros Motor */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaBriefcase /> Fierros Motor (Freelance)
          </h3>
          <p className="text-gray-300">
            Fui responsable de implementar soluciones tecnológicas en Fierros Motor, creando una plataforma para la venta online de productos automotrices, mejorando su experiencia de usuario y optimizando los procesos internos.
          </p>
        </div>

        {/* Experiencia 3: Matungo */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaBriefcase /> Matungo (Freelance)
          </h3>
          <p className="text-gray-300">
            En Matungo, participé en el desarrollo de soluciones digitales para el sector gastronómico, incluyendo sistemas de pedidos en línea y gestión de inventarios, ayudando a mejorar la eficiencia operativa del negocio.
          </p>
        </div>

        {/* Experiencia 4: StudioD Art */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaBriefcase /> StudioD Art (Freelance)
          </h3>
          <p className="text-gray-300">
            Trabajé como desarrollador freelance en StudioD Art, donde me encargué de la creación de páginas web interactivas y visualmente atractivas para artistas y pequeños negocios.
          </p>
        </div>

        {/* Experiencia 5: Proyectos grupales en Henry */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaLaptopCode /> Proyectos Grupales en Henry
          </h3>
          <p className="text-gray-300">
            Participé en varios proyectos grupales en Henry, donde trabajamos con tecnologías como React, Node.js y PostgreSQL para desarrollar aplicaciones web funcionales y escalables, colaborando estrechamente con otros desarrolladores.
          </p>
        </div>

        {/* Experiencia 6: Proyectos grupales en No Country */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex justify-center items-center gap-2">
            <FaProjectDiagram /> Proyectos Grupales en No Country
          </h3>
          <p className="text-gray-300">
            En No Country, participé en varios proyectos de desarrollo colaborativo en los que diseñamos e implementamos soluciones de software innovadoras, utilizando metodologías ágiles como SCRUM y herramientas de DevOps para mejorar la entrega continua.
          </p>
        </div>

      </div>
    </section>
  );
}
