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
            {/* Old Image */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${currentImage})` }}
                key={`old-${currentImage}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* New Image */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${nextImage})` }}
                key={`new-${nextImage}`}
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl p-8 text-center text-white">
                <h2 className="mb-6 text-4xl font-bold">Join Us</h2>
                <p className="mb-6 text-lg">
                    At EleventaEdge, we’re more than just a team — we’re a community of
                    innovators, problem-solvers, and growth enablers. If you’re passionate
                    about technology, digital marketing, and creating real business impact,
                    we’d love to have you on board.
                </p>

                <ul className="mb-6 space-y-3 text-left text-lg">
                    <li>🚀 <strong>Growth-Driven Environment</strong> – Learn, experiment, and thrive with continuous opportunities to grow.</li>
                    <li>🤝 <strong>Collaborative Culture</strong> – Work alongside talented professionals who share a passion for innovation.</li>
                    <li>🌍 <strong>Global Opportunities</strong> – Contribute to projects that make an impact across industries and borders.</li>
                    <li>💡 <strong>Innovation at Core</strong> – Be part of a team that embraces creativity, new ideas, and cutting-edge tools.</li>
                </ul>

                <p className="text-lg mb-8">
                    ✨ Join us and let’s shape the future of business growth together.
                </p>

                <button
                    className="px-8 py-4 text-xl font-semibold text-white transition duration-300 ease-in-out transform scale-95 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-red-900 animate-pulse hover:scale-105 hover:shadow-xl focus:outline-none"
                    onClick={() => navigate("/services")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default JoinUsSection;
