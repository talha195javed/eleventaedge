import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { OUR_TEAM } from "../../utils/constants/company-details";

const TeamSection = () => {
    return (
        <div className="py-10">
            <div className="container max-w-full gap-8 px-8 mx-auto">
                <motion.div
                    className="p-8 bg-[aliceblue] shadow-lg rounded-xl text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <motion.h2 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-black">
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                        >
                            🥇
                        </motion.span>
                        Our Team
                    </motion.h2>

                    <p className="text-lg text-gray-600">
                        <Link to="/">{OUR_TEAM}</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;