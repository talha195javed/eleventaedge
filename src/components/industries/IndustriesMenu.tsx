import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries } from '../../utils/constants/industries-sub-menu-items';

interface IndustriesMenuProps {
    onClose: () => void; // Callback to close the menu
}

// Animation variants for the popup
const popupVariants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};

const IndustriesMenu: React.FC<IndustriesMenuProps> = ({ onClose }) => {
    return (
        <motion.div
            className="fixed left-0 flex items-center justify-center w-full h-auto shadow-xl top-16"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupVariants}
        >
            <div className="fixed left-0 flex items-center justify-center w-full h-auto shadow-xl top-16">
                <div className="flex h-full px-8 mt-8 bg-gray-900 rounded-lg">
                    {/* Left Section */}
                    <div
                        className="relative flex flex-col justify-between w-2/5 p-6 my-6 ml-8 overflow-y-auto rounded-lg"
                        style={{
                            backgroundImage: "url('./images/industries-background/not-listed.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Dark Overlay covering only the background image */}
                        <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div>

                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white">INDUSTRIES</h4>
                            <p className="text-gray-300">
                                We provide tailored solutions across various industries, combining our expertise with the latest technologies to drive innovation and efficiency. Our team works closely with clients to understand their unique needs, delivering scalable, secure, and future-proof solutions. From healthcare to education and beyond, we help businesses streamline processes, enhance performance, and stay ahead in a rapidly evolving digital world.
                            </p>
                            <div className="flex flex-col items-start">
                                <h5 className="mt-4 mb-2 text-lg font-semibold text-gray-300 bt-4">Didn’t find your industry?</h5>
                                <Link to="/industries#not-listed">
                                    <button
                                        className="flex items-center justify-center w-64 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
                                        onClick={onClose}
                                    >
                                        <span>Request a Callback</span> <span className='ml-2 text-2xl font-bold'>☏</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Industries Grid) */}
                    <div className="grid w-3/5 grid-cols-3 gap-4 p-6 mr-8 overflow-y-auto">
                        {industries.map(({ id, label, icon }) => (
                            <Link
                                to={`/industries#${id}`} // Use `id` to create the hash URL
                                key={id}
                                onClick={onClose}
                                className="flex flex-col items-center p-4 transition-all bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 hover:shadow-md hover:shadow-red-500"
                            >
                                <div className="w-12 h-12 mb-2 text-4xl text-center text-white">{icon}</div>
                                <span className="text-lg font-medium text-white">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IndustriesMenu;