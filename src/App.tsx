import AboutMe from "./Components/AboutMe";
import Book from "./Components/Book";
import CasosDeExito from "./Components/CasosDeExito";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Navbar from "./Components/NavBar";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-primary font-opensans">
      <Navbar />
      <Landing />
      <AboutMe />
      <Services />
      <CasosDeExito />
      <Book />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
