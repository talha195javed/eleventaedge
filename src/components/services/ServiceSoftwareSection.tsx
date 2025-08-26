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
                            Business Software Solutions
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            At EleventaEdge, we craft custom software solutions designed to streamline workflows, enhance productivity, and automate key business processes. From virtual assistance platforms to lead generation tools, our software enables smarter, faster, and more efficient operations.
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
                                    title: "Custom Business Software",
                                    description:
                                        "We build software tailored to your business needs, enabling automation, improved workflow, and better client engagement.",
                                },
                                {
                                    title: "Integration with Existing Systems",
                                    description:
                                        "Our solutions integrate seamlessly with your current tools, platforms, and communication channels to enhance operational efficiency.",
                                },
                                {
                                    title: "Scalable & Flexible",
                                    description:
                                        "Our software is designed to grow with your business, handling increasing users, data, and processes without performance loss.",
                                },
                                {
                                    title: "Productivity & Automation",
                                    description:
                                        "Automate repetitive tasks, streamline operations, and enable your team to focus on strategic growth rather than manual work.",
                                },
                                {
                                    title: "Ongoing Support & Maintenance",
                                    description:
                                        "We provide continuous support, updates, and optimization to ensure your software stays efficient, secure, and up-to-date.",
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
