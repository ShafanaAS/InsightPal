import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function summarizeContent(textContent: string, sourceUrl: string): Promise<string> {
  try {
    // Truncate content to fit within model context limits
    const maxChars = 15000;
    const truncatedContent = textContent.substring(0, maxChars);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Please analyze the following text extracted from the webpage "${sourceUrl}".\n\nCONTENT:\n"""\n${truncatedContent}\n"""`,
      config: {
        systemInstruction: `You are "InsightPal," an expert web research and summarization agent. Your task is to provide a clear, concise summary of the provided text content.

Your response MUST follow this structure and use markdown formatting:

### 📝 Summary
Provide a dense, easy-to-read summary of the key points from the text. Use bullet points for clarity if needed.

### 🤔 Follow-up Questions
Generate 3 insightful, open-ended questions that a user might have after reading the summary. These questions should encourage deeper thinking about the topic.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get summary from the AI assistant.");
  }
}