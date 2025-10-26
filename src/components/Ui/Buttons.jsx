const Buttons = ({
  title1,
  title2,
  link1 = "#",
  link2 = "#",
  isDownload = false,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 flex-wrap">
      {/* Button 1 */}
      <a
        href={link1}
        target={isDownload ? "_self" : "_blank"}
        rel="noopener noreferrer"
        download={isDownload || undefined}
      >
        <button className="cursor-pointer whitespace-nowrap px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-500/25 border border-white/20 rounded-xl hover:bg-slate-800 transition-all">
          {title1}
        </button>
      </a>

      {/* Button 2 */}
      <a
        href={link2}
        target={isDownload ? "_self" : "_blank"}
        rel="noopener noreferrer"
        download={isDownload || undefined}
      >
        <button className="cursor-pointer whitespace-nowrap px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-500/25 border border-white/20 rounded-xl hover:bg-slate-800 transition-all">
          {title2}
        </button>
      </a>
    </div>
  );
};

export default Buttons;
