import { motion } from 'framer-motion';
import useImageCarousel from '../../hooks/useImageCarousel';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../utils/constants/company-details';

const images = [
    "/images/intro-1.jpg",
    "/images/intro-2.avif",
    "/images/intro-3.jpg",
    "/images/intro-4.webp",
    "/images/intro-5.jpg",
    "/images/intro-6.webp",
    "/images/intro-7.webp"
];

const IntroductionSection: React.FC = () => {
    const { currentImage, nextImage } = useImageCarousel(images, 4000);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-center bg-cover z-[-1]">
            {/* Old Image (Zoom Out and Fade Out) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${currentImage})` }}
                key={`old-${currentImage}`}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* New Image (Zoom In and Fade In) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${nextImage})` }}
                key={`new-${nextImage}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="h-[220px]"></div> {/* Space gap */}

            <motion.div
                className="relative z-10 flex items-start justify-start w-full h-full px-8 text-left"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <div>
                    <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-7xl">
                        The Future
                    </h1>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                        of Your Business is Here
                    </h2>
                    <h3 className="text-lg text-white sm:text-xl md:text-xl lg:text-2xl mt-[36px] max-w-[600px] mx-auto">
                        <Link to="/">{COMPANY_NAME}</Link> offers cost-effective, customized technology and software solutions in all over the world, empowering businesses with scalable, secure, and AI-powered digital experiences.
                    </h3>
                </div>

            </motion.div>
        </div>
    );
};

export default IntroductionSection;