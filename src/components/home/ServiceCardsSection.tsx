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
    { id: "ai", title: "Virtual Assistance", description: "Reliable support for your daily admin tasks so you can focus on growth.", icon: "👩‍💻" },
    { id: "mobile", title: "Lead Generation", description: "Identifying and delivering quality leads to boost your sales pipeline.", icon: "🎯" },
    { id: "web", title: "Social Media Management", description: "Building your brand presence and engaging your audience across platforms.", icon: "📢" },
    { id: "software", title: "Appointment Setting", description: "Scheduling meetings with your potential clients — hassle-free and efficient.", icon: "📅" },
    { id: "cloud", title: "Google Ads Management", description: "Running targeted Google ad campaigns that drive traffic and conversions.", icon: "💹" },
    { id: "security", title: "Social Media Ads", description: "Creating and managing ad campaigns on Facebook, Instagram, and more.", icon: "📲" },
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
