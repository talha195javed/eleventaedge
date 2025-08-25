import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../utils/constants/company-details";

type Technology = {
    name: string;
    icon: string;
};

type Tab = {
    id: string;
    label: string;
};

type Technologies = {
    [key: string]: Technology[];
};

const TechnologiesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("mobile");

    const tabs: Tab[] = [
        { id: "mobile", label: "Mobile App" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "database", label: "Database" },
        { id: "devops", label: "Cloud & Devops" },
        { id: "payment", label: "Payment" },
    ];

    const technologies: Technologies = {
        mobile: [
            { name: "iOS", icon: "./icons/ios.svg" },
            { name: "Swift", icon: "./icons/swift.svg" },
            { name: "SwiftUI", icon: "./icons/swift-ui.svg" },
            { name: "Objective-C", icon: "./icons/objective-c.png" },

            { name: "Android", icon: "./icons/android.svg" },
            { name: "Kotlin", icon: "./icons/kotlin.svg" },
            { name: "Java", icon: "./icons/java.svg" },
            { name: "Jetpack Compose", icon: "./icons/jetpack-compose.png" },

            { name: "React Native", icon: "./icons/react.svg" },
            { name: "Expo", icon: "./icons/expo.png" },

            { name: "Flutter", icon: "./icons/flutter.svg" },

            { name: "Ionic", icon: "./icons/ionic.svg" },
            { name: "Capacitor", icon: "./icons/capacitor.svg" },
            { name: "Cordova", icon: "./icons/cordova.svg" },

            { name: "Xamarin", icon: "./icons/xamarin.svg" }
        ],
        frontend: [
            { name: "Angular", icon: "./icons/angular.svg" },
            { name: "React", icon: "./icons/react.svg" },
            { name: "Vue JS", icon: "./icons/vue.svg" },
            { name: "Svelte", icon: "./icons/svelte.png" },

            { name: "JavaScript", icon: "./icons/javascript.png" },
            { name: "TypeScript", icon: "./icons/typescript.png" },

            { name: "HTML", icon: "./icons/html.svg" },
            { name: "CSS", icon: "./icons/css.svg" },
            { name: "SASS", icon: "./icons/sass.png" },
            { name: "Tailwind CSS", icon: "./icons/tailwind.svg" },
            { name: "Bootstrap", icon: "./icons/bootstrap.png" },

            { name: "Next JS", icon: "./icons/next.svg" },
            { name: "Nuxt JS", icon: "./icons/nuxt.png" },
            { name: "Astro", icon: "./icons/astro.png" },
            { name: "Vite", icon: "./icons/vite.svg" },

            { name: "Redux", icon: "./icons/redux.svg" },
            { name: "Zustand", icon: "./icons/zustand.png" }

        ],
        backend: [
            { name: "PHP", icon: "./icons/php.svg" },
            { name: "Laravel", icon: "./icons/laravel.png" },

            { name: "Java", icon: "./icons/java.svg" },
            { name: "Spring Boot", icon: "./icons/springboot.png" },

            { name: ".NET", icon: "./icons/dotnet.svg" },

            { name: "Python", icon: "./icons/python.svg" },
            { name: "Django", icon: "./icons/django.svg" },
            { name: "Flask", icon: "./icons/flask.png" },

            { name: "Node JS", icon: "./icons/node.svg" },
            { name: "Express.js", icon: "./icons/express.png" },
            { name: "Fastify", icon: "./icons/fastify.png" },
            { name: "NestJS", icon: "./icons/nestjs.png" },

            { name: "GO", icon: "./icons/go.svg" },
            { name: "Fiber", icon: "./icons/fiber.png" },

            { name: "Ruby on Rails", icon: "./icons/ruby.png" }
        ],
        database: [
            { name: "MySQL", icon: "./icons/my-sql.png" },
            { name: "PostgreSQL", icon: "./icons/postgre-sql.png" },
            { name: "MS SQL Server", icon: "./icons/ms-sql.png" },
            { name: "Azure SQL DB", icon: "./icons/azure-sql.png" },
            { name: "SQLite", icon: "./icons/sqlite.png" },

            { name: "Oracle DB", icon: "./icons/oracle.png" },

            { name: "MongoDB", icon: "./icons/mongodb.svg" },
            { name: "CouchDB", icon: "./icons/couchdb.svg" },

            { name: "Cassandra", icon: "./icons/cassandra.png" },

            { name: "DynamoDB", icon: "./icons/dynamodb.svg" },

            { name: "Redis", icon: "./icons/redis.svg" },

            { name: "Google Firestore", icon: "./icons/firestore.png" },
            { name: "Firebase Realtime DB", icon: "./icons/firebase.svg" },

            { name: "Amazon RDS", icon: "./icons/rds.svg" }
        ],
        devops: [
            { name: "Docker", icon: "./icons/docker.svg" },
            { name: "Kubernetes", icon: "./icons/kubernetes.svg" },
            { name: "Terraform", icon: "./icons/terraform.svg" },

            { name: "Google Cloud", icon: "./icons/google-cloud.svg" },
            { name: "AWS", icon: "./icons/aws.svg" },
            { name: "Azure", icon: "./icons/azure.svg" },
            { name: "Digital Ocean", icon: "./icons/ocean.svg" },

            { name: "Firebase", icon: "./icons/firebase.svg" }

        ],
        payment: [
            { name: "PayPal", icon: "./icons/paypal.svg" },
            { name: "Stripe", icon: "./icons/stripe.svg" },
            { name: "Apple Pay", icon: "./icons/apple.svg" },
            { name: "Google Pay", icon: "./icons/google-pay.svg" },
            { name: "Amazon Pay", icon: "./icons/amazon-pay.png" },

            { name: "Safepay", icon: "./icons/safe-pay.png" },
            { name: "XPay", icon: "./icons/x-pay.png" },
            { name: "Telr", icon: "./icons/telr.png" },
            { name: "CASHU", icon: "./icons/cashu.png" },

            { name: "Crypto", icon: "./icons/crypto.png" }
        ]
    };

    return (
        <section className="p-6 md:p-12">
            <div className="container px-2 mx-auto md:px-4">
                <div className="mb-6 text-center md:mb-8">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Empowering Solutions with the Latest Technologies
                    </h2>
                    <p className="mt-3 text-gray-300 md:mt-4">
                        <Link to="/">{COMPANY_NAME}</Link> leverages advanced technologies to deliver innovative and scalable solutions tailored to your business needs.
                    </p>
                </div>

                <ul className="flex justify-center mb-6 overflow-x-auto bg-gray-900 rounded-lg whitespace-nowrap scrollbar-hide md:justify-center md:mb-8 h-[42px]">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="flex-shrink-0">
                            <button
                                className={`relative px-3 py-2 text-sm font-semibold min-w-[100px] md:px-4 md:text-base button-border 
                                    ${activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200 hover:scale-105"}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                    {technologies[activeTab].map((tech) => (
                        <div
                            key={tech.name}
                            className="p-4 text-center transition-shadow bg-gray-900 rounded-lg shadow-md hover:shadow-lg md:p-6"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-10 h-10 mx-auto mb-3 transition-transform duration-300 ease-in-out hover:scale-125 md:w-12 md:h-12 md:mb-4"
                            />
                            <p className="text-sm font-medium text-gray-300 md:text-base">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
