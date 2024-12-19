import { useState, useEffect } from "react";

export const useCarousel = (items: any[], interval: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [items, interval]);

    return currentIndex;
};

