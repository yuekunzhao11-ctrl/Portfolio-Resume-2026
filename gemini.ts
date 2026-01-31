
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string, candidateContext: string) => {
  if (!API_KEY) return "L'assistant IA est actuellement indisponible (Clé API manquante).";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tu es l'assistant personnel de Yuekun Zhao, une ingénieure diplômée de CY Tech.
      Ton rôle est de répondre aux questions des recruteurs de manière professionnelle.
      
      PROFIL DE YUEKUN :
      - Spécialiste en Automatisation & Business Analysis (Junior).
      - Expertise forte en VBA (90%), SQL (80%) et Playwright (90%).
      - Très à l'aise avec l'IA Générative (90%) pour optimiser les processus.
      - Maîtrise de la méthodologie Scrum Agile (90%).
      - Expériences significatives chez Société Générale (Conformité) et HSBC Shanghai (Gestion de projets).
      - Bilingue Français/Chinois, Anglais courant (TOEIC 875).
      
      NOTE IMPORTANTE : Ne mentionne pas le calcul stochastique ou le portfolio management, Yuekun préfère mettre en avant ses compétences en automatisation, analyse de données et IA.
      
      CONTEXTE DÉTAILLÉ DU CANDIDAT :
      ${candidateContext}
      
      QUESTION DU RECRUTEUR :
      ${userPrompt}
      
      Réponds en français, sois concise, dynamique et mets en avant son efficacité technique et son adaptabilité internationale.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA.";
  }
};
