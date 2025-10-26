import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
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

  return (
    <nav className="w-full fixed top-0 left-0 h-[65px] sm:h-[75px] px-5 sm:px-10 md:px-16 text-white flex justify-between items-center z-50 bg-transparent">
      {/* Logo */}
      <h1 className="text-lg sm:text-2xl md:text-3xl logo font-bold bg-gradient-to-r text-gray-50 bg-clip-text select-none whitespace-nowrap">
        PREM RATHOD
      </h1>

      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        <a
          href="https://linkedin.com/in/prem-rathod-2093a434a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className="cursor-pointer social-icon size-5 sm:size-6 md:size-7" />
        </a>

        <a
          href="https://github.com/Prem395"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer social-icon size-5 sm:size-6 md:size-7" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
