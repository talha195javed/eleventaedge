import { useState, useEffect, JSX } from "react";
import { useLocation } from "react-router-dom";
import IntroNotListed from "../components/industries/introductions/IntroNotListed";
import IntroRealState from "../components/industries/introductions/IntroRealState";
import IntroTravel from "../components/industries/introductions/IntroTravel";
import IntroHotels from "../components/industries/introductions/IntroHotels";
import IntroHealthcare from "../components/industries/introductions/IntroHealthcare";
import IntroInsurance from "../components/industries/introductions/IntroInsurance";
import IntroEducation from "../components/industries/introductions/IntroEducation";
import IntroTelecom from "../components/industries/introductions/IntroTelecom";
import IntroBanking from "../components/industries/introductions/IntroBanking";
import IntroAutomotive from "../components/industries/introductions/IntroAutomotive";
import DetailsRealState from "../components/industries/details/DetailsRealState";
import DetailsTravel from "../components/industries/details/DetailsTravel";
import DetailsHotels from "../components/industries/details/DetailsHotels";
import DetailsEducation from "../components/industries/details/DetailsEducation";
import DetailsTelecom from "../components/industries/details/DetailsTelecom";
import DetailsBanking from "../components/industries/details/DetailsBanking";
import DetailsAutomotive from "../components/industries/details/DetailsAutomotive";
import RequestCallbackForm from "../components/industries/RequestCallbackForm";
import DetailsHealthcare from "../components/industries/details/DetailsHealthcare";
import DetailsInsurance from "../components/industries/details/DetailsInsurance";

// Mapping industry details in one object
const industriesData: Record<
    string,
    {
        intro: JSX.Element;
        details: JSX.Element;
        background: string;
    }
> = {
    "real-estate": {
        intro: <IntroRealState />,
        details: <DetailsRealState />,
        background: "real-estate.jpg",
    },
    "travel": {
        intro: <IntroTravel />,
        details: <DetailsTravel />,
        background: "travel.jpg",
    },
    "hotels": {
        intro: <IntroHotels />,
        details: <DetailsHotels />,
        background: "hotels.jpg",
    },
    "healthcare": {
        intro: <IntroHealthcare />,
        details: <DetailsHealthcare />,
        background: "healthcare.jpg",
    },
    "insurance": {
        intro: <IntroInsurance />,
        details: <DetailsInsurance />,
        background: "insurance.jpg",
    },
    "education": {
        intro: <IntroEducation />,
        details: <DetailsEducation />,
        background: "education.jpg",
    },
    "telecom": {
        intro: <IntroTelecom />,
        details: <DetailsTelecom />,
        background: "telecom.jpg",
    },
    "banking": {
        intro: <IntroBanking />,
        details: <DetailsBanking />,
        background: "banking.jpg",
    },
    "automotive": {
        intro: <IntroAutomotive />,
        details: <DetailsAutomotive />,
        background: "automotive.jpg",
    },
};

// Default industry if not found
const DEFAULT_INDUSTRY = "not-listed";

const Industries: React.FC = () => {
    const location = useLocation();
    const [selectedIndustry, setSelectedIndustry] = useState(DEFAULT_INDUSTRY);

    useEffect(() => {
        const industryId = location.hash.replace("#", "") || DEFAULT_INDUSTRY;
        setSelectedIndustry(industryId);
    }, [location]);

    const industry = industriesData[selectedIndustry] || {
        intro: <IntroNotListed />,
        details: null,
        background: "not-listed.jpg",
    };

    return (
        <>
            <div
                className="relative w-screen min-h-screen px-8 py-24 bg-center bg-cover"
                style={{
                    backgroundImage: `url(./images/industries-background/${industry.background})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
                    {/* Left Column - Dynamic Industry Content */}
                    <div>{industry.intro}</div>

                    {/* Right Column - Request Callback Form */}
                    <div>
                        <RequestCallbackForm />
                    </div>
                </div>
            </div>

            {/* Details Component */}
            {industry.details && <div>{industry.details}</div>}
        </>
    );
};

export default Industries;
