import AboutMe from "./Components/AboutMe";

import Book from "./Components/Book";
import CasosDeExito from "./Components/CasosDeExito";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Plans from "./Components/Plans";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="w-screen relative h-screen overflow-x-hidden   font-chocoreg">
      <Landing />

      <AboutMe />
      <Plans />
      <CasosDeExito />
      <Book />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
