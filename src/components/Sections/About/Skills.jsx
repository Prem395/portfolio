import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../../assets/html-min.png"; // HTML
import img2 from "../../../assets/css-min.png"; // CSS
import img3 from "../../../assets/js-min.png"; // JavaScript
import img4 from "../../../assets/React-icon.svg.png"; // React
import img5 from "../../../assets/tailwind.png"; // Tailwind
import img6 from "../../../assets/gsap.png"; // GSAP
import img7 from "../../../assets/github-min.png"; // GitHub
import img8 from "../../../assets/Git.png"; // Git icon

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      gsap.from(container.querySelectorAll(".icon-item"), {
        y: 50,
        opacity: 0,
        duration: 3,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",

          toggleActions: "play none none reverse",

          scrub: true,
        },
      });

      // Hover scaling (best handled via GSAP context)
      container.querySelectorAll(".icon-item").forEach((item) => {
        item.addEventListener("mouseenter", () =>
          gsap.to(item, { scale: 1.1, duration: 0.2 })
        );
        item.addEventListener("mouseleave", () =>
          gsap.to(item, { scale: 1, duration: 0.2 })
        );
      });
    },
    { scope: containerRef } // ✅ CORRECT way to define scope
  );

  const vsCodePlaceholder =
    "https://imgs.search.brave.com/F6CKxVql7XLyS-SyTuQEd51tu7r3LKIy-bBJp2haGqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS92aXN1YWwt/c3R1ZGlvLWNvZGUt/aWNvbi5wbmc";

  return (
    <div className="text-gray-50 mt-5 skills-container" ref={containerRef}>
      {/* Development Section */}
      <h3 className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg border-2 border-white rounded-xl w-fit font-[Merriweather] font-bold tracking-wider">
        Development
      </h3>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-6">
        {[
          { img: img1, alt: "HTML" },
          { img: img2, alt: "CSS" },
          { img: img3, alt: "JavaScript" },
          { img: img4, alt: "React" },
          { img: img5, alt: "Tailwind" },
          { img: img6, alt: "GSAP" },
        ].map(({ img, alt }, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 icon-item bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <img
              src={img}
              alt={alt}
              className="w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Workflow & Tools Section */}
      <h3 className="mt-10 px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg border-2 border-white rounded-xl w-fit font-[Merriweather] font-bold tracking-wider">
        Workflow & Tools
      </h3>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-6">
        {[
          { img: img7, alt: "GitHub" },
          { img: img8, alt: "Git" },
          { img: vsCodePlaceholder, alt: "VSCode" },
        ].map(({ img, alt }, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 icon-item bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <img
              src={img}
              alt={alt}
              className="w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
