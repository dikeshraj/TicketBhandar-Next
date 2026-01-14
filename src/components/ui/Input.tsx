import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        )}
        <input
          className={cn(
            'w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium transition',
            icon && 'pl-10',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};



