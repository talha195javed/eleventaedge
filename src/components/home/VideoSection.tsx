import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [hasPlayed, setHasPlayed] = useState(false); // State to track if the video has started

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && iframeRef.current && !hasPlayed) {
                        // Replace src to trigger autoplay only the first time the iframe enters the viewport
                        iframeRef.current.src = "https://www.youtube.com/embed/Bmc30vPxW6w?autoplay=1&mute=1&rel=0&loop=1&playlist=Bmc30vPxW6w";
                        setHasPlayed(true); // Set state to true so it won't reset the src again
                    }
                });
            },
            { threshold: 0.5 } // Adjust as needed
        );

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
    }, [hasPlayed]); // Dependency on hasPlayed to prevent resetting the src

    return (
        <div className="py-10">
            <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">Experience the Power of AI & Tech</h2>
            <div className="container max-w-full px-8 mx-auto">
                <div className="w-full overflow-hidden bg-black shadow-lg rounded-xl">
                    <iframe
                        ref={iframeRef}
                        width="100%"
                        height="500px"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="rounded-t-xl"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
