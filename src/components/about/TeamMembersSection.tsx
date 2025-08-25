import React from "react";
import { motion, Variants } from "framer-motion";

interface TeamMemberProps {
    name: string;
    position: string;
    image: string;
    linkedIn: string;
}

const TeamMembersSection: React.FC = () => {
    const teamMembers: TeamMemberProps[] = [
        {
            name: "Ibrahim",
            position: "CEO & Founder",
            image: "./images/team/team-1.jpg",
            linkedIn: "https://www.linkedin.com/in/therealibrahimali/",
        },
        {
            name: "Anvar",
            position: "Government Relations Manager",
            image: "./images/team/team-2.png",
            linkedIn: "https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all",
        },
        {
            name: "Mansour",
            position: "B2G Manager",
            image: "./images/team/team-3.png",
            linkedIn: "https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all",
        },
        {
            name: "Jabir",
            position: "Customer Happiness Specialist",
            image: "./images/team/team-4.png",
            linkedIn: "https://www.linkedin.com/in/jabir-ahammad-4856312b7/",
        },
        {
            name: "Sherin",
            position: "Customer Happiness Specialist",
            image: "./images/team/team-5.png",
            linkedIn: "https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all",
        },
        {
            name: "Shammas",
            position: "Accounts Specialist",
            image: "./images/team/team-6.png",
            linkedIn: "https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all",
        },
        {
            name: "Faisal",
            position: "VAT, Corporate Tax and Bookkeeping Specialist",
            image: "./images/team/team-7.png",
            linkedIn: "https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all",
        }
    ];

    // Animation variants for staggered entry
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5, // Stagger the animation of children
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <section className="px-6 py-20">
            <h2 className="mb-12 text-3xl font-semibold text-center">Meet Our Team</h2>
            <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Animate only once
            >
                {teamMembers.map((member, index) => (
                    <motion.a
                        key={index}
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-end transition-all bg-white rounded-lg shadow-lg h-128 hover:scale-105 hover:shadow-xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Scale up on hover
                    >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover object-top w-full rounded-t-lg"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Full Bottom Section (White Background) */}
                        <div className="flex flex-col justify-end w-full px-4 py-6 bg-white rounded-b-lg h-[100px] text-center">
                            <p className="text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                                {member.name}
                            </p>
                            <p className="text-gray-600 transition-colors cursor-pointer hover:text-blue-600">
                                {member.position}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default TeamMembersSection;