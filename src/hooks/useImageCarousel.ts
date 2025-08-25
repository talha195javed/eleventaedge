import { useState, useEffect } from "react";

const useImageCarousel = (images: string[], intervalTime = 4000) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentImage(images[index]);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images, intervalTime]);

    const nextImage = images[(images.indexOf(currentImage) + 1) % images.length];

    return { currentImage, nextImage };
};

export default useImageCarousel;
