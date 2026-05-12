import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Qualification from "./components/Qualification/Qualification";
import Internship from "./components/Internship/Internship";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Qualification />
      <TechnicalSkills />
      <Internship />
      <Contact />
      <Footer />
    </>
  );
}

export default App;