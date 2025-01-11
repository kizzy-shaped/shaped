import { useEffect, useState } from 'react';

interface UseRevealOnScrollOptions {
  threshold?: number; // The percentage of the element's visibility to trigger the reveal (0 to 1)
  offset?: number; // Optional offset from the top of the viewport
  rootMargin?: string; // Optional margin around the root (viewport)
}

interface ElementVisibility {
  [key: string]: boolean; // Keeps track of visibility for each element by its ID or ref
}

export const useMultiRevealOnScroll = (
  options: UseRevealOnScrollOptions = {}
): ElementVisibility => {
  const { threshold = 0.5, offset = 0, rootMargin = '0px' } = options;
  const [elementsVisible, setElementsVisible] = useState<ElementVisibility>({});

  useEffect(() => {
    // IntersectionObserver callback
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const visibilityState: ElementVisibility = {};
      entries.forEach((entry) => {
        // Store visibility of each element using its ID (or any unique identifier)
        visibilityState[entry.target.id || 'default'] = entry.isIntersecting;
      });
      setElementsVisible(visibilityState);
    };

    // Create a new IntersectionObserver with options
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    // Query all elements with a `data-reveal-on-scroll` attribute
    const elements = document.querySelectorAll('[data-reveal-on-scroll]') as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [threshold, offset, rootMargin]);

  return elementsVisible;
};
