import HeroSection from "../components/Sections/Hero/HeroSection";
import StringAnimation from "../components/Animations/StringAnimation";

const Home = () => {
  return (
    <section
      id="home"
      className="flex w-full snap-start flex-col justify-center overflow-hidden px-4 pt-20 pb-8 sm:px-28 sm:pt-20 sm:pb-8"
    >
      <HeroSection />
      <div className="hidden w-full md:flex md:mt-6 lg:mt-10">
        <StringAnimation />
      </div>
    </section>
  );
};

export default Home;
