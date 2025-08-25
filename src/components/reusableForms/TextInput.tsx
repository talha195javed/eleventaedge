import React from 'react';

const TextInput: React.FC<{
    id: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
}> = ({ id, placeholder, name, value, onChange, required = false, type = 'text' }) => (
    <div>
        <input
            type={type}
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:outline-none"
            id={id}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

export default TextInput;
