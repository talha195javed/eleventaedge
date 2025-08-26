import { motion } from "framer-motion";

const ServiceWebSection = () => {
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
                            💻
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Web & Digital Solutions
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            At EleventaEdge, we craft responsive, secure, and user-friendly web solutions tailored to elevate your online presence. From SaaS platforms to digital marketing tools, we design web experiences that streamline operations, engage audiences, and drive measurable growth.
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
                            Why Choose Us for Web Development?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Custom & Responsive Websites",
                                    description:
                                        "We create visually appealing and responsive websites that perfectly reflect your brand identity and provide an engaging user experience.",
                                },
                                {
                                    title: "Scalable Web Platforms",
                                    description:
                                        "Our web solutions are built to grow with your business. From high traffic handling to feature expansion, our platforms adapt seamlessly.",
                                },
                                {
                                    title: "Full-Stack Development Expertise",
                                    description:
                                        "We handle everything from front-end design to back-end architecture. Our team ensures fast, reliable, and efficient web applications using modern technologies.",
                                },
                                {
                                    title: "SEO & Performance Optimization",
                                    description:
                                        "Our websites are optimized for search engines and performance, ensuring higher visibility, faster load times, and better engagement.",
                                },
                                {
                                    title: "Security & Compliance",
                                    description:
                                        "We implement strong security measures and follow industry best practices to protect user data, transactions, and digital assets.",
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

export default ServiceWebSection;
