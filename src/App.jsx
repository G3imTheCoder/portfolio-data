import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Skills from'./components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-blue-500 selection:text-white pb-20">
      <main className="max-w-6xl mx-auto">
        <Hero />
        <Projects /> 
        <Skills/>
      </main>
    </div>
  );
}

export default App;