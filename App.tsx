
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import AIAssistant from './components/AIAssistant';
import { EXPERIENCES, PROJECTS } from './constants';

const App: React.FC = () => {
  // Remplacement par une image de quartier d'affaires professionnel
  const profileImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=750";
  const linkedInUrl = "https://www.linkedin.com/in/yuekun-zhao-1b6502229/";

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3 group">
              <div className="relative">
                <div className="absolute inset-0 finance-gradient rounded-3xl rotate-6 -z-10 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
                    <img 
                      src={profileImg} 
                      alt="Yuekun Zhao - Business & Finance Context" 
                      className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                    />
                    <a 
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 right-4 py-3 bg-[#0077b5] text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#005582] transition shadow-lg border border-white/20"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>VOIR MON PROFIL LINKEDIN</span>
                    </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                À propos de moi
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium italic border-l-4 border-emerald-500 pl-4 bg-slate-50 py-4">
                "Junior Business Analyst / Operations Analyst avec une expérience concrète dans l'automatisation des processus, les tests et la coordination de projets transversaux dans des environnements d'entreprise à grande échelle. Fort intérêt pour la Finance et le Retail, ouverte aux opportunités internationales."
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Diplômée de <strong>CY Tech</strong> en mathématiques financières, j'ai acquis une solide expertise en conformité bancaire et gestion de projets lors de mes passages chez Société Générale et HSBC. Ma double compétence en mathématiques quantitatives et en informatique me permet d'apporter des solutions techniques (VBA, SQL, Python, Playwright) à des problématiques métier complexes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-emerald-500 font-bold text-2xl">CY Tech</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Formation Ingénieur</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-emerald-500 font-bold text-2xl">Bilingue</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Français / Chinois</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-emerald-500 font-bold text-2xl">TOEIC 875</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Anglais Professionnel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Timeline */}
      <section id="experiences" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Parcours Professionnel</h2>
            <div className="w-20 h-1.5 finance-gradient mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-500 font-medium">Une trajectoire entre Finance de pointe et Ingénierie Logicielle</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 finance-gradient opacity-20 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-16">
              {EXPERIENCES.map((exp, index) => (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 finance-gradient rounded-full border-4 border-white shadow-xl z-20 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative overflow-hidden">
                      {/* Decoration tag */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-2 h-full finance-gradient opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                          {exp.duration}
                        </span>
                        <span className="text-slate-400 text-xs flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          {exp.location}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{exp.position}</h3>
                      <div className="text-blue-700 font-bold text-lg mb-6">{exp.company}</div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                            <span className="text-emerald-500 mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projets" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Réalisations Clés</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(t => (
                      <span key={t} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Me contacter</h2>
              <p className="text-slate-400 mb-10">
                Je suis à l'écoute d'opportunités en tant que Junior Business Analyst ou Operations Analyst, en France ou à l'international.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Email</div>
                    <div className="text-lg font-medium">yuekunzhao11@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Téléphone</div>
                    <div className="text-lg font-medium">+33 6 95 47 88 52</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">LinkedIn</div>
                    <div className="text-lg font-medium">
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                            @yuekun-zhao-1b6502229
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Prénom</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Nom</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>
                <button type="button" className="w-full py-4 finance-gradient rounded-xl font-bold hover:brightness-110 transition shadow-lg">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black text-slate-500 text-center border-t border-white/5">
        <p className="text-sm">© 2024 Yuekun Zhao - Portfolio Ingénieur. CY Tech Graduate.</p>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
