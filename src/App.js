import React, {useEffect} from "react";
import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Brands from "./components/Brands";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { toast } from "react-toastify";


// import components

const App = () => {
  useEffect(() => { 
    toast('🎇 Happy Diwali 🎇', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress:undefined ,
      theme: "light",
      });
    
  }, [])
  return (
    <div>
      <div style={{ height: "2000px" }}>
        <Header />
        <Hero />
        <Brands />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        {/* <Testimonials /> */}
        <ContactUs />
        <BackToTopBtn />
        <Footer />
      </div>
    </div>
  );
};

export default App;
