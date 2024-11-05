import { ShieldCheck, UserCircle2 } from 'lucide-react';

interface MessageItemProps {
  role: 'user' | 'assistant';
  content: string;
}

const MessageItem = ({ role, content }: MessageItemProps) => {
  return (
    <div className={`flex ${role === 'assistant' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className="flex items-start gap-2.5">
        {role === 'assistant' && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-5 h-5 text-white animate-pulse" />
          </div>
        )}
        
        <div className={`
          max-w-[80%] p-4 rounded-lg shadow-md
          ${role === 'assistant' 
            ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200' 
            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
          }
        `}>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed whitespace-pre-wrap font-medium">
              {content}
            </p>
          </div>
        </div>

        {role === 'user' && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            <UserCircle2 className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem; 