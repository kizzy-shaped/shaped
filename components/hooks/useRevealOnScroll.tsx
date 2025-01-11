import { useEffect, useState } from 'react';

interface UseRevealOnScrollOptions {
  threshold?: number; // The percentage of the element's visibility to trigger the reveal (0 to 1)
  offset?: number; // Optional offset from the top of the viewport
}

export const useRevealOnScroll = ({
  threshold = 0.5, // Default to 50% visibility before triggering
  offset = 0, // Default to no offset
}: UseRevealOnScrollOptions) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`[data-reveal-on-scroll]`) as HTMLElement;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on the element's position relative to the viewport
      const isInViewport = rect.top + offset < windowHeight * threshold;
      setIsVisible(isInViewport);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the element is already in the viewport on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, threshold]);

  return isVisible;
};
