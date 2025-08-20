'use client'
import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select an option...", 
  className = "" 
}) => {
    const [selectedValue, setSelectedValue] = useState(value);
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        onChange(e.target.value);
    };

  return (
    <div className={`relative ${className}`}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full appearance-none pl-4 pr-10 py-3 bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-slate-700 cursor-pointer"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <HiChevronDown className="h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
};

export default Select;