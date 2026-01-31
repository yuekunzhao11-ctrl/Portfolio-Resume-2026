
import React from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    'Informatique & Data',
    'Outils & Environnements',
    'Méthodes & Finance'
  ];

  return (
    <section id="competences" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Expertise Technique</h2>
          <div className="w-20 h-1.5 finance-gradient mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-medium">Des compétences transverses au service de la performance opérationnelle</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 finance-gradient rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                   {cat === 'Informatique & Data' && (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                   )}
                   {cat === 'Outils & Environnements' && (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                   )}
                   {cat === 'Méthodes & Finance' && (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                   )}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{cat}</h3>
              </div>
              
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-700 group-hover:text-emerald-600 transition-colors">{skill.name}</span>
                      <span className="text-emerald-600 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white border border-slate-200 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full finance-gradient transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Double compétence Engineering & Business</h4>
                <p className="text-slate-400">Ma capacité à traduire des besoins métier complexes en solutions d'automatisation concrètes est ma plus grande force.</p>
            </div>
            <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap">
                Recrutez ce talent
            </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
