import { motion } from "framer-motion";
import useImageCarousel from "../../hooks/useImageCarousel";

const images = [
    "/images/expert-areas/va.webp",
    "/images/expert-areas/lg.jpg",
    "/images/expert-areas/as.jpg",
    "/images/expert-areas/smm.png"
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
                            At EleventaEdge, we combine proven strategies with modern tools to deliver reliable support, smarter marketing, and measurable business growth.
                        </p>

                        <div className="max-w-2xl px-4 space-y-6">
                            {[
                                { title: "Virtual Assistance", desc: "Streamlining administrative tasks, inbox management, and daily operations." },
                                { title: "Lead Generation", desc: "Advanced strategies to identify, qualify, and deliver high-quality leads." },
                                { title: "Appointment Setting", desc: "Hassle-free scheduling and calendar management to connect you with potential clients." },
                                { title: "Paid Ads Management", desc: "Running optimized campaigns on Google Ads, Facebook, Instagram, and LinkedIn." },
                                { title: "Social Media Management", desc: "Crafting engaging content and growing brand visibility across multiple platforms." }
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
