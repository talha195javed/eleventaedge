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
                        Welcome to <Link to="/">{COMPANY_NAME}</Link> – your trusted partner in
                        business growth. At <Link to="/">{COMPANY_NAME}</Link>, we empower startups
                        and enterprises with reliable support, smarter marketing, and innovative
                        digital strategies. From daily operations to lead generation and paid ads,
                        we help businesses focus on growth while we handle the rest.
                    </motion.p>

                    <motion.p
                        className="text-xl text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Our expertise spans Virtual Assistance, Social Media Management, Lead
                        Generation, Appointment Setting, and Ads Management. By combining proven
                        strategies with modern tools, we deliver excellence, consistency, and
                        measurable impact — helping brands build stronger connections and achieve
                        sustainable success in today’s fast-changing market.
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
                            {
                                icon: "👩‍💻",
                                title: "Virtual Assistance",
                                content:
                                    "Providing reliable support for daily administrative tasks so businesses can focus on growth.",
                                delay: 0.2,
                            },
                            {
                                icon: "🎯",
                                title: "Lead Generation",
                                content:
                                    "Identifying and delivering high-quality leads to boost your sales pipeline.",
                                delay: 0.4,
                            },
                            {
                                icon: "📢",
                                title: "Social Media Management",
                                content:
                                    "Building brand presence and engaging audiences across platforms to grow visibility and influence.",
                                delay: 0.6,
                            },
                            {
                                icon: "📅",
                                title: "Appointment Setting",
                                content:
                                    "Scheduling meetings efficiently with potential clients to maximize your time and opportunities.",
                                delay: 0.8,
                            },
                            {
                                icon: "💹",
                                title: "Google Ads Management",
                                content:
                                    "Running targeted ad campaigns that drive traffic, leads, and measurable conversions.",
                                delay: 1.0,
                            },
                            {
                                icon: "📲",
                                title: "Social Media Ads",
                                content:
                                    "Creating and managing ad campaigns on Facebook, Instagram, and other platforms to amplify reach.",
                                delay: 1.2,
                            },
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
                                <p className="text-gray-300">{content}</p>
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
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/">{COMPANY_NAME}</Link> – Empowering Business Growth
                    </motion.h2>

                    <motion.p
                        className="max-w-3xl mx-auto text-lg text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Our team at <Link to="/">{COMPANY_NAME}</Link> is dedicated to helping businesses thrive through
                        reliable support, smart marketing strategies, and digital solutions that drive results.
                        We focus on delivering consistent, measurable impact — from Virtual Assistance and Lead Generation to Social Media Management and Paid Ads — ensuring sustainable growth and stronger customer connections.
                    </motion.p>
                </section>

            </div>
        </div>
    );
};

export default AboutUs;
