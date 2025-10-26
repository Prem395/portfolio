import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IntroText = () => {
  useGSAP(() => {
    gsap.from(".intro-line", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".intro-line",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="font-[alice] tracking-wide text-white text-center px-4">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1]">
          <span className="intro-line block">Hi!</span>
          <span className="intro-line block">
            I’m <span className="text-white/40">Prem</span>
          </span>
        </h1>

        <p className="intro-line font-body text-2xl sm:text-4xl md:text-[38px] leading-snug max-w-[90%] sm:max-w-3xl md:max-w-4xl text-white/80">
          A Frontend Developer focused <span className="text-red-400">on</span>{" "}
          building smooth, animated, and impactful websites. I turn design
          concepts <span className="text-red-400">into</span> pixel-perfect,
          performant UIs.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
