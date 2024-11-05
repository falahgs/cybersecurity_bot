'use client';
import { GEMINI_MODELS, GeminiModelType } from '@/app/types/models';

interface ModelSelectorProps {
  selectedModel: GeminiModelType;
  onModelChange: (model: GeminiModelType) => void;
  disabled?: boolean;
}

export default function ModelSelector({ selectedModel, onModelChange, disabled }: ModelSelectorProps) {
  return (
    <div className="w-full max-w-xs">
      <select
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value as GeminiModelType)}
        disabled={disabled}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {Object.entries(GEMINI_MODELS).map(([id, model]) => (
          <option key={id} value={id}>
            {model.name || id}
          </option>
        ))}
      </select>
    </div>
  );
} 