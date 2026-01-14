'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useFormStore } from '@/store/useAutocompleteStore';

interface AutocompleteInputProps {
  field: 'from' | 'to';
  options: string[];
  placeholder?: string;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  field,
  options,
  placeholder,
}) => {
  const value = useFormStore((state) => state[field]);
  const setValue = useFormStore((state) => (field === 'from' ? state.setFrom : state.setTo));

  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [filterText, setFilterText] = useState(''); // filter input inside dropdown

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
        setFilterText(''); // reset dropdown filter when closed
        setFilteredOptions(options);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [options]);

  // Filter options whenever filterText changes
  useEffect(() => {
    if (filterText) {
      setFilteredOptions(
        options.filter((opt) => opt.toLowerCase().startsWith(filterText.toLowerCase()))
      );
    } else {
      setFilteredOptions(options);
    }
  }, [filterText, options]);

  // Open dropdown on focus
  const handleFocus = () => {
    setShowDropdown(true);
    setFilteredOptions(options); // show all options initially
    setFilterText(''); // clear filter input
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setShowDropdown(false);
    setFilterText('');
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Main input just opens dropdown, no filtering */}
      <input
        type="text"
        value={value}
        readOnly 
        onFocus={handleFocus}
        placeholder={placeholder}
        className="w-full border-none focus:outline-none focus:ring-0 text-sm font-medium "
      />

      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 px-4 py-3 max-h-max overflow-auto bg-white rounded-[10px] shadow-lg">
          {/* Filter input inside dropdown */}
          <input
            type="text"
            placeholder="Select Destination"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full border px-3 py-2 border-border-blue-50 rounded-[10px] focus:outline-none focus:ring-0 text-sm font-medium mb-2"
          />

          {filteredOptions.map((opt, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
