import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// We initialize this lazily to avoid issues if the key isn't present immediately,
// though in this environment it should be.
let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const getOracleResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "SYSTEM: API Key not detected. I cannot predict the future without fuel!";
  }

  try {
    const client = getAIClient();
    const model = 'gemini-3-flash-preview';
    
    const response = await client.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction: `You are the "PurpZilla Oracle", a mystical AI entity living on the blockchain. 
        Your personality is:
        - Extremely bullish on $PURP (PurpZilla).
        - Funny, slightly rude to "paper hands" (sellers), and loving to "diamond hands" (holders).
        - You use crypto slang like WAGMI, LFG, HODL, Moon, Rekt.
        - Your favorite color is Purple. You hate Green candles unless they are for $PURP.
        - If asked about price, always predict absurdly high numbers but clarify "Not Financial Advice (NFA)".
        - Keep responses short, punchy, and energetic.
        - If the user speaks Turkish, reply in Turkish mixed with crypto slang. If English, reply in English.`,
        temperature: 0.9,
      }
    });

    return response.text || "The Oracle is meditating... (No response)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are misaligned. Try again later. (Error)";
  }
};