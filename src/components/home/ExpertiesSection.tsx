import { motion } from "framer-motion";
import useImageCarousel from "../../hooks/useImageCarousel";

const images = [
    "/images/expert-areas/frontend.webp",
    "/images/expert-areas/backend.webp",
    "/images/expert-areas/ai.webp",
    "/images/expert-areas/database.webp"
];

const ExpertiesSection: React.FC = () => {
    const { currentImage, nextImage } = useImageCarousel(images, 4000);

    return (
        <div className="w-full">
            {/* Header Section (Outside the background image) */}
            <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">Our Expertise & Technical Skills</h2>

            {/* Content Section with Background Image */}
            <div className="relative w-full h-[600px] overflow-hidden">
                {/* Background Image Section */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Old Image (Swipe Left & Fade Out) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${currentImage})` }}
                        key={`old-${currentImage}`}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* New Image (Swipe In from Right) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${nextImage})` }}
                        key={`new-${nextImage}`}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </div>

                {/* Text Content Overlay (Centered) */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="p-8 text-center bg-gray-900 rounded-lg bg-opacity-80">
                        <p className="max-w-2xl px-4 mb-8 text-lg">
                            We pride ourselves on mastering a diverse range of technologies that empower businesses to grow. Our team is equipped with advanced skills to provide innovative solutions, always adapting to the latest trends.
                        </p>

                        <div className="max-w-2xl px-4 space-y-6">
                            {[
                                { title: "Frontend (UI/UX & Responsiveness)", desc: "We create visually stunning and highly responsive user interfaces." },
                                { title: "Backend (Functionality & Security)", desc: "We ensure robust functionality and top-notch security for your applications." },
                                { title: "AI / Automation Features", desc: "We integrate cutting-edge AI and automation to streamline your processes." },
                                { title: "Database Optimization", desc: "We optimize databases for performance, scalability, and reliability." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 * index }}
                                >
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-200">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExpertiesSection;