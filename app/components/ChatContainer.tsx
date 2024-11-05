import { Message } from '@/app/types/chat';
import ChatMessage from './ChatMessage';

interface ChatContainerProps {
  messages: Message[];
}

export default function ChatContainer({ messages }: ChatContainerProps) {
  return (
    <div className="flex-1 overflow-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
} 