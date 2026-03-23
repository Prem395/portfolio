import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HoverButton from "../../Ui/HoverButton";

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
    <div className="px-2 text-center text-white sm:px-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:gap-5">
        <HoverButton />

        <div className="space-y-2 sm:space-y-4">
          <h1 className="font-[alice] text-[42px] font-semibold leading-[0.96] tracking-tight sm:text-[68px] md:text-[82px] lg:text-[88px]">
            <span className="intro-line block text-white/92">Crafting</span>
            <span className="intro-line block bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-transparent">
              Modern Web
            </span>
          </h1>

          <h2 className="intro-line px-3 font-[poppins] text-[15px] font-medium leading-7 tracking-[0.08em] text-white/82 sm:px-0 sm:text-xl md:text-[28px]">
            <span className="block sm:inline">Prem Rathod</span>
            <span className="hidden px-2 text-red-500 sm:inline">|</span>
            <span className="block text-white/58 sm:inline">
              Frontend Developer <span className="text-red-500">&</span> UI Builder
            </span>
          </h2>
        </div>

        <p className="intro-line max-w-[320px] font-[poppins] text-[15px] leading-7 text-white/74 sm:max-w-2xl sm:text-lg md:max-w-3xl md:text-[21px] md:leading-9">
          I craft <span className="text-red-400">clean</span>, responsive, and
          motion-rich websites that feel polished from the very first scroll.
        </p>

        <p className="intro-line max-w-[320px] font-[poppins] text-[13px] leading-6 text-white/45 sm:max-w-xl sm:text-[15px] md:max-w-2xl md:text-base">
          Focused on turning ideas into modern interfaces with strong visual
          detail, smooth interactions, and solid frontend performance.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
