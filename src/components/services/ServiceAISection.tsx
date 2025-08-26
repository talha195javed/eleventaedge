import { motion } from "framer-motion";

const ServiceBusinessGrowthSection = () => {
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
                            💼
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Business Growth Solutions
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            EleventaEdge helps businesses grow through Virtual Assistance, Lead Generation,
                            Social Media Management, and Ads Management. We provide reliable support and
                            innovative strategies that drive measurable results and sustainable success.
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
                            Why Choose Us?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Tailored Business Solutions",
                                    description:
                                        "We design strategies and services that align with your unique business needs to maximize growth and efficiency.",
                                },
                                {
                                    title: "Lead Generation & Sales Growth",
                                    description:
                                        "Our team identifies and delivers high-quality leads to expand your sales pipeline and boost revenue.",
                                },
                                {
                                    title: "Social Media & Ads Expertise",
                                    description:
                                        "From managing campaigns to running targeted ads, we ensure your brand reaches the right audience and achieves measurable results.",
                                },
                                {
                                    title: "Reliable Support & Operations",
                                    description:
                                        "We handle your administrative tasks, appointment scheduling, and business operations so you can focus on core priorities.",
                                },
                                {
                                    title: "Measurable Impact",
                                    description:
                                        "Every service we provide is designed to deliver tangible results, helping you track growth and optimize strategies.",
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

                    {/* Our Solutions */}
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
                                    title: "Virtual Assistance",
                                    description:
                                        "Handling daily administrative tasks, inbox management, and scheduling to streamline your business operations.",
                                },
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
                                    title: "Appointment Setting",
                                    description:
                                        "Scheduling meetings with potential clients in a hassle-free and efficient manner.",
                                },
                                {
                                    title: "Google Ads Management",
                                    description:
                                        "Running targeted ad campaigns that drive traffic, leads, and conversions.",
                                },
                                {
                                    title: "Social Media Ads",
                                    description:
                                        "Creating and optimizing ad campaigns across platforms like Facebook, Instagram, and LinkedIn to maximize reach.",
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

export default ServiceBusinessGrowthSection;
