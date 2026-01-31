
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wider text-emerald-400">
            CY TECH GRADUATE
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Yuekun <span className="text-transparent bg-clip-text finance-gradient">Zhao</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Junior Business Analyst & Operations Analyst spécialisée en <span className="text-white font-medium">Mathématiques Financières</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#experiences" className="px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition shadow-lg">
            Mon Parcours
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-white/30 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-sm">
            Me contacter
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <a href="#about">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
