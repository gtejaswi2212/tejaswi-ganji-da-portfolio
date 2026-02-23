import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsOrbit from "./components/SkillsOrbit";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";


function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-[#050509] text-white ">
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-transparent via-[#062a1d44] to-[#05383d33] blur-3xl" />

      <Navbar />
      <Particles />

      <main className="pt-20 overflow-x-hidden">
        <Hero />
        <SkillsOrbit />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
