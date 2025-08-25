import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../../utils/constants/company-details';

const DetailsEducation = () => {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container px-8 mx-auto">
                <h2 className="mb-8 text-4xl font-bold text-center text-white">
                    Revolutionizing Education with Digital Learning Solutions
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-center">
                    <div className="flex justify-center w-full mb-6 lg:w-1/3 lg:mb-0">
                        <img
                            src="/images/industries-details/web-mobile.png"
                            alt="Education Technology"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 lg:pl-8">
                        <p className="mb-4 text-lg text-gray-200">
                            <Link to="/" className="font-semibold text-white">{COMPANY_NAME}</Link> empowers the education sector with cutting-edge web and mobile solutions, enhancing online learning, virtual classrooms, and student engagement.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Our platforms support e-learning portals, AI-driven assessments, real-time student progress tracking, and interactive virtual classrooms, creating seamless digital education experiences.
                        </p>
                        <p className="mb-4 text-lg text-gray-300">
                            Whether you need a **learning management system (LMS)** or an **AI-powered educational app**, we provide scalable and innovative solutions that transform the education industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsEducation;
