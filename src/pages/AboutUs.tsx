import React from "react";
import { motion } from "framer-motion";
import OurMissionSection from "../components/shared/OurMissionSection";
import TeamSection from "../components/about/OurTeamSection";
// import TeamMembersSection from "../components/about/TeamMembersSection";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../utils/constants/company-details";

const AboutUs: React.FC = () => {
    return (
        <div className="pt-24 text-white bg-black">
            {/* Background Image with Dark Overlay */}
            <div
                className="fixed inset-0 z-0 bg-center bg-cover"
                style={{ backgroundImage: "url(/images/join-us-2.jpg)" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10">
                {/* Introduction Section */}
                <section className="px-6 pb-20">
                    <motion.h1
                        className="mb-4 text-5xl font-bold text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="mb-6 text-xl text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Welcome to <Link to="/">{COMPANY_NAME}</Link> – Innovating the Future of Tech, SaaS, and AI Solutions. At <Link to="/">{COMPANY_NAME}</Link>, we are driven by a mission to empower businesses with cutting-edge technology solutions.  We build platforms for smart business communication and integrations, combining innovative approaches to create scalable, secure, and AI-powered digital experiences that transform how companies operate and engage with their customers.
                    </motion.p>
                    <motion.p
                        className="text-xl text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        We specialize in crafting customized digital strategies that boost business efficiency and growth through advanced tech solutions. Our flexible, cloud-based software (SaaS) offerings streamline operations and enhance productivity, while our AI integration services leverage automation and intelligent decision-making to optimize customer interaction and business processes.
                    </motion.p>
                </section>

                {/* Mission and Team Sections - Grid Layout */}
                <section className="grid grid-cols-1 gap-12 px-6 pb-20 text-center md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <OurMissionSection />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <TeamSection />
                    </motion.div>
                </section>

                {/* Specializations Section */}
                <section className="px-6 pb-20">
                    <motion.h2
                        className="mb-6 text-3xl font-semibold text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        We Specialize In
                    </motion.h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Expertise Items */}
                        {[
                            { icon: "⚙️", title: "Tech Solutions", content: "Crafting customized digital strategies that boost business efficiency and growth.", delay: 0.2 },
                            { icon: "☁️", title: "SaaS", content: "Offering flexible, cloud-based software solutions that streamline operations and improve productivity.", delay: 0.4 },
                            { icon: "🤖", title: "AI Integration", content: "Leveraging the power of Artificial Intelligence to enhance automation, decision-making, and customer interaction.", delay: 0.6 },
                        ].map(({ icon: Icon, title, content, delay }) => (
                            <motion.div
                                key={title}
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay }}
                            >
                                <div className="mb-4 text-5xl">{Icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                                <p className="text-gray-300">
                                    {content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Team Members Section */}
                {/* <section className="px-6 pb-20">
                    <TeamMembersSection />
                </section> */}

                {/* Closing Section */}
                <section className="px-6 pb-20 text-center">
                    <motion.h2
                        className="mb-6 text-3xl font-semibold"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when the element enters the viewport
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} // Animation happens once when the element enters the view
                    >
                        <Link to="/">{COMPANY_NAME}</Link> – Innovating the Future
                    </motion.h2>
                    <motion.p
                        className="max-w-3xl mx-auto text-lg text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when the element enters the viewport
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }} // Animation happens once when the element enters the view
                    >
                        Our team is dedicated to helping businesses thrive through
                        innovative solutions in technology, SaaS, and AI. We believe in
                        continuously evolving and staying ahead of the curve to ensure our
                        clients achieve success and sustainable growth.
                    </motion.p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
