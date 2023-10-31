import React, { useEffect, useRef } from "react";
import Jobs from "./Jobs";
import Employers from "./Employers";
import { useScroll, useTransform } from "framer-motion";
import About from "./About";  
import Contact from "./Contact";
import Footer from "./Footer"
import NewHeader from "./NewHeader";


const Home = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const parallaxRef = useRef(null);
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollValue = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`; // Adjust the multiplier for the desired parallax effect
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

<NewHeader/>
    
      <div id="Home">
  
        <div class="relative">
          <img src="./assets/staf.jpg" alt="cover" className="inset-0 object-cover w-full h-60 md:h-80" />
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <p className="text-3xl md:text-5xl font-sans font-semibold text-white text-center md:text-left">Morgans Med Staffing</p>
            <p className="text-lg md:text-xl font-sans text-center md:text-center mb-4">
              We provide custom staffing solutions to healthcare organizations.
            </p>
          </div>
        </div>

       </div>

      <section id="Jobs" className="h-2/5 bg-white">
      <Jobs/>
      </section>

      <div id="Employers" className="h-2/5 bg-white overflow-hidden relative my-10">
        <Employers/>
      </div>


      <div id="About" className="h-2/5 bg-white overflow-hidden relative my-2">
       <About/>
      </div>

      <div id="Contact" className="h-2/5 bg-white overflow-hidden relative">
       <Contact/>
      </div>

      <div id="Footer" className="bg-white overflow-hidden relative">
       <Footer/>
      </div>

    </>
  )
}
export default Home