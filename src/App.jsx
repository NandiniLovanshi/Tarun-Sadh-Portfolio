// import About from "./components/About"
// import Certificate from "./components/Certificate"
// import Contact from "./components/Contact"
// import Experience from "./components/Experience"
// import Home from "./components/Home"
// import Navbar from "./components/Navbar"
// import Services from "./components/Services"
// import Footer from "./components/Footer"


// function App(){
//   return(
//     <>
//     <Navbar />
//     <Home />
//     <About />
//     <Experience />
//     <Certificate />
//     <Services />
//     <Contact />
//     <Footer />
    
//     </>
//   )
// }
// export default App
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // Animation speed
      once: true,       // Sirf ek baar chalegi
      offset: 100,      // Scroll hone ke baad animation start
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Certificate />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;