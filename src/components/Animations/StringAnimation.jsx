import gsap from "gsap";
import React, { useRef, useState } from "react";

const StringAnimation = () => {
  const svgRef = useRef(null);
  const [path] = useState("M 10 100 Q 690 100 1200 100");

  const handleMouseMove = (e) => {
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pathEl = svg.querySelector("path");
    if (!pathEl) return;

    gsap.to(pathEl, {
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
      attr: { d: `M 10 100 Q ${x} ${y} 1200 100` },
    });
  };

  const handleMouseLeave = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const pathEl = svg.querySelector("path");
    if (!pathEl) return;

    gsap.to(pathEl, {
      duration: 1.2,
      ease: "elastic.out(1,0.3)",
      attr: { d: "M 10 100 Q 690 100 1200 100" },
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // hidden on small screens (mobile)
      className="hidden md:flex justify-center items-center w-full overflow-hidden"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-[1200px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} stroke="white" fill="transparent" strokeWidth="2.5" />
      </svg>
    </div>
  );
};

export default StringAnimation;
