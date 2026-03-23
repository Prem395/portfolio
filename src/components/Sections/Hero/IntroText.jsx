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
    <div className="px-4 text-center text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:gap-5">
        <HoverButton />

        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-[alice] text-[54px] font-semibold leading-[0.95] tracking-tight sm:text-[68px] md:text-[82px] lg:text-[88px]">
            <span className="intro-line block text-white/92">Crafting</span>
            <span className="intro-line block bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-transparent">
              Modern Web
            </span>
          </h1>

          <h2 className="intro-line whitespace-nowrap font-[poppins] text-lg font-medium tracking-[0.14em] text-white/82 sm:text-xl md:text-[28px]">
            Prem Rathod <span className="text-red-500">|</span>{" "}
            <span className="text-white/58">Frontend Developer & UI Builder</span>
          </h2>
        </div>

        <p className="intro-line max-w-[360px] font-[poppins] text-base leading-7 text-white/74 sm:max-w-2xl sm:text-lg md:max-w-3xl md:text-[21px] md:leading-9">
          I craft <span className="text-red-400">clean</span>, responsive, and
          motion-rich websites that feel polished from the very first scroll.
        </p>

        <p className="intro-line max-w-[360px] font-[poppins] text-sm leading-6 text-white/45 sm:max-w-xl sm:text-[15px] md:max-w-2xl md:text-base">
          Focused on turning ideas into modern interfaces with strong visual
          detail, smooth interactions, and solid frontend performance.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
