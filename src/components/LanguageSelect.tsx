import React from 'react';
import { languages, LanguageCode } from '../config/languages';

interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
}

export function LanguageSelect({ value, onChange, label, required }: LanguageSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required={required}
      >
        <option value="">Select language</option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}