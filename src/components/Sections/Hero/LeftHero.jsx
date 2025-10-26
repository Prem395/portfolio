import IntroText from "../Hero/IntroText";
import Buttons from "../../Ui/Buttons";
const LeftHero = () => {
  return (
    <div className="text-gray-50 font-[poppins] flex flex-col   gap-3   ">
      <IntroText />
      <Buttons title1="View Projects" title2="Download CV" link1="#projects" />
    </div>
  );
};

export default LeftHero;
