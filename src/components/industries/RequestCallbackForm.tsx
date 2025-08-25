import React, { useState, useRef, useEffect } from 'react';
import TextInput from '../reusableForms/TextInput';
import DropdownInput from '../reusableForms/DropdownInput';
import TextAreaComponent from '../reusableForms/TextAreaComponent';
import SubmitButton from '../reusableForms/SubmitButton';
import sendEmail from '../../services/EmailService';
import { COUNTRIES } from '../../utils/constants/countries';
import { Country } from '../../types/country';

interface FormData {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
    countryCode: string;
}

const RequestCallbackForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
        countryCode: '+971',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const countries: Country[] = COUNTRIES;

    const selectedCountry = countries.find(c => c.callingCode === formData.countryCode);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCountryCodeChange = (callingCode: string) => {
        setFormData({ ...formData, countryCode: callingCode });
        setIsDropdownOpen(false);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !(formData.email || formData.phone)) {
            alert('Please fill out all required fields!');
            return;
        }

        if (isSubmitting) return;
        setIsSubmitting(true);

        const messageHeader = window.location.hash.replace('#', '') || 'No Header';
        const craftedMessage = `
      Phone Number: ${formData.countryCode}${formData.phone}
      Email: ${formData.email}
      Budget: ${formData.budget}
      Talking About: ${messageHeader}
      Message: ${formData.message}
    `;

        try {
            await sendEmail({
                name: formData.name,
                email: formData.email,
                title: "Request a Callback",
                message: craftedMessage,
            });

            alert('Email sent successfully! Our team will contact you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                budget: '',
                message: '',
                countryCode: '+971',
            });
        } catch {
            alert('Failed to send email. Try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const budgetOptions = [
        'Less than $5000',
        '$5,000-$10,000',
        '$10,000-$20,000',
        '$20,000-$35,000',
        '$35,000-$50,000',
        '$50,000-$1,00,000',
        'Above $1,00,000+',
    ];

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg bg-opacity-80">
            <h3 className="mb-6 text-2xl font-semibold text-white">Request a Callback</h3>
            <div className="mb-4 text-lg text-white">
                We respond promptly, typically within{' '}
                <span className="font-semibold">30 minutes</span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-lg text-white">
                        Name *
                    </label>
                    <div className="mt-2">
                        <TextInput
                            id="name"
                            placeholder="Enter your full name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 text-lg text-white">
                        Email *
                    </label>
                    <div className="mt-2">
                        <TextInput
                            id="email"
                            placeholder="Enter your email *"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="text-lg text-white">Phone Number *</label>
                    <div className="flex items-center p-2 mt-2 bg-gray-700 rounded-lg">
                        <div ref={dropdownRef} className="relative mr-2">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center px-2 py-1 bg-gray-800 rounded-lg text-white space-x-2 min-w-[110px]"
                            >
                                {selectedCountry && (
                                    <>
                                        <img
                                            src={selectedCountry.flag}
                                            alt="flag"
                                            className="w-5 h-4"
                                            onError={handleImageError}
                                        />
                                        <span>{selectedCountry.callingCode}</span>
                                    </>
                                )}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute z-10 mt-1 max-h-60 overflow-y-auto bg-gray-900 border border-gray-700 rounded-lg w-[300px]">
                                    {countries.map((country) => (
                                        <li
                                            key={country.code}
                                            onClick={() => handleCountryCodeChange(country.callingCode)}
                                            className="flex items-center px-3 py-2 space-x-2 text-white cursor-pointer hover:bg-gray-700"
                                        >
                                            <img src={country.flag} alt={country.name} className="w-5 h-4" onError={handleImageError} />
                                            <span>{country.callingCode}</span>
                                            <span className="text-sm text-gray-400">{country.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <TextInput
                            id="phone"
                            placeholder="Phone Number *"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <DropdownInput
                        id="budget"
                        label="Budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                    />
                </div>

                <div className="mb-4">
                    <TextAreaComponent
                        id="message"
                        label="Message"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <SubmitButton isSubmitting={isSubmitting} />
            </form>
        </div>
    );
};

export default RequestCallbackForm;