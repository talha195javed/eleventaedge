import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsTelecom = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Powering the Telecom Industry with Smart Digital Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Telecom Technology"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> delivers advanced web and mobile solutions for the telecom industry, improving customer engagement, billing, and service management.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our telecom platforms include AI-powered customer support, real-time network analytics, self-service portals, and automated billing systems, ensuring seamless operations.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **custom telecom CRM** or a **scalable customer self-service app**, we provide cutting-edge solutions that enhance connectivity and user satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsTelecom;
