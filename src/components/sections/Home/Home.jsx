import React, { useEffect, useState } from "react";
import "./Home.css";
import background from "../../images/background.jpg";
import { motion } from "framer-motion";
import ContactForm from "../../contact-form/ContactForm";

const Home = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [smallScreen, setSmallScree] = useState(false);
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const screenWidth = window.innerWidth
    if (screenWidth < 900){
      setSmallScree(true);
    }
  }, [])
  
 const openFormHandler = () => {

    
    if (!smallScreen){
      setFormIsOpen(true);
    }
    
  };




  return (
    <section id="home" className="home">
      <motion.p animate={{
        x: '0vw',
        opacity: 1
      }}
      initial={{
      x: '-5vw',
        opacity: 0.3
      }}
      transition={{
        duration: 0.5,
        
      }}>
        Hallo!, <br />
        I'm Majd Karoun | <br />
        Web Developer
      </motion.p>
      <motion.button 
        animate={{ 
          x: formIsOpen ? "40vw" : "0vh",
          width: formIsOpen ? "600px" : "200px",
          
          y: formIsOpen ? "-45vh" : "0vh", 
         minHeight: formIsOpen ? "410px" : "50px",
        
         position: formIsOpen ? "absolute" : "realtive",
        background: formIsOpen ?"rgba(255, 255, 255, 0.1)" : "var(--mid)",
        color: formIsOpen ?"transparent" : "white",
         
         borderRadius: formIsOpen ? "10px" : "2px",
        
          }}
          transition={{
            duration: 0.8,
            type: 'tween'
           }}
       
        onClick={openFormHandler}
        
        
        
        className="button button__contact-me-btn">
        {smallScreen ? <a href="#contact">Contact Me</a>: 'Contact Me'}
        {formIsOpen && (
        <motion.div animate={{ 
          opacity: 1
        
         
       
        
          }}
          initial={{
            opacity: 0
          }}
          transition={{
            duration: 1.1,
            type: 'tween'
           }}>
        <ContactForm/>
        </motion.div>)}
      </motion.button>
    </section>
  );
};

export default Home;
