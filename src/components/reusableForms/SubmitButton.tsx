import React from 'react';

interface SubmitButtonProps {
    isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
    <button
        type="submit"
        className="w-full py-3 text-lg font-semibold text-white transition duration-300 bg-red-500 rounded-lg hover:bg-red-700"
        disabled={isSubmitting} // Disable the button during submission
    >
        {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
);

export default SubmitButton;