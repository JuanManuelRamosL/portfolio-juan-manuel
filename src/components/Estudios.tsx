import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

export function EducationAndCertifications() {
  return (
    <section id="education-certifications" className="py-20 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Mis Estudios, Cursos y Certificados</h2>
        
        {/* Estudios */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-blue-400 mb-6 flex justify-center items-center gap-2">
            <FaGraduationCap /> Estudios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    

            {/* Estudio 3 */}
            <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/image.png" alt="Estudio 3" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold text-white mt-4">Bootcamp en Programación Full Stack</h4>
              <p className="text-gray-300">Henry | 2023</p>
            </div>

            <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/platzi-bak.png" alt="Estudio 3" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold text-white mt-4">Arquitectura Bakend</h4>
              <p className="text-gray-300">Platzi | 2024</p>
            </div>

            <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/platzi-git.png" alt="Estudio 3" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold text-white mt-4">Curso de Git y GitHub</h4>
              <p className="text-gray-300">Platzi | 2024</p>
            </div>

            <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://static.platzi.com/media/diplomas/Diploma-Audiocurso-Fundamentos-Arquitectura-Alta-Concurrencia-17b577be-b253-4114-a3d2-5.jpg" alt="Estudio 3" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold text-white mt-4">Curso Arquitectura de Alta Concurrencia</h4>
              <p className="text-gray-300">Platzi | 2024</p>
            </div>
          </div>
        </div>

        {/* Cursos */}
       

     
      </div>
    </section>
  );
}
