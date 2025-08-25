import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsRealState = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                {/* Header - Full Width and Centered */}
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Transform Your Real Estate Business with Web & Mobile App Solutions
                </h2>

                {/* Content Layout */}
                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    {/* Image - Centered in Small Screens, Left in Large Screens */}
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Real Estate Development"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> is a leading real estate technology solutions provider, specializing in both web and mobile app development. Our real estate applications help businesses streamline property management, buying, selling, and renting processes with seamless digital solutions.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            We craft feature-rich platforms that cater to real estate agencies, property managers, and individual buyers. From intuitive web portals for property listings to advanced mobile applications with virtual tours, mortgage calculators, and AI-driven property recommendations, our solutions redefine the way the real estate industry operates.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our custom-built web and mobile applications ensure effortless property searches, real-time chat support, secure online transactions, and appointment scheduling. Whether you need an **on-demand real estate app** or a **comprehensive property management system**, we deliver cutting-edge solutions that drive engagement, enhance productivity, and maximize revenue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsRealState;
