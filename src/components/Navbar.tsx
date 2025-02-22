import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import "./nav.css";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo con imagen */}
        <div className="logo-container">
          <img
            src="/image2.jpg" // Ruta de tu imagen
            alt="Juan Manuel"
            className="profile-image"
          />
          <h1 className="logo">Hola Soy Juan Manuel</h1>
        </div>

        {/* Botón Tema */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="hamburger-menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Menú */}
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="#about" className="menu-item">Sobre mí</a>
          <a href="#projects" className="menu-item">Proyectos</a>
          <a href="#skills" className="menu-item">Tecnologías</a>
          <a href="#education-certifications" className="menu-item">Estudios</a>
          <a href="#contact" className="menu-item">Contacto</a>
        </div>
      </div>
    </nav>
  );
}



