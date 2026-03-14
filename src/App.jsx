import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FeaturedStealDeals from "./components/FeaturedStealdeals";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FeaturedStealDeals/>
      <Contact/>
    </div>
  );
}