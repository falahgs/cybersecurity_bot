export const cleanAndFormatText = (text: string): string => {
  // Remove special characters (* # etc) but preserve basic punctuation
  const cleaned = text.replace(/[*#`~]/g, '')
    // Remove multiple spaces
    .replace(/\s+/g, ' ')
    // Remove multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return cleaned;
};

export const formatResponse = (response: string): string => {
  // Split into paragraphs for better readability
  const paragraphs = response.split('\n').filter(p => p.trim().length > 0);
  
  return paragraphs.join('\n\n');
}; 