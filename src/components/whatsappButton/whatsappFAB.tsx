import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFAB: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/971561325543", "_blank");
    };

    return (
        <div className="fixed z-50 bottom-5 left-5">
            <button
                onClick={handleWhatsAppClick}
                className={`
                    flex items-center justify-center w-14 h-14 rounded-full 
                    bg-green-600 hover:bg-green-700 shadow-lg 
                    transition-transform duration-200 transform hover:scale-110
                `}
            >
                <FaWhatsapp className="text-4xl text-white" />
            </button>
        </div>
    );
};

export default WhatsAppFAB;
