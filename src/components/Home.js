import React, { useEffect, useRef } from "react";
import Jobs from "./Jobs";
import Employers from "./Employers";
import { Header, BackgroundImg, Title } from "../Style";
import { useScroll, useTransform } from "framer-motion";
import About from "./About";  
import Contact from "./Contact";
import Footer from "./Footer"

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

<div id="Home" className="relative">
  <img
    src="./assets/nurse.jpg"
    alt="Hero Image"
    className="w-full"
  />
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
    <Title style={{ x }} className="text-white font-serif text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
    Morgans Med Staffing provides custom staffing solutions<br /> to healthcare organizations.
    </Title>
  </div>
</div>


      {/* <div id="Home">
        <img
          src="./assets/nurse.jpg"
          alt="Hero Image"
        /> */}
{/* 
        <div className="overlay bg-blue-100 absolute bottom-0 left-0 w-full h-3/5 aspect-ratio-2-1 opacity-30 transition-opacity">
          <div className="flex items-center justify-center h-full overflow-hidden relative">
            <div className="text-center">
              <Title style={{ x }} className="text-sm font-serif sm:text-2xl">Morgans Med Staffing provides custom staffing solutions<br /> to healthcare organizations.</Title>
            </div>
          </div>
        </div> */}

      {/* </div> */}

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