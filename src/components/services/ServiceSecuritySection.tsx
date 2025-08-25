import { motion } from "framer-motion";

const ServiceSecuritySection = () => {
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
                            Cybersecurity Solutions
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Safeguard your business with our comprehensive cybersecurity solutions. We provide end-to-end protection, from threat detection to incident response, ensuring your digital assets are secure.
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
                            Why Choose Us for Cybersecurity?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Threat Detection & Prevention",
                                    description:
                                        "Our solutions provide proactive monitoring and threat detection, ensuring that potential cyber threats are identified and neutralized before they can cause harm to your systems.",
                                },
                                {
                                    title: "Data Encryption",
                                    description:
                                        "We implement strong encryption protocols to protect your sensitive data, both in transit and at rest, ensuring that your data remains secure and inaccessible to unauthorized entities.",
                                },
                                {
                                    title: "Incident Response & Recovery",
                                    description:
                                        "In case of a breach, we offer rapid incident response to mitigate damage and provide a robust recovery plan, ensuring that your systems are restored quickly and securely.",
                                },
                                {
                                    title: "Compliance & Auditing",
                                    description:
                                        "We ensure your business complies with industry regulations and standards, including GDPR, HIPAA, and PCI DSS, through regular audits and assessments to maintain a secure environment.",
                                },
                                {
                                    title: "Security Awareness Training",
                                    description:
                                        "We offer tailored training programs to educate your team on best cybersecurity practices, empowering them to identify and prevent potential security threats themselves.",
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

export default ServiceSecuritySection;
