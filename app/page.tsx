'use client';
import Image from "next/image";
import { useState, FormEvent } from "react";
import ChatContainer from '@/app/components/ChatContainer';
import ModelSelector from '@/app/components/ModelSelector';
import { Message } from '@/app/types/chat';
import { GeminiModelType } from '@/app/types/models';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<GeminiModelType>('gemini-1.5-pro-latest');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage.content,
          modelName: selectedModel 
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      
      const assistantMessage: Message = { role: 'assistant', content: data.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="border-b dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl">🛡️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                CyberGuard AI Assistant
              </h1>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Your Advanced Cybernetic Security Expert
                </p>
                <p className="text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Developed by Falahgs4AI ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ChatContainer messages={messages} />
      
      <div className="border-t dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4">
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about cybersecurity topics..."
            className="flex-1 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'Analyzing...' : 'Ask'}
          </button>
        </form>
        <p className="text-xs text-center mt-2 text-gray-500">
          Note: This AI is specialized in medical topics. For non-medical questions, please consult other resources.
        </p>
      </div>
    </div>
  );
}
