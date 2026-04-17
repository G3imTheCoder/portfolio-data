const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        Bonjour, je suis <span className="text-blue-500">Mehdi</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">
        Data Engineer & Data Analyst
      </h2>
      
      <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Passionné par l'architecture des données et l'automatisation. 
        Je conçois des pipelines ETL robustes et des tableaux de bord interactifs pour transformer la donnée brute en décisions stratégiques.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projets" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Voir mes projets
        </a>
        <a 
          href="/cv.pdf" 
          download
          className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
};

export default Hero;