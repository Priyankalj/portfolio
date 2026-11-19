import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative text-ink min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-drift absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="animate-float-slow absolute bottom-[10%] left-[-5%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
