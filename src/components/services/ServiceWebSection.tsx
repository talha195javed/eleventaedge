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
                            Web Development
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Elevate your online presence with our top-tier web development solutions. From stunning front-end designs to scalable back-end systems, we create seamless, user-friendly experiences.
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
                                    title: "Custom Web Designs",
                                    description:
                                        "Our web design team creates unique, responsive, and aesthetically pleasing websites tailored to your brand identity and user needs, ensuring a memorable experience for your audience.",
                                },
                                {
                                    title: "Scalable Web Architecture",
                                    description:
                                        "We build scalable web applications that grow with your business. Whether it's increasing user traffic or adding new features, our solutions are designed to adapt and evolve over time.",
                                },
                                {
                                    title: "Full-Stack Expertise",
                                    description:
                                        "From front-end to back-end, we specialize in both areas. Whether it's Angular, React, or Vue.js for the frontend or Node.js, Express, or Laravel for the backend, we ensure your web applications are fast and reliable.",
                                },
                                {
                                    title: "SEO Optimization",
                                    description:
                                        "Our web development services include built-in SEO strategies, helping your website rank higher on search engines. We implement on-page SEO techniques to drive organic traffic and boost visibility.",
                                },
                                {
                                    title: "Web Security Best Practices",
                                    description:
                                        "We ensure that your website is secure from cyber threats with the latest security protocols. From data encryption to secure transactions, we prioritize the safety of your users' information.",
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
