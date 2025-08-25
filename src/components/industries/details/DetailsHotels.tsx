import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsHotels = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Elevate Hotel & Hospitality Experiences with Digital Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Hotel Technology"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> provides advanced web and mobile solutions for the hospitality industry, enhancing guest experiences and operational efficiency.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our hotel management platforms include online booking, automated check-ins, AI-driven guest personalization, and real-time service requests, ensuring a seamless customer journey.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **custom hotel booking system** or an **end-to-end property management solution**, we deliver tailored digital solutions that enhance guest satisfaction and revenue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsHotels;
