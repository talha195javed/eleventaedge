import { motion } from "framer-motion";

const ServiceMarketingSection = () => {
    return (
        <div className="text-white">
            {/* Content Section */}
            <div className="relative z-10">
                <section className="relative px-6">
                    {/* Hero Section */}
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            className="text-6xl"
                            initial={{ rotateY: 90, opacity: 0 }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            📱
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Digital Marketing & Lead Services
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            EleventaEdge helps businesses grow through targeted marketing, lead generation, and social media management. We create strategies that boost visibility, attract quality leads, and maximize ROI.
                        </motion.p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-5xl mx-auto mt-12">
                        <motion.h3
                            className="text-3xl font-bold text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Us for Marketing & Leads?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Targeted Lead Generation",
                                    description:
                                        "We identify and deliver high-quality leads tailored to your business to expand your sales pipeline.",
                                },
                                {
                                    title: "Social Media Growth",
                                    description:
                                        "We manage your social media accounts, creating engaging content and campaigns that grow your audience and brand presence.",
                                },
                                {
                                    title: "Ads Management Expertise",
                                    description:
                                        "We create and optimize campaigns across Google, Facebook, and Instagram to drive traffic, conversions, and ROI.",
                                },
                                {
                                    title: "Strategic Campaign Planning",
                                    description:
                                        "Our team develops marketing strategies aligned with your goals, ensuring measurable impact and sustainable growth.",
                                },
                                {
                                    title: "Performance Tracking & Analytics",
                                    description:
                                        "We monitor all campaigns and provide insights on performance, allowing continuous optimization for better results.",
                                },
                            ].map(({ title, description }, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-900 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-xl font-semibold">✅ {title}</h4>
                                    <p className="mt-2 text-gray-300">{description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-5xl mx-auto mt-12">
                        <motion.h3
                            className="text-3xl font-bold text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Our Services Include:
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Lead Generation",
                                    description:
                                        "Finding and qualifying leads to boost your sales pipeline and grow your business.",
                                },
                                {
                                    title: "Social Media Management",
                                    description:
                                        "Creating and managing content to grow brand presence and engage your audience effectively.",
                                },
                                {
                                    title: "Google Ads Management",
                                    description:
                                        "Running targeted ad campaigns to drive traffic, leads, and measurable conversions.",
                                },
                                {
                                    title: "Social Media Ads",
                                    description:
                                        "Optimizing paid campaigns on social media platforms to maximize reach and engagement.",
                                },
                                {
                                    title: "Appointment Setting",
                                    description:
                                        "Scheduling meetings efficiently with potential clients to save time and increase opportunities.",
                                },
                            ].map(({ title, description }, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-800 rounded-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-xl font-semibold">🔹 {title}</h4>
                                    <p className="mt-2 text-gray-300">{description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceMarketingSection;
