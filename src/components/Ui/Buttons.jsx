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
        <button className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-[14px] cursor-pointer whitespace-nowrap bg-white/10 border-2 border-white/20 backdrop-blur-3xl hover:bg-white/15  rounded-lg ">
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
        <button className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-[14px] cursor-pointer whitespace-nowrap bg-white/10 border-2 border-white/20 backdrop-blur-3xl  rounded-lg hover:bg-white/15 ">
          {title2}
        </button>
      </a>
    </div>
  );
};

export default Buttons;
