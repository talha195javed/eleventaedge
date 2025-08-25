import ContactSection from "../components/shared/ContactSection";

const Contact: React.FC = () => {
    return (
        <div
            className="relative pt-24" // Add `relative` for positioning the overlay
            style={{
                backgroundImage: 'url("images/join-us-5.webp")', // Add your image URL here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Optional, for a parallax effect
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50" // Adjust opacity as needed
                aria-hidden="true" // Hide from screen readers
            />

            {/* Content */}
            <div className="relative z-10"> {/* Ensure content is above the overlay */}
                <ContactSection />
            </div>
        </div>
    );
}

export default Contact;