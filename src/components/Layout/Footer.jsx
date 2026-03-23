import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useLenis } from "lenis/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lenis = useLenis();

  const scrollToTop = () => {
    if (!lenis) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    lenis.scrollTo(0, { duration: 1.2 });
  };

  return (
    <footer className="px-5 pb-8 pt-4 sm:px-16 sm:pb-10">
      <div className="mx-auto w-full max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-6 text-white shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:px-8 sm:py-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-[Merriweather] text-sm uppercase tracking-[0.28em] text-white/45">
              Portfolio
            </p>
            <h2 className="mt-3 font-[alice] text-3xl leading-tight sm:text-4xl">
              Let&apos;s build clean, animated experiences for the{" "}
              <span className="text-red-400">web</span>.
            </h2>
            <p className="mt-3 max-w-xl font-[poppins] text-sm leading-7 text-white/65 sm:text-base">
              Frontend-focused work with attention to{" "}
              <span className="text-red-400">motion</span>, polish, and
              performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 font-[poppins] text-sm">
            <a
              href="#projects"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              download
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Download CV
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mt-6 flex flex-col gap-4 font-[poppins] text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Prem Rathod. Crafted with React and Tailwind.</p>

          <div className="flex items-center gap-4 text-white/80">
            <a
              href="https://linkedin.com/in/prem-rathod-2093a434a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <CiLinkedin className="size-6" />
            </a>
            <a
              href="https://github.com/Prem395"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-white"
            >
              <FaGithub className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
