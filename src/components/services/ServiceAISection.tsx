import { motion } from "framer-motion";

const ServiceAISection = () => {
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
                            🤖
                        </motion.div>
                        <motion.h2
                            className="mt-4 text-4xl font-bold"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            AI & ML
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Transform your business with cutting-edge AI solutions. We help automate operations, enhance decision-making, and unlock new growth opportunities with Artificial Intelligence.
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
                            Why Choose Us for AI & ML?
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Tailored AI Strategies",
                                    description:
                                        "We design AI solutions that are tailored to your business needs. Whether you're looking to automate processes, analyze data, or enhance customer experiences, our team creates strategies that align with your goals and deliver measurable results.",
                                },
                                {
                                    title: "Data-Driven Decision Making",
                                    description:
                                        "Our AI solutions empower your business to make smarter decisions by leveraging data. We build models that analyze large datasets, identify trends, and provide actionable insights, helping you stay ahead of the competition.",
                                },
                                {
                                    title: "Automation & Productivity",
                                    description:
                                        "Automate repetitive tasks and streamline workflows with our AI-powered solutions. From customer service chatbots to automated data processing, we help you save time, reduce costs, and improve productivity.",
                                },
                                {
                                    title: "Seamless AI Integration",
                                    description:
                                        "We ensure that AI solutions are seamlessly integrated into your existing systems. Our team works closely with you to minimize disruption and maximize the value of AI in your operations.",
                                },
                                {
                                    title: "Ethical AI Development",
                                    description:
                                        "We prioritize ethical AI practices, ensuring that our solutions are transparent, fair, and unbiased. Our commitment to ethical AI helps build trust and ensures long-term success for your business.",
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

                    {/* AI Solutions */}
                    <div className="max-w-5xl mx-auto mt-12">
                        <motion.h3
                            className="text-3xl font-bold text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Our AI Solutions Include:
                        </motion.h3>
                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    title: "Machine Learning & Predictive Analytics",
                                    description:
                                        "We build and deploy custom machine learning models that enable your business to predict future trends, automate processes, and enhance decision-making. From sales forecasting to customer behavior analysis, our solutions help you stay ahead of the curve.",
                                },
                                {
                                    title: "Natural Language Processing (NLP)",
                                    description:
                                        "Implement NLP techniques to process and analyze human language data. Our NLP solutions power smarter chatbots, sentiment analysis, and content generation, enabling you to engage with customers more effectively.",
                                },
                                {
                                    title: "Computer Vision & Image Recognition",
                                    description:
                                        "We develop AI-powered computer vision systems for image recognition, object detection, and video analysis. These solutions help businesses automate visual tasks, improve accuracy, and reduce manual effort.",
                                },
                                {
                                    title: "AI-Powered Business Intelligence & Analytics",
                                    description:
                                        "Unlock valuable insights from your data with AI-driven analytics tools. Our solutions improve business intelligence, optimize operations, and help you make data-driven decisions with confidence.",
                                },
                                {
                                    title: "AI Chatbots & Virtual Assistants",
                                    description:
                                        "Build AI-powered chatbots and virtual assistants to handle customer inquiries, improve engagement, and enhance user experience. Our solutions are designed to deliver seamless, human-like interactions.",
                                },
                                {
                                    title: "AI for Workflow Automation",
                                    description:
                                        "Automate complex workflows with AI-powered solutions. From document processing to inventory management, our AI tools reduce manual intervention, increase productivity, and improve accuracy.",
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

export default ServiceAISection;