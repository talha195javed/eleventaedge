import InsightsIntroVideo from "../../../assets/videos/insights-intro.mp4";

const IntroNotListed = () => {
    return (
        <>
            <div className="flex flex-col h-full pt-8"> {/* Add h-full to ensure the div takes full height */}
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Can't find your industry listed? No problem!
                </h2>
                <p className="mb-4 text-xl text-gray-200">
                    Whether you're starting a new project or need help with an existing one, our team is here to support you. We specialize in providing tailored solutions for unique and niche industries.
                </p>
                <p className="mb-4 text-xl text-gray-300">
                    Fill out the form below, and our experts will get back to you within <span className="font-semibold">30 minutes</span> to discuss how we can meet your specific needs.
                </p>
                <p className="mb-8 text-xl text-gray-350"> {/* Added mb-8 for spacing */}
                    Your challenges are unique, and so are our solutions. Let’s work together to achieve your goals!
                </p>

                {/* Video at the Bottom */}
                <div className="mt-auto"> {/* Use mt-auto to push the video to the bottom */}
                    <video autoPlay muted loop className="w-full max-w-3xl rounded-lg shadow-lg">
                        <source src={InsightsIntroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}

export default IntroNotListed;