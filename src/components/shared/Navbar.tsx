import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IndustriesMenu from '../industries/IndustriesMenu';
import { industries } from '../../utils/constants/industries-sub-menu-items';

const Navbar: React.FC = () => {
    const [isIndustriesOpen, setIndustriesOpen] = useState(false);
    const [isIndustriesMobileOpen, setIndustriesMobileOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [scrolling, setScrolling] = useState<boolean>(false);
    const location = useLocation();
    const industriesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
                setIndustriesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navBgColor = scrolling || isMobileMenuOpen ? 'bg-custom-gray bg-opacity-90' : 'bg-transparent';

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const translateToArabic = () => {
        setTimeout(() => {
            const selectElement = document.querySelector<HTMLSelectElement>('.goog-te-combo');
            if (selectElement) {
                if (selectElement.value !== 'ar') {
                    selectElement.value = 'ar';
                    selectElement.dispatchEvent(new Event('change'));
                    console.log('Language changed to Arabic');
                } else {
                    console.log('Language already converted');
                }
            }
        }, 100);
    };

    const handleCloseIndustries = () => {
        setIndustriesOpen(false);
    };

    return (
        <nav className={`max-h-[100vh] overflow-auto fixed top-0 left-0 w-full p-4 transition-all duration-300 ${navBgColor} z-50`}>
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Logo Section */}
                    <div className="flex items-center justify-center flex-1 lg:justify-start">
                        <img src={"icons/company-name-logo.png"} alt="icon" className="h-24 mr-2" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex h-[40px] min-w-0 flex-1 items-center justify-end gap-2 md:gap-4">
                        <div className="flex items-center space-x-2 md:space-x-4">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/insights', label: 'Insights' },
                                { path: '/about', label: 'About' },
                                { path: '/services', label: 'Services' },
                                { path: '/contact', label: 'Contact' }
                            ].map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`relative px-2 py-2 text-sm font-semibold transition-all transform hover:scale-105 button-border ${location.pathname === path ? 'active-tab' : 'text-gray-300'}`}
                                >
                                    {label}
                                </Link>
                            ))}

                            {/* Industries with Click Toggle (Desktop) */}
                            <div className="relative" ref={industriesRef}>
                                <button
                                    onClick={() => setIndustriesOpen(prev => !prev)}
                                    className={`relative px-2 py-2 text-sm font-semibold transition-all transform md:px-3 md:text-base hover:scale-105 button-border ${location.pathname === '/industries' ? 'active-tab' : 'text-gray-300'}`}
                                >
                                    Industries
                                </button>
                                <AnimatePresence>
                                    {isIndustriesOpen && (
                                        <div>
                                            <IndustriesMenu onClose={handleCloseIndustries} />
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Translate to Arabic Button (Desktop) */}
                            <motion.button
                                onClick={translateToArabic}
                                className="px-4 py-2 text-white border-4 border-transparent rounded-md"
                                initial={{ scale: 1, borderColor: "transparent" }}
                                whileHover={{
                                    scale: [1, 1.1, 1],
                                    borderColor: ["#ef4444", "#000000"],
                                    transition: {
                                        scale: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
                                        borderColor: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
                                    },
                                }}
                                animate={{ borderColor: "transparent" }}
                            >
                                يترجم
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/insights', label: 'Insights' },
                            { path: '/about', label: 'About' },
                            { path: '/services', label: 'Services' },
                            { path: '/contact', label: 'Contact' }
                        ].map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === path ? 'bg-gray-700' : 'text-white'}`}
                                onClick={handleLinkClick}
                            >
                                {label}
                            </Link>
                        ))}

                        {/* Industries Submenu (Mobile) */}
                        <div>
                            <button
                                className="w-full px-3 py-2 text-left text-white bg-gray-800 rounded-md"
                                onClick={() => setIndustriesMobileOpen(!isIndustriesMobileOpen)}
                            >
                                Industries {isIndustriesMobileOpen ? '▲' : '▼'}
                            </button>
                            {isIndustriesMobileOpen && (
                                <div className="px-4 py-2 mt-2 space-y-2 bg-gray-700 rounded-md">
                                    {industries.map(({ id, label, icon }) => (
                                        <Link
                                            key={id}
                                            to={`/industries#${id}`}
                                            className="flex items-center px-3 py-2 space-x-2 text-white rounded-md hover:bg-gray-600"
                                            onClick={handleLinkClick}
                                        >
                                            <span className="text-lg">{icon}</span>
                                            <span>{label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Translate to Arabic Button (Mobile) */}
                        <motion.button
                            onClick={translateToArabic}
                            className="w-full px-3 py-2 text-base font-medium text-left text-white rounded-md hover:bg-gray-700"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            يترجم
                        </motion.button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
