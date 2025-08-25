import { motion } from "framer-motion";
import useImageCarousel from "../../hooks/useImageCarousel";
import { useNavigate } from "react-router-dom";

const images = [
    "/images/join-us-1.webp",
    "/images/join-us-2.jpg",
    "/images/join-us-3.jpg",
    "/images/join-us-4.jpg",
    "/images/join-us-5.webp",
];

const JoinUsSection = () => {
    const { currentImage, nextImage } = useImageCarousel(images, 4000);
    const navigate = useNavigate();

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-center bg-cover">
            {/* Old Image (Zoom Out and Fade Out) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${currentImage})` }}
                key={`old-${currentImage}`} // Unique key for the old image
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* New Image (Zoom In and Fade In) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${nextImage})` }}
                key={`new-${nextImage}`} // Unique key for the new image
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl p-8 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold text-white">
                    Transform Your Business with AI & Tech
                </h2>
                <p className="mb-6 text-lg">
                    Leverage cutting-edge AI, SaaS, and tech solutions to scale your business, automate processes, and enhance efficiency.
                    Our expertise ensures innovative solutions tailored to your needs.
                </p>
                <button className="px-8 py-4 mt-6 text-xl font-semibold text-white transition duration-300 ease-in-out transform scale-95 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-red-900 animate-pulse hover:scale-105 hover:shadow-xl focus:outline-none"
                    onClick={() => navigate('/services')}>
                    Get Started
                </button>
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default JoinUsSection;
