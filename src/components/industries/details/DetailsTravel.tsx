import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsTravel = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Transforming the Travel Industry with Smart Digital Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Travel Technology"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> empowers the travel industry with innovative web and mobile solutions, enhancing booking experiences, itinerary management, and customer engagement.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our platforms feature AI-driven travel recommendations, real-time booking systems, automated check-ins, and seamless payment integration, making travel planning effortless.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **custom travel booking app** or a **comprehensive tour management platform**, we deliver smart solutions that enhance customer experiences and boost business growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsTravel;
