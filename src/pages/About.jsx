import Skills from "../components/Sections/About/Skills.jsx";
import StringAnimation from "../components/Animations/StringAnimation.jsx";
import ScrollFloat from "../components/Animations/ScrollFloat.jsx";

const About = () => {
  return (
    <div className="px-5 min-h-screen sm:px-28 ">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=70%"
        stagger={0.03}
        textClassName="text-gray-50 whitespace-normal sm:whitespace-nowrap text-4xl sm:text-5xl md:text-6xl font-[alice]"
      >
        Skill & Expertise
      </ScrollFloat>

      {/* <h1 className="text-gray-50 text-base sm:text-2xl md:text-3xl whitespace-normal sm:whitespace-nowrap font-[alice] ">
        My technical Skills, interests, and passions
      </h1> */}

      <Skills />

      <div className="hidden sm:flex">
        <StringAnimation />
      </div>
    </div>
  );
};

export default About;
