import { motion } from 'framer-motion';
import InsightsIntroVideo from '../../assets/videos/insights-intro.mp4';

const ChooseSection: React.FC = () => {
    return (
        <div className="container grid items-center max-w-full grid-cols-1 px-8 mx-auto md:grid-cols-2">
            <motion.div
                className="pr-8 mb-8 md:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1 className="mb-6 text-4xl font-bold text-white">
                    Why Choose Us?
                </h1>
                <p className="mb-8 text-lg text-gray-300">
                    ✨ At EleventaEdge, we don’t just provide services — we become an extension of your team, ensuring consistency, growth, and measurable impact. Here’s why businesses trust us:
                </p>
                <div className="space-y-6">
                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Proven Expertise</h3>
                            <p className="text-gray-300">
                                From startups to enterprises, we’ve helped businesses streamline operations and accelerate growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    >
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Result-Driven Approach</h3>
                            <p className="text-gray-300">
                                Every strategy we design is focused on delivering measurable outcomes that boost your bottom line.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    >
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Tailored Solutions</h3>
                            <p className="text-gray-300">
                                We customize our services to match your unique business goals and industry requirements.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    >
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Scalable Support</h3>
                            <p className="text-gray-300">
                                Whether you’re growing or already established, our services scale with your business needs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="w-full">
                <video autoPlay muted loop className="object-cover object-center w-full h-screen overflow-hidden rounded-lg shadow-lg max-h-[650px]">
                    <source src={InsightsIntroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default ChooseSection;
