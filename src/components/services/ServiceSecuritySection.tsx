import { motion } from "framer-motion";

const ServiceSupportSecuritySection = () => {
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
                            🔒
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Data & Business Security
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            At EleventaEdge, protecting your business and client data is our priority. We ensure that all operations, communications, and client information are handled securely, maintaining trust and reliability for your business.
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
                            Why Choose Us for Business Security?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Confidential Data Handling",
                                    description:
                                        "We manage client and business data securely, ensuring privacy and trust in every task we handle.",
                                },
                                {
                                    title: "Secure Communications",
                                    description:
                                        "All business communications, emails, and scheduling are managed with strict confidentiality.",
                                },
                                {
                                    title: "Reliable Operational Security",
                                    description:
                                        "Our processes are designed to minimize errors and risks, keeping your operations safe and efficient.",
                                },
                                {
                                    title: "Compliance & Best Practices",
                                    description:
                                        "We follow industry-standard practices to ensure security and reliability in all our services.",
                                },
                                {
                                    title: "Team Training & Awareness",
                                    description:
                                        "Our team is trained to handle sensitive information responsibly, ensuring client trust and operational integrity.",
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
                </section>
            </div>
        </div>
    );
};

export default ServiceSupportSecuritySection;
