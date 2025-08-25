import React from "react";

type VideoModalProps = {
    videoUrl: string;
    onClose: () => void;
};

const convertToEmbedUrl = (url: string): string => {
    // Check for standard YouTube watch URL
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }

    // Check for youtu.be short URL
    const shortLinkMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortLinkMatch) {
        return `https://www.youtube.com/embed/${shortLinkMatch[1]}`;
    }

    // If already an embed URL or non-YouTube, return as is
    return url;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
    const embedUrl = isYouTube ? convertToEmbedUrl(videoUrl) : videoUrl;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl p-8 overflow-hidden rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 text-4xl text-gray-300 right-4 hover:text-red-500"
                >
                    &times;
                </button>

                {isYouTube ? (
                    <iframe
                        className="w-full h-96"
                        src={embedUrl}
                        title="Video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <video className="w-full bg-black h-96" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default VideoModal;
