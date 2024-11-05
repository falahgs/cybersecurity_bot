export type GeminiModelType = 'gemini-1.0-pro' | 'gemini-1.5-pro' | 'gemini-1.5-pro-latest';

export type GeminiModel = {
  name: string;
  // ... other properties if needed ...
};

export const GEMINI_MODELS: Record<GeminiModelType, GeminiModel> = {
  'gemini-1.0-pro': { name: 'Gemini 1.0 Pro' },
  'gemini-1.5-pro': { name: 'Gemini 1.5 Pro' },
  'gemini-1.5-pro-latest': { name: 'Gemini 1.5 Pro (Latest)' }
};