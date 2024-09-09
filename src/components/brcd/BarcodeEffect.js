import React, { useEffect } from 'react';
import '../../styles/styles.css'; // Adjust the path as necessary

const BarcodeEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.barcode');
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top + scrollTop;
                const elementBottom = elementTop + element.offsetHeight;

                // Calculate percentage of the viewport that the element is visible
                const elementHeight = elementBottom - elementTop;
                const viewportTop = Math.max(scrollTop, elementTop);
                const viewportBottom = Math.min(scrollTop + windowHeight, elementBottom);
                const visibleHeight = viewportBottom - viewportTop;

                const visibilityPercentage = Math.max(0, Math.min(1, visibleHeight / elementHeight));

                // Calculate the scroll percentage relative to the viewport height
                const scrollPercentage = Math.max(0, Math.min(1, (scrollTop + windowHeight - elementTop) / (elementHeight + windowHeight)));

                // Adjust scrollPercentage to start at 20% and end at 80%
                const adjustedScrollPercentage = Math.max(0, Math.min(1, (scrollPercentage - 0.2) / 0.4));

                // Update background gradient based on scroll
                const gradientStart = Math.min(1, Math.max(0, adjustedScrollPercentage)); // 0% to 100%
                const gradientStyle = `linear-gradient(to right, rgba(255, 255, 255, 1) ${gradientStart * 100}%, rgba(128, 128, 128, 1) ${gradientStart * 100}%)`;

                element.style.background = gradientStyle;
                element.style.backgroundClip = 'text';
                element.style.textFillColor = 'transparent';
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it initially to apply styles based on current scroll

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // This component does not render anything
};

export default BarcodeEffect;
