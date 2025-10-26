// App.jsx
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useRef } from "react";

const App = () => {
  const projectsRef = useRef(null);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <Navbar />
      <div className="w-full relative bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        />

        <div className="relative z-20">
          <Home projectsRef={projectsRef} />
          <About />
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
