import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsBanking = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Elevate Banking & Finance with Secure Digital Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Banking Solutions"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> offers innovative banking and financial technology solutions. Our secure web and mobile applications enhance online banking, payment processing, fraud detection, and customer management.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            We build robust financial platforms with AI-driven analytics, real-time transaction monitoring, and user-friendly digital wallets, ensuring seamless financial operations and customer satisfaction.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **custom banking app** or a **secure financial management platform**, we deliver tailored solutions that improve efficiency, security, and digital transformation in the financial sector.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanking;
