// Animate css
// import "animate.css";
import EventHandler from "./events";

interface IAnimationFrame {
  initialState: Keyframe;
  finalState: Keyframe;
  options?: KeyframeAnimationOptions; // Ensure this is optional if not all frames have options
}

export default class AnimationHandler {
  currentItemIndex = 0;
  activePgSection = "";

  animate = (element: HTMLDivElement, animationFrame: IAnimationFrame) => {
    element.animate(
      [animationFrame.initialState, animationFrame.finalState],
      animationFrame.options || {} // Default to an empty object if no options are provided
    );
  };

  delay = (time: number, fnToRn: Function) => {
    setTimeout(fnToRn, time);
  };

  at = (time: number, fnToRn: Function) => {
    setInterval(fnToRn, time);
  };

  showItem = (index: number, slider: HTMLDivElement) => {
    let items = Array.from(slider.children) as HTMLElement[];
    let itemWidth = items[0].offsetWidth;

    let offset = -index * itemWidth;
    slider.style.transform = "translateX(" + offset + "px)";
  };

  nextItem = (slider: HTMLDivElement) => {
    let items = slider.children;

    this.currentItemIndex++;
    if (this.currentItemIndex >= items.length - 2) {
      this.currentItemIndex = 0;
    }
    this.showItem(this.currentItemIndex, slider);
  };

  prevItem = (slider: HTMLDivElement) => {
    let items = slider.children;

    this.currentItemIndex--;
    if (this.currentItemIndex < 0) {
      this.currentItemIndex = items.length - 3;
    }
    this.showItem(this.currentItemIndex, slider);
  };

  useIntersectionObserver = (
    who: HTMLElement | HTMLDivElement[],
    classToAdd: string
  ) => {
    let options = {
      threshold: 0.1,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Adding the default class in order for animate css to function
        entry.target.classList.add("animate__animated");

        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToAdd);
        }
      });
    }, options);

    // if the target element is an array of elements,
    // we wanna show them one by one a second after the preceding element
    if ((who as HTMLDivElement[])?.length != undefined) {
      const { delay } = this;

      let parent = Object.values(who);
      parent.forEach((child) => {
        let index = parent.indexOf(child);
        let time = index * 1000;

        delay(time, () => {
          observer.observe(child);
        });
      });
    }
    // if the target element is just an element,
    // we wanna show it without any delay
    else {
      observer.observe(who as HTMLDivElement);
    }
  };

  useWindowScroll = (
    who: HTMLDivElement,
    classToAdd: string,
    classToRemove: string
  ) => {
    // Adding the default class in order for animate css to function
    if (who && who?.classList) {

      let revealPoint = 50;

      function reveal() {
        let revealTop = who.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - revealPoint) {
          who.classList.remove(classToRemove);
          who.classList.add(classToAdd);
        } else {
          who.classList.remove(classToAdd);
          who.classList.add(classToRemove);
        }
        console.log({who: who?.classList[who?.classList?.length-1]})
      }

      window.addEventListener("scroll", reveal);
    }
  };

  revealOnScroll = (
    who: HTMLDivElement,
    classToAdd: string,
    leavingClass: string
  ) => {
    const { useIntersectionObserver, useWindowScroll } = this;
    // If there's a leaving class to add when the element is leaving the viewport,
    // we want to use the window scroll event to reveal the element else we want
    // to use the JavaScript intersection observer
    if (leavingClass) useWindowScroll(who, classToAdd, leavingClass);
    else useIntersectionObserver(who, classToAdd);
  };

  highlightNavsOnScroll = (setter: Function) => {
    const { onScroll } = new EventHandler();
    // Getting all the sections in the page
    const sections = [...document.querySelectorAll(".section")];

    onScroll(() => {
      sections.forEach((section) => {
        let revealPoint = 50;
        let revealTop = section.getBoundingClientRect().top;

        if (revealTop < window.innerHeight - revealPoint) {
          // Setting the active page section to the section id
          this.activePgSection = section.id;
          if (section.id == "partners") this.activePgSection = "";
          setter(this.activePgSection);
        }
      });
    });
  };

  // Viewport checker
  is = (limit: number, viewport: number) => {
    let match = window.matchMedia(`(${limit}-width: ${viewport}px)`).matches;
    let height = window.innerHeight;
    return match;
  };
}
