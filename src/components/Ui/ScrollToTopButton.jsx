import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTopButton = () => {
  const buttonRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.set(button, {
      autoAlpha: 0,
      y: 24,
      pointerEvents: "none",
    });

    const trigger = ScrollTrigger.create({
      start: 220,
      onEnter: () => {
        gsap.to(button, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          pointerEvents: "auto",
        });
      },
      onLeaveBack: () => {
        gsap.to(button, {
          autoAlpha: 0,
          y: 24,
          duration: 0.25,
          ease: "power3.in",
          pointerEvents: "none",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleScrollTop = () => {
    if (!lenis) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    lenis.scrollTo(0, {
      duration: 1.2,
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleScrollTop}
      aria-label="Go to top"
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-red-400/35 hover:bg-red-500/10 sm:bottom-8 sm:right-8"
    >
      <ArrowUp className="size-5" />
    </button>
  );
};

export default ScrollToTopButton;
