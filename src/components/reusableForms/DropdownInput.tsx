import React from 'react';

const DropdownInput: React.FC<{
    id: string;
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}> = ({ id, label, name, value, onChange, options }) => (
    <div className="mb-4">
        <label htmlFor={id} className="text-lg text-white">
            {label}
        </label>
        <div className="relative">
            <select
                className="w-full px-4 py-2 pr-10 mt-2 text-white bg-gray-700 rounded-lg appearance-none focus:outline-none"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-4 mt-2 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>
);

export default DropdownInput;
