import React from 'react';
import VideoSection from '../components/home/VideoSection';
import JoinUsSection from '../components/home/JoinUsSection';
import ContactSection from '../components/shared/ContactSection';
import OurMissionSection from '../components/shared/OurMissionSection';
import ServiceCardsSection from '../components/home/ServiceCardsSection';
import IntroductionSection from '../components/home/IntroductionSection';
import ChooseSection from '../components/home/ChooseSection';
import ExpertiesSection from '../components/home/ExpertiesSection';


const Home: React.FC = () => {
    return (
        <>
            {/* Introduction Section */}
            <section>
                <IntroductionSection />
            </section>

            {/* Services Section */}
            <section>
                <ServiceCardsSection />
            </section>

            {/* YouTube Video Section */}
            <section>
                <VideoSection />
            </section>

            {/* Our Expertise Section */}
            <section className="py-10">
                <ExpertiesSection />
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10">
                <ChooseSection />
            </section>

            {/* Our Mission Section*/}
            <section>
                <OurMissionSection />
            </section>

            {/* Join us Section */}
            <section>
                <JoinUsSection />
            </section>

            {/* Contact Us Section */}
            <section>
                <ContactSection />
            </section>

        </>
    );
};

export default Home;
