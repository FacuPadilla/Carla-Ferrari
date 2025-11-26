import AboutMe from "./Components/AboutMe";

import Book from "./Components/Book";
import CasosDeExito from "./Components/CasosDeExito";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Plans from "./Components/Plans";
import Testimonial from "./Components/Testimonial";
import WhatsAppButton from "./Components/WhatsAppButton";

function App() {
  return (
    <div className="w-screen relative h-screen overflow-x-hidden   font-chocoreg">
      <Landing />
      <WhatsAppButton />
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
