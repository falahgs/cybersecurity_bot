import { useState } from 'react';
import { GEMINI_MODELS, GeminiModelType } from '@/app/types/models';

const [inputMessage, setInputMessage] = useState('');
const [selectedModel, setSelectedModel] = useState<GeminiModelType>('gemini-1.5-pro-latest');
const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: inputMessage,
        selectedModel: selectedModel
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      if (response.status === 503) {
        // Show retry message to user
        setError(`${data.error} Retrying in ${data.retryAfter} seconds...`);
        // Optional: Implement automatic retry after delay
        setTimeout(() => handleSubmit(e), data.retryAfter * 1000);
        return;
      }
      throw new Error(data.error || 'Failed to send message');
    }
    
    // Handle successful response
    // ... rest of your success handling code
    
  } catch (error) {
    console.error('Chat error:', error);
    setError(error instanceof Error ? error.message : 'An unknown error occurred');
  }
}; 