import "@google/model-viewer";
const AboutContact = () => {
  return (
    <section
      id="about-contact"
      className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-6">
            ¿Te interesa colaborar conmigo?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Actualmente, estoy buscando oportunidades para aplicar mis
            habilidades en el desarrollo de software en un entorno que me
            permita seguir creciendo y aprendiendo. Siempre estoy abierto a
            nuevas colaboraciones. <br />
            <br />
            Mi objetivo es seguir creciendo como profesional y contribuir al
            mundo tecnológico con soluciones innovadoras y de calidad.
          </p>
        </div>
        {/* Imagen */}
        {/* <img
              src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzYXJyb2xsbyUyMGRlJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D" // Cambiar esta ruta por la imagen que prefieras
              alt="Colaboración"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            /> */}
        <model-viewer
          src="./dev.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          disable-zoom
          auto-rotate
          camera-orbit="90deg 90deg"
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
          interaction-prompt="none"
          style={{ width: "35%", height: "330px" }}
          className="model-viewer"
        >
          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
        </model-viewer>
      </div>
    </section>
  );
};

export default AboutContact;
