export const cleanMessage = (text: string): string => {
  return text.replace(/\*/g, '').trim();
}; 