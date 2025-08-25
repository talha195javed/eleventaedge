import React from "react";
import { Link } from "react-router-dom";

interface Service {
    id: string; // Add id for linking
    title: string;
    description: string;
    icon: React.ReactNode;
}

// Service Data
const services: Service[] = [
    { id: "ai", title: "AI & ML", description: "Cutting-edge AI technologies to drive business growth.", icon: "🤖" },
    { id: "mobile", title: "Mobile App", description: "Create engaging and user-friendly apps for your business.", icon: "📱" },
    { id: "web", title: "Web Development", description: "We build modern, scalable, and responsive websites tailored to your business needs.", icon: "🌐" },
    { id: "software", title: "Custom Software", description: "Tailored solutions to meet your business requirements.", icon: "🖥️" },
    { id: "cloud", title: "Cloud Integration", description: "Scalable and secure cloud solutions for seamless operations.", icon: "☁️" },
    { id: "security", title: "Cybersecurity Services", description: "Protect your business with top-notch security frameworks.", icon: "🛡️" },
];

const ServiceCardsSection: React.FC = () => {
    return (
        <div className="container px-8 pb-8 mx-auto mt-[-4rem] max-w-full">
            <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Link key={index} to={`/services#${service.id}`}>
                        <ServiceCard title={service.title} description={service.description} icon={service.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

// ServiceCard Component
interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center p-6 transition-all duration-300 bg-[aliceblue] rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-red-400">
            <div className="mb-4 text-5xl">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCardsSection;
