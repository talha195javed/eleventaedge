import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../utils/constants/company-details";

const Footer = () => {
    return (
        <footer className="relative z-10 py-6 text-white bg-gray-800">
            <div className="container px-8 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Footer Section 1 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold"><Link to="/">{COMPANY_NAME}</Link></h4>
                        <p className="mb-4 text-lg">Al Futtaim Office Tower Day to Day building</p>
                        <p className="mb-4 text-lg">1st floor - Office 102 SmartGlobal AI Solutions</p>
                        <p className="mb-4 text-lg">Phone: +971 50 440 6565</p>
                        <p className="text-lg">
                            Email: <a href="mailto:team@smartglobalhub.com" className="text-blue-400">team@smartglobalhub.com</a>
                        </p>
                    </div>

                    {/* Footer Section 2 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Legal Docs</h4>
                        <ul>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Footer Section 3 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Our Services</h4>
                        <ul>
                            <li><Link to="/services#ai" className="text-lg text-gray-400 hover:text-white">AI & ML</Link></li>
                            <li><Link to="/services#mobile" className="text-lg text-gray-400 hover:text-white">Mobile App</Link></li>
                            <li><Link to="/services#web" className="text-lg text-gray-400 hover:text-white">Web Development</Link></li>
                            <li><Link to="/services#software" className="text-lg text-gray-400 hover:text-white">Custom Software</Link></li>
                            <li><Link to="/services#cloud" className="text-lg text-gray-400 hover:text-white">Cloud Integration</Link></li>
                            <li><Link to="/services#security" className="text-lg text-gray-400 hover:text-white">Cybersecurity Services</Link></li>
                        </ul>
                    </div>

                    {/* Footer Section 4 (Follow Us) */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
                        <div className="mb-4">
                            <p className="text-lg text-gray-400">
                                Driven by innovation, we pioneer progress and serve as trusted partners in every client's digital journey. Based in Dubai, our dedication spearheads digital transformation locally and globally.
                            </p>
                        </div>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.facebook.com/smartclassicdubai/" className="text-gray-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/smartclassicdubai/" className="text-gray-400 hover:text-pink-600" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://x.com/smartchub" className="text-gray-400 hover:text-red-500" target="_blank" rel="noopener noreferrer">
                                <FaTimes size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 pt-4 text-center text-white">
                <p>© {new Date().getFullYear()} <Link to="/">{COMPANY_NAME}</Link>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
