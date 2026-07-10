import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Cars from "./pages/Cars";

function HomePage() {
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Cars Page */}
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;