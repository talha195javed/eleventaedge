import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsAutomotive = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Drive Innovation in the Automotive Industry with Web & Mobile Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Automotive Solutions"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> empowers the automotive industry with state-of-the-art digital solutions. Our web and mobile applications streamline vehicle sales, inventory management, customer engagement, and after-sales services.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            We develop feature-rich automotive platforms that include online car showrooms, AI-driven recommendations, real-time vehicle tracking, and seamless booking systems, transforming how businesses connect with customers.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            From dealership management software to ride-hailing apps and fleet monitoring solutions, our digital innovations help automotive businesses scale, enhance efficiency, and maximize profits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAutomotive;
