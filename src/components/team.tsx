import React from 'react';
import { FaUser, FaDesktop, FaPaintBrush } from 'react-icons/fa';

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestro Equipo de Desarrollo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Miembro 1: Backend Developer */}
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <FaUser className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Juan (Backend Developer)</h3>
            <p className="text-gray-300 mt-2">
              Soy un desarrollador apasionado por crear APIs robustas y soluciones escalables. Me enfoco en el backend con Node.js, FastAPI y bases de datos como PostgreSQL y MySQL.
            </p>
          </div>

          {/* Miembro 2: Frontend Developer */}
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <FaDesktop className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Ana (Frontend Developer)</h3>
            <p className="text-gray-300 mt-2">
              Me apasiona crear interfaces de usuario atractivas y funcionales. Trabajo con React, TailwindCSS y herramientas modernas para lograr experiencias de usuario increíbles.
            </p>
          </div>

          {/* Miembro 3: UI/UX Designer */}
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <FaPaintBrush className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Carlos (UI/UX Designer)</h3>
            <p className="text-gray-300 mt-2">
              Soy diseñador de interfaces y experiencias de usuario. Me encanta transformar ideas en diseños intuitivos y atractivos, asegurando una excelente experiencia para el usuario final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
