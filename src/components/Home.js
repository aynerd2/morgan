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



      <Header>

      <BackgroundImg
           src="./assets/nurse.jpg"
           alt="Hero Image"
      />

        <div className="overlay bg-blue-100 absolute bottom-0 left-0 w-full h-2/5 aspect-ratio-2-1 opacity-30 transition-opacity">
          <div className="flex items-center justify-center h-full overflow-hidden relative">
            <div className="text-center">
              <Title style={{ x }} className="text-sm font-serif sm:text-2xl">Morgans Med Staffing provides custom staffing solutions<br/> to Houston’s healthcare organizations.</Title>
            </div>
          </div>
        </div>
        
      </Header>





      <section id="Jobs" className="h-2/5 bg-white">
      <Jobs/>
      </section>

      <div id="Employers" className="h-2/5 bg-white overflow-hidden relative my-10">
        <Employers/>
      </div>


      <div id="#about" className="h-2/5 bg-white overflow-hidden relative my-10">
       <About/>
      </div>

      <div id="#contact" className="h-2/5 bg-white overflow-hidden relative my-10">
       <Contact/>
      </div>

      <div id="#footer" className="bg-white overflow-hidden relative">
       <Footer/>
      </div>

    </>
  )
}
export default Home