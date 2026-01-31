
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm text-slate-900' : 'py-6 bg-transparent text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">
          YZ<span className="text-emerald-500">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#accueil" className="hover:text-emerald-500 transition">Accueil</a>
          <a href="#about" className="hover:text-emerald-500 transition">À Propos</a>
          <a href="#experiences" className="hover:text-emerald-500 transition">Parcours</a>
          <a href="#projets" className="hover:text-emerald-500 transition">Projets</a>
          <a href="#competences" className="hover:text-emerald-500 transition">Skills</a>
          <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
