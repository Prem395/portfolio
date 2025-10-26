import ScrollFloat from "../components/Animations/ScrollFloat";
import MyProjects from "../components/Sections/MyProjects/MyProejcts";

const Projects = () => {
  const Projects = [
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
    {
      image: "image.png",
      title: "RepairMate",
      subtitle: "An AI-Powered Device Repair Assistant",
      handle: "repairmate",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://repair-mate-jsws.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col gap-6  px-5  sm:px-28 font-[alice] -mt-[180px] sm:-mt-5 pb-5 sm:pb-2"
    >
      <div className="mb-2 sm:mb-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=70%"
          stagger={0.03}
          textClassName="text-gray-50 text-4xl sm:text-6xl  whitespace-normal sm:whitespace-nowrap font-[alice]"
        >
          Projects & Demo
        </ScrollFloat>
      </div>

      <MyProjects className="font-[alice]" items={Projects} />
    </div>
  );
};

export default Projects;
