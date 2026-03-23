import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Buttons = ({
  title1,
  title2,
  link1 = "#",
  link2 = "#",
  isDownload = false,
}) => {
  const lenis = useLenis();

  const handleSmoothScroll = (event, target) => {
    if (!target?.startsWith("#")) return;

    event.preventDefault();

    const section = document.querySelector(target);
    if (!section) return;

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
    const scrollOffset = -(navbarHeight * 0.25);

    if (!lenis) {
      const targetTop =
        section.getBoundingClientRect().top + window.scrollY + scrollOffset;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    lenis?.scrollTo(section, {
      offset: scrollOffset,
      duration: 1.2,
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  const renderButton = (title, link) => {
    const isHashLink = link?.startsWith("#");

    if (isHashLink) {
      return (
        <button
          type="button"
          onClick={(event) => handleSmoothScroll(event, link)}
          className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-[14px] cursor-pointer whitespace-nowrap bg-white/10 border-2 border-white/20 backdrop-blur-3xl hover:bg-white/15 rounded-lg"
        >
          {title}
        </button>
      );
    }

    return (
      <a
        href={link}
        target={isDownload ? "_self" : "_blank"}
        rel="noopener noreferrer"
        download={isDownload || undefined}
      >
        <button
          type="button"
          className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-[14px] cursor-pointer whitespace-nowrap bg-white/10 border-2 border-white/20 backdrop-blur-3xl hover:bg-white/15 rounded-lg"
        >
          {title}
        </button>
      </a>
    );
  };

  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-6">
      {renderButton(title1, link1)}
      {renderButton(title2, link2)}
    </div>
  );
};

export default Buttons;
