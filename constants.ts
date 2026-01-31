
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automatisation des Tests (TNR)',
    description: 'Mise en place de l\'automatisation des tests de non-régression via Playwright, réduisant le temps d\'exécution de 3-4 jours à 30 minutes.',
    technologies: ['Playwright', 'TNR', 'Agile'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Outil VBA d\'Analyse d\'Anomalies',
    description: 'Développement d\'un outil d\'extraction automatique de rapports d\'anomalies permettant de générer un reporting complet en 10 minutes.',
    technologies: ['VBA', 'Excel', 'Reporting'],
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Gestion de Données Critiques',
    description: 'Rédaction d\'un manuel de 33 pages pour la gestion des données critiques, utilisé comme référence par les départements internes chez HSBC.',
    technologies: ['Documentation', 'Data Management', 'Audit'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Société Générale',
    position: 'Business Analyste Conformité',
    duration: 'Mai 2025 – Novembre 2025',
    location: 'Paris, France',
    description: [
      'Intervention sur des applications cœur de Conformité (LCB-FT / AML, KYC, PEP).',
      'Pilotage de projets IT en méthodologie Agile (Scrum).',
      'Automatisation des tests de non-régression via Playwright (gain de temps majeur).',
      'Développement d\'outils VBA pour le reporting d\'anomalies.'
    ]
  },
  {
    id: 'exp2',
    company: 'Geely Fintech (Mission HSBC)',
    position: 'Stagiaire en gestion de Projets Financiers',
    duration: 'Mai 2024 – Septembre 2024',
    location: 'Shanghai, Chine',
    description: [
      'Gestion hebdomadaire des Change Orders (SIT / UAT) en environnement bancaire international.',
      'Rédaction de documentation technique de référence sur les données critiques.',
      'Coordination du projet Bastion Host pour la sécurisation des réseaux avec les équipes IT.'
    ]
  },
  {
    id: 'exp3',
    company: 'HXD EXPERTISE',
    position: 'Stagiaire assistante comptable',
    duration: 'Juin 2023 - Août 2023',
    location: 'Paris, France',
    description: [
      'Saisie et traitement des opérations comptables pour PME et entrepreneurs.',
      'Réconciliation des comptes et préparation des états financiers (logiciel ACD).',
      'Optimisation des processus de clôture mensuelle.'
    ]
  }
];

export const SKILLS: Skill[] = [
  // Informatique & Data
  { name: 'Python', level: 60, category: 'Informatique & Data' },
  { name: 'SQL', level: 60, category: 'Informatique & Data' },
  { name: 'VBA', level: 70, category: 'Informatique & Data' },
  { name: 'Playwright', level: 80, category: 'Informatique & Data' },
  { name: 'Excel avancé', level: 70, category: 'Informatique & Data' },
  { name: 'Reporting & automatisation de données', level: 70, category: 'Informatique & Data' },
  { name: 'IA générative', level: 90, category: 'Informatique & Data' },
  
  // Outils & Environnements
  { name: 'Jira', level: 65, category: 'Outils & Environnements' },
  { name: 'Confluence', level: 70, category: 'Outils & Environnements' },
  { name: 'ServiceNow', level: 60, category: 'Outils & Environnements' },
  { name: 'Tests de non-régression (TNR)', level: 80, category: 'Outils & Environnements' },
  { name: 'Automatisation de tests', level: 80, category: 'Outils & Environnements' },
  
  // Méthodes & Finance
  { name: 'Scrum / Agile', level: 75, category: 'Méthodes & Finance' },
  { name: 'Projets IT conformité', level: 75, category: 'Méthodes & Finance' },
  { name: 'Environnement bancaire réglementaire', level: 70, category: 'Méthodes & Finance' }
];
