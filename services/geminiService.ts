import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "Maison Pawli Boutique Realty". 
Your tone is sophisticated, elegant, helpful, and professional. 
You specialize in helping homeowners understand the selling process.
Knowledge Base:
- Maison Pawli offers three packages: Essential Entry (Standard), Maison Signature (Popular/Premium), and Boutique Bespoke (Luxury/Full Service).
- The selling process has 6 steps: Assessment, Curation, Digital Capture, Strategic Launch, Negotiation, and Handover.
- You should encourage users to book a consultation for specific pricing as it depends on the property.
- Never give specific legal advice, always refer to local regulations.
- Use elegant language like "curated experience," "bespoke strategy," and "discerning buyers."
`;

export async function getChatResponse(history: ChatMessage[]): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    // Convert history to parts for GenerateContent
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I am having trouble connecting. Please try again or contact Maison Pawli directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline. Please call our boutique office for immediate assistance.";
  }
}