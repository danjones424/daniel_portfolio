import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
