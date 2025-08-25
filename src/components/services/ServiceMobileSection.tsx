import { motion } from "framer-motion";

const ServiceMobileSection = () => {
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
                            Mobile App Services
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            We deliver high-performance mobile applications with integrated AI features. Whether you're looking for native or cross-platform solutions, we tailor mobile apps to fit your unique business needs.
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
                            Why Choose Us for Mobile Apps?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Custom Mobile Solutions",
                                    description:
                                        "We build mobile apps tailored to your business needs. Whether it's a native app or a cross-platform solution, we ensure your app delivers a seamless user experience while integrating AI capabilities.",
                                },
                                {
                                    title: "AI-Enhanced User Experience",
                                    description:
                                        "Our mobile apps leverage AI features such as intelligent chatbots, personalized recommendations, and predictive analytics to enhance user engagement and boost business performance.",
                                },
                                {
                                    title: "Cross-Platform or Native Apps",
                                    description:
                                        "We offer both native and cross-platform app development based on your project requirements. Our team uses the latest tools to ensure that your app runs smoothly on iOS and Android devices.",
                                },
                                {
                                    title: "Scalable & Secure",
                                    description:
                                        "Our mobile apps are designed with scalability in mind, enabling your business to grow without compromising security. We implement robust security measures to safeguard user data and ensure compliance.",
                                },
                                {
                                    title: "End-to-End Support",
                                    description:
                                        "From app design to development and deployment, we provide end-to-end support. We also offer maintenance and updates to ensure that your app stays up to date with evolving user needs and technological advancements.",
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

                    {/* Our Mobile App Solutions */}
                    <div className="max-w-5xl mx-auto mt-12">
                        <motion.h3
                            className="text-3xl font-bold text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Our Mobile App Solutions Include:
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Native iOS & Android Apps",
                                    description:
                                        "We specialize in creating high-performance native applications that offer a seamless and responsive experience on both iOS and Android platforms.",
                                },
                                {
                                    title: "Cross-Platform Mobile Apps",
                                    description:
                                        "With frameworks like React Native and Flutter, we deliver cross-platform solutions that allow you to reach a wider audience while keeping development costs low.",
                                },
                                {
                                    title: "AI-Powered Features",
                                    description:
                                        "Our mobile apps integrate AI-powered features like chatbots, personalized content, facial recognition, and more, helping your app stand out in the competitive mobile market.",
                                },
                                {
                                    title: "Mobile App Optimization",
                                    description:
                                        "We focus on app optimization, ensuring that your app is fast, responsive, and user-friendly, with minimal load times and a smooth user experience.",
                                },
                                {
                                    title: "App Monetization Strategies",
                                    description:
                                        "We help you develop effective app monetization strategies, whether it's through in-app purchases, subscriptions, ads, or a combination of these methods.",
                                },
                                {
                                    title: "App Analytics & Insights",
                                    description:
                                        "We integrate advanced analytics tools to provide you with valuable insights into your users' behavior, helping you make data-driven decisions to improve your app's performance.",
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

export default ServiceMobileSection;
