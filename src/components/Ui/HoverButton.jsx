import GlareHover from "../Animations/GlareHover";

const HoverButton = () => {
  return (
    <div style={{ position: "relative" }}>
      <GlareHover
        glareColor="#ff8a8a"
        glareOpacity={0.16}
        glareAngle={-30}
        glareSize={170}
        transitionDuration={950}
        playOnce={false}
        className="px-1"
      >
        <span className="px-4 py-2 text-[11px] font-[poppins] font-medium uppercase tracking-[0.28em] text-white/72 sm:text-xs">
          Frontend Developer
        </span>
      </GlareHover>
    </div>
  );
};

export default HoverButton;
