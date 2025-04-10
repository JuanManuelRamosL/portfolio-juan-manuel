import "./Timeline.css";

interface ExperienceItem {
  title: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Freelance",
    date: "Ago 2023 - Actualidad",
    description:
      "Desarrollo de sitios web a medida, desde landings hasta plataformas completas.",
  },
  {
    title: "Bummi AI",
    date: "2024",
    description:
      "Desarrolle la pagina y un dashboad de administracion paa clientes integrando unmotor de ia para sus productos con tecnologias com Python,Fast API,React,Nex.js",
  },
  {
    title: "Agencia Lebrot",
    date: "Feb 2025 - Actualidad",
    description:
      "Diseño y desarrollo de páginas web y campañas de Marketing para diferentes clientes de la agencia.Contecnologias como Django,Manychat,Active Campagne,GretApp",
  },
];

export const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">Mi Experiencia</h2>
        <div className="timeline-line">
          {experiences.map((exp, index) => (
            <div
              className="timeline-item"
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3>{exp.title}</h3>
              <span>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
