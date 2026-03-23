import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    gsap.from(".logo", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    });

    gsap.from(".social-icon", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.15,
      delay: 0.5,
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex h-[65px] w-full items-center justify-between px-5 text-white transition-all duration-300 sm:h-[75px] sm:px-10 md:px-16 ${
        isScrolled
          ? "bg-black/30 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <h1 className="logo select-none whitespace-nowrap bg-gradient-to-r from-gray-50 to-red-100 bg-clip-text text-lg font-bold tracking-[0.08em] text-transparent sm:text-2xl md:text-3xl">
        PREM RATHOD
      </h1>

      <div className="flex gap-3 sm:gap-4 md:gap-6">
        <a
          href="https://linkedin.com/in/prem-rathod-2093a434a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className="social-icon size-5 cursor-pointer sm:size-6 md:size-7" />
        </a>

        <a
          href="https://github.com/Prem395"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon size-5 cursor-pointer sm:size-6 md:size-7" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
