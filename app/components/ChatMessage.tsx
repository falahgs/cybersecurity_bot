import { Message } from '@/app/types/chat';
import { useState } from 'react';
import { FiCopy, FiCheck, FiUser } from 'react-icons/fi';
import { RiRobot2Fill } from 'react-icons/ri';
import { Roboto_Mono } from 'next/font/google';

// Initialize the Roboto Mono font for code snippets
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const isAssistant = message.role === 'assistant';

  return (
    <div className="flex items-start gap-3 group animate-fadeIn">
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg
        ${isAssistant 
          ? 'bg-gradient-to-r from-violet-600 to-indigo-600' 
          : 'bg-gradient-to-r from-blue-600 to-cyan-600'}`}>
        {isAssistant ? (
          <RiRobot2Fill className="w-4 h-4 text-white" />
        ) : (
          <FiUser className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 rounded-2xl p-5 shadow-sm relative group
        ${isAssistant 
          ? 'bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/20' 
          : 'bg-blue-50 dark:bg-blue-900/20'}`}>
        
        {/* Message Text */}
        <div className={`prose prose-lg dark:prose-invert max-w-none
          ${isAssistant ? 'prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900/50' : ''}`}>
          <p className={`text-gray-800 dark:text-gray-200 leading-relaxed
            ${isAssistant ? 'font-normal' : 'font-medium'}
            ${message.content.includes('```') ? robotoMono.className : ''}`}>
            {message.content}
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`absolute top-4 right-4 p-2 rounded-full
            ${copied 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'} 
            opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110`}
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <FiCheck className="w-4 h-4" />
          ) : (
            <FiCopy className="w-4 h-4" />
          )}
        </button>

        {/* Time Indicator (Optional) */}
        <div className="absolute bottom-1 right-4 text-xs text-gray-400 dark:text-gray-500">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
} 