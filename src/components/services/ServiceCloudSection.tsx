import { motion } from "framer-motion";

const ServiceCloudSection = () => {
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
                            Cloud Solutions
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Unlock the power of cloud computing to streamline your business operations, enhance scalability, and reduce costs. Our cloud solutions provide secure, reliable, and efficient services tailored to your needs.
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
                            Why Choose Us for Cloud Solutions?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Custom Cloud Infrastructure",
                                    description:
                                        "We design and implement cloud infrastructure that meets the unique needs of your business. Whether public, private, or hybrid, we ensure scalability, security, and high availability.",
                                },
                                {
                                    title: "Cloud Migration Expertise",
                                    description:
                                        "Our experts help you smoothly transition to the cloud, ensuring minimal downtime, data security, and a seamless migration process that doesn’t disrupt your business operations.",
                                },
                                {
                                    title: "Cost Optimization",
                                    description:
                                        "We focus on cost-effective cloud strategies, optimizing your cloud environment to reduce unnecessary expenses and enhance resource utilization, ensuring you get the best value for your investment.",
                                },
                                {
                                    title: "Disaster Recovery & Backup",
                                    description:
                                        "Our cloud solutions include robust disaster recovery and backup strategies, ensuring your data is secure, backed up, and easily recoverable in the event of a crisis.",
                                },
                                {
                                    title: "Cloud Security & Compliance",
                                    description:
                                        "We ensure your cloud infrastructure is secure and compliant with industry standards and regulations, protecting your business data and providing peace of mind.",
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

export default ServiceCloudSection;
