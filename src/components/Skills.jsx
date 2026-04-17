const Skills = () => {
  const skillCategories = [
    {
      title: "Data & Analytics",
      skills: ["Python", "SQL", "Pandas", "Apache Airflow", "Metabase", "Streamlit", "Numpy"]
    },
    {
      title: "Dev & DevOps",
      skills: ["Docker", "Git", "React.js", "Node.js", "JavaScript", "PHP", "API REST"]
    },
    {
      title: "Outils & BDD",
      skills: ["PostgreSQL", "MySQL", "Linux / Bash", "Jupyter", "ETL", "Scrum"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
        Mes <span className="text-blue-500">Compétences</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-slate-900 text-blue-400 font-medium text-sm px-4 py-2 rounded-lg border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;