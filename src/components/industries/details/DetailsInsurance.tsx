import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsInsurance = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Digitizing the Insurance Industry with Innovative Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Insurance Technology"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> revolutionizes the insurance sector with digital platforms that automate policy management, claims processing, and customer support.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our solutions include AI-driven risk assessments, digital policy issuance, fraud detection, and seamless mobile claims processing for improved efficiency and customer satisfaction.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **custom insurance management system** or an **on-demand claims processing platform**, we provide tailored solutions to enhance trust and engagement in the industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsInsurance;
