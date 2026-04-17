const Projects = () => {
  const projects = [
    {
      title: "Pipeline ETL Automatisé (Météo)",
      role: "Data Engineer",
      description: "Développement d'un pipeline ETL conteneurisé (Docker) et orchestré avec Apache Airflow. Extraction de données météo mondiales via API, transformation et stockage sur PostgreSQL, avec Data Visualization sur Metabase.",
      techs: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Metabase"],
      githubLink: "https://github.com/G3imTheCoder/airflow-weather-etl.git", 
    },
    {
      title: "Dashboard d'Analyse Crypto",
      role: "Data Analyst",
      description: "Création d'un algorithme d'analyse financière calculant les moyennes mobiles pour générer des alertes de trading. Développement d'une application web interactive en temps réel avec Streamlit connectée à l'API YFinance.",
      techs: ["Python", "Pandas", "Streamlit", "API REST", "Git"],
      githubLink: "https://github.com/G3imTheCoder/Crypto-Checker.git",
    }
  ];

  return (
    <section id="projets" className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
        Mes Projets <span className="text-blue-500">Data</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 shadow-xl"
          >
            <div className="text-blue-400 font-semibold mb-3 tracking-wide text-sm uppercase">
              {project.role}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Les petits badges pour les technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-slate-900 text-slate-300 text-sm px-4 py-1.5 rounded-full border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 font-medium inline-flex items-center transition-colors group"
            >
              Voir le code source 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;