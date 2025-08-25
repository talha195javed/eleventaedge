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
                    We are committed to providing high-quality solutions with the following core values:
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
                            <h3 className="mb-2 text-xl font-semibold text-white">Experienced Professionals</h3>
                            <p className="text-gray-300">
                                Our team consists of experts committed to delivering excellence in every project.
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
                            <h3 className="mb-2 text-xl font-semibold text-white">Innovative Solutions</h3>
                            <p className="text-gray-300">
                                We leverage the latest technologies to develop innovative solutions for your business.
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
                            <h3 className="mb-2 text-xl font-semibold text-white">Customer-Centric Approach</h3>
                            <p className="text-gray-300">
                                We prioritize understanding your business needs and delivering solutions aligned with your goals.
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
                            <h3 className="mb-2 text-xl font-semibold text-white">Proven Track Record</h3>
                            <p className="text-gray-300">
                                With successful projects across various industries, we have a proven track record in all over the world.
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