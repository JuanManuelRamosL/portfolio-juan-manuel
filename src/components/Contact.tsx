import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Contacto</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          ¿Interesado en trabajar juntos? ¡Contáctame por cualquiera de estos medios!
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:juamanuelramoslencina@gmail.com?subject=Asunto%20del%20Correo&body=Este%20es%20el%20cuerpo%20del%20correo."
            className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-manuel-ramos-lencina-43a03b222/"
            className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/JuanManuelRamosL"
            className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}