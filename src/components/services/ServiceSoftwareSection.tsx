import { motion } from "framer-motion";

const ServiceSoftwareSection = () => {
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
                            🖥️
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Software Development
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            We specialize in building customized software solutions that solve complex problems, enhance business efficiency, and enable seamless workflows across various industries.
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
                            Why Choose Us for Software Development?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Tailored Software Solutions",
                                    description:
                                        "We design software solutions tailored to your specific business needs, ensuring that every aspect of the software enhances your operations and drives growth.",
                                },
                                {
                                    title: "Agile Development Process",
                                    description:
                                        "Our agile development methodology ensures continuous delivery, rapid iteration, and quick adjustments to meet your evolving needs, keeping your project on track and within budget.",
                                },
                                {
                                    title: "Cross-Platform Development",
                                    description:
                                        "We develop software that seamlessly integrates across platforms. Whether it's Windows, macOS, or Linux, our solutions work perfectly across your entire tech stack.",
                                },
                                {
                                    title: "Scalable Architecture",
                                    description:
                                        "Our software is designed with scalability in mind, enabling your business to grow without worrying about performance issues or having to replace the system as your needs evolve.",
                                },
                                {
                                    title: "Post-Launch Support",
                                    description:
                                        "We offer comprehensive post-launch support, ensuring your software is optimized, updated, and monitored regularly to ensure smooth operation in the long term.",
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

export default ServiceSoftwareSection;
