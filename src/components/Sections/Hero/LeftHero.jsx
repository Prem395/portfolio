import IntroText from "../Hero/IntroText";
import Buttons from "../../Ui/Buttons";
const LeftHero = () => {
  return (
    <div className="flex flex-col  font-[poppins] text-gray-50">
      <IntroText />
      <Buttons
        title1="View Projects"
        title2="Download CV"
        link1="#projects"
        link2="/Resume.pdf"
      />
    </div>
  );
};

export default LeftHero;
