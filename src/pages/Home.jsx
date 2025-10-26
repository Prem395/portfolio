import HeroSection from "../components/Sections/Hero/HeroSection";
import StringAnimation from "../components/Animations/StringAnimation";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center w-full p-4 sm:px-28 sm:pt-16 sm:pb-8">
      <HeroSection />
      {/* StringAnimation only on sm+ screens */}
      <div className="hidden sm:flex w-full">
        <StringAnimation />
      </div>
    </div>
  );
};

export default Home;
