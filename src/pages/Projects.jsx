import ScrollFloat from "../components/Animations/ScrollFloat";
import MyProjects from "../components/Sections/MyProjects/MyProjects";
import project1 from "../../public/Project1.png";
import project2 from "../../public/Project2.png";
const Projects = () => {
  const Projects = [
    {
      image: project1,
      title: "RepairMate",
      subtitle: "Full-Stack Device Repair Management & Booking Platform ",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: project2,
      title: "Portfolio Website",
      subtitle: "A Modern Frontend Developer Portfolio",
      handle: "portfolio",
      borderColor: "#C75038",
      gradient: "linear-gradient(145deg,#E3391B,#C75038)",
      url: "https://www.premrathod.me/",
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-svh w-full snap-start flex-col justify-center gap-6 px-5 pt-20 pb-10 font-[alice] sm:px-28 sm:pt-20 sm:pb-8"
    >
      <div className="mb-2 sm:mb-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=80%"
          stagger={0.03}
          textClassName="text-gray-50 text-4xl sm:text-6xl  whitespace-normal sm:whitespace-nowrap font-[alice]"
        >
          Projects & Demo
        </ScrollFloat>
      </div>

      <MyProjects className="font-[alice]" items={Projects} />
    </section>
  );
};

export default Projects;
