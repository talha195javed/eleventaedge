import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsHealthcare = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Transforming Healthcare with Digital Innovation
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Healthcare Solutions"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> delivers innovative healthcare solutions that streamline patient management, telemedicine, and hospital operations.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our healthcare applications offer online consultations, AI-driven diagnostics, appointment scheduling, and secure medical record management, improving patient care and operational efficiency.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **telehealth platform** or an **EHR management system**, we provide scalable, secure, and user-friendly solutions for the healthcare industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsHealthcare;
