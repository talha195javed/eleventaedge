import React from 'react';

const TextAreaComponent: React.FC<{
    id: string;
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ id, label, placeholder, name, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="text-lg text-white">
            {label}
        </label>
        <textarea
            className="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-lg focus:outline-none"
            id={id}
            placeholder={placeholder}
            rows={4}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default TextAreaComponent;
