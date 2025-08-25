import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { OUR_MISSION } from "../../utils/constants/company-details";

const OurMissionSection = () => {
    return (
        <div className="py-10">
            <div className="container max-w-full gap-8 px-8 mx-auto">
                <motion.div
                    className="p-8 bg-[aliceblue] shadow-lg rounded-xl text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when section is in view
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <motion.h2 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-black">
                        <motion.span
                            animate={{
                                x: [0, .5, -.5, .5, -.5, 0],
                                y: [0, 1, -1, 1, -1, 0]
                            }}
                            transition={{
                                repeat: Infinity, // Repeat forever
                                duration: .6, // Adjust duration for speed of shaking
                                ease: "easeInOut", // Smooth easing for the shake
                            }}
                        >
                            🚀
                        </motion.span>
                        Our Mission
                    </motion.h2>
                    <p className="text-lg text-gray-600">
                        <Link to="/">{OUR_MISSION}</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default OurMissionSection;
