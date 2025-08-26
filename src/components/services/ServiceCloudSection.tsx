import { motion } from "framer-motion";

const ServiceSupportSection = () => {
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
                            ☁️
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Business Support & Operations
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            EleventaEdge provides reliable business support solutions that streamline operations, optimize workflow, and enhance productivity. Our services are designed to help you focus on growth while we handle the administrative and operational tasks.
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
                            Why Choose Us for Business Support?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Virtual Assistance",
                                    description:
                                        "We manage your daily administrative tasks, inbox, and scheduling to let you focus on your core business priorities.",
                                },
                                {
                                    title: "Appointment & Calendar Management",
                                    description:
                                        "Efficiently scheduling meetings and coordinating with clients, reducing missed opportunities and optimizing your time.",
                                },
                                {
                                    title: "Operational Efficiency",
                                    description:
                                        "Streamlining workflows and business processes to enhance productivity and minimize overhead.",
                                },
                                {
                                    title: "Lead & Client Management",
                                    description:
                                        "Tracking and managing leads, client communications, and follow-ups to maximize conversions and business growth.",
                                },
                                {
                                    title: "Reliable Support",
                                    description:
                                        "A dedicated team ensuring your business operations run smoothly with minimal disruptions, providing peace of mind.",
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

export default ServiceSupportSection;
