import React, { useState } from "react";
import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import figmaLogo from "../../images/figma-logo.png";

const About = () => {
  const [animate, setAnimate] = useState("nothing");
  return (
    <section id="about" className="section-title">
      <h2 className="section-title">About Me</h2>
      <p>
        My Name is Majd Karoun, I'm a frontend web developer <br />
        with interest in making useful projects which make our lifes easier.
        <br />I enjoy bringing ideas into reality and I am up for any challenge.
        <br /> so what are we building!?
      </p>
      <h4>Skills</h4>
      <div className="skills-container">
        <motion.div
          animate={{ scale: animate === "ui-design" ? 1.1 : 1
        }}
          className="skill-card"
          onHoverStart={() => setAnimate("ui-design")}
          onHoverEnd={() => setAnimate("nothing")}>
          <h5 className="skill-card-title">UI Design</h5>
          <div className="skill-card-icon">
            <img src={figmaLogo} style={{ width: "25px" }} />
            <h5>Figma</h5>
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: animate === "frontend" ? 1.1 : 1 }}
          className="skill-card"
          onHoverStart={() => setAnimate("frontend")}
          onHoverEnd={() => setAnimate("nothing")}>
          <h5 className="skill-card-title">Frontend</h5>
          <div className="row">
            <div className="skill-card-icon">
              <AiFillHtml5 style={{ fontSize: "30px", color: "brown" }} />
              <h5>HTML</h5>
            </div>

            <div className="skill-card-icon">
              <AiFillHtml5 style={{ fontSize: "30px", color: "blue" }} />
              <h5>CSS</h5>
            </div>
          </div>

          <div className="row">
            <div
             className="skill-card-icon">
              <SiJavascript style={{ fontSize: "27px", color: "yellow" }} />
              <h5>Javascript</h5>
            </div>

            <div className="skill-card-icon">
              <FaReact style={{ fontSize: "30px", color: "lightblue" }} />
              <h5>React js</h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: animate === "backend" ? 1.1 : 1 }}
          className="skill-card"
          onHoverStart={() => setAnimate("backend")}
          onHoverEnd={() => setAnimate("nothing")}>
            <h5 className="skill-card-title">Backend</h5>
            ...
          </motion.div>
      </div>
    </section>
  );
};

export default About;
