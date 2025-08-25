import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import { motion } from "framer-motion"; // Import motion for animations
import useImageCarousel from "../hooks/useImageCarousel";
import ServiceAISection from "../components/services/ServiceAISection";
import ServiceMobileSection from "../components/services/ServiceMobileSection";
import ServiceWebSection from "../components/services/ServiceWebSection";
import ServiceSoftwareSection from "../components/services/ServiceSoftwareSection";
import ServiceCloudSection from "../components/services/ServiceCloudSection";
import ServiceSecuritySection from "../components/services/ServiceSecuritySection";
import TechnologiesSection from "../components/services/TechnologiesSection";

const backgroundImages = [
    "/images/join-us-2.jpg",
    "/images/intro-5.jpg",
    "/images/intro-4.webp",
    "/images/join-us-4.jpg",
    "/images/join-us-5.webp",
    "/images/intro-7.webp",
];

const OurServices = () => {
    const { currentImage, nextImage } = useImageCarousel(backgroundImages, 4000);
    const location = useLocation(); // Get the current URL

    useEffect(() => {
        if (location.hash) {
            // Remove the "#" and get the ID
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100); // Delay to ensure the page is fully loaded
            }
        }
    }, [location]); // Run this effect when the URL changes

    return (
        <div className="relative">
            {/* Fixed Background Container */}
            <div className="fixed inset-0 transition-all duration-500 -z-10">
                {/* Current Background Image with Blur Animation */}
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 transition-opacity duration-700 bg-center bg-cover"
                    style={{ backgroundImage: `url(${currentImage})` }}
                    initial={{ opacity: 1, filter: "blur(0px)" }}
                    animate={{ opacity: 0.6, filter: "blur(10px)" }}
                    exit={{ opacity: 0, filter: "blur(20px)" }}
                    transition={{ duration: 2 }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </motion.div>

                {/* Next Background Image with Blur Animation */}
                <motion.div
                    key={nextImage}
                    className="absolute inset-0 transition-opacity duration-700 bg-center bg-cover"
                    style={{ backgroundImage: `url(${nextImage})` }}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 2 }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </motion.div>
            </div>

            {/* Sections with IDs */}
            <div className="relative z-10">
                <div className="pt-32" id="ai"><ServiceAISection /></div>
                <div className="pt-32" id="mobile"><ServiceMobileSection /></div>
                <div className="pt-32" id="web"><ServiceWebSection /></div>
                <div className="pt-32" id="software"><ServiceSoftwareSection /></div>
                <div className="pt-32" id="cloud"><ServiceCloudSection /></div>
                <div className="pt-32" id="security"><ServiceSecuritySection /></div>
                <div className="pt-32"><TechnologiesSection /></div>
            </div>
        </div>
    );
};

export default OurServices;
