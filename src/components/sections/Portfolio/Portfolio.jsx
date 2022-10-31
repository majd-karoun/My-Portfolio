import React, { useState } from 'react'
import { motion } from "framer-motion"
import './Portfolio.css'
import mealcards from '../../images/mealcards.png'


const Portfolio = () => {
  const [animate, setAnimate] = useState('nothing')
  return (
    <section id="portfolio" className="portfolio">
        <h2 className='section-title'>Portfolio</h2>
        <div className="projects-container">
        <motion.div
          animate={{ scale: animate === "ui-design" ? 1.1 : 1 }}
          className="project-card"
          onHoverStart={() => setAnimate("ui-design")}
          onHoverEnd={() => setAnimate("nothing")}>
          <img src={mealcards} alt="project screenshot" />
          <h5 className="project-card-title">Meal Cards</h5>
         <p>
         discover and learn how to cook meals
         <br/>from around the world.
         </p>
         <div className="project-card-actions">
          <button className='button'> <a target='_blank' href='https://mealcards7.web.app/discover'>Live Demo</a></button>
          
         </div>
        </motion.div>


        <motion.div
          animate={{ scale: animate === "frontend" ? 1.1 : 1 }}
          className="project-card"
          onHoverStart={() => setAnimate("frontend")}
          onHoverEnd={() => setAnimate("nothing")}>
          <h5 className="project-card-title"></h5>
          ...
          <div className="row">
          

          
          </div>

          <div className="row">
           

           
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: animate === "backend" ? 1.1 : 1 }}
          className="project-card"
          onHoverStart={() => setAnimate("backend")}
          onHoverEnd={() => setAnimate("nothing")}>
            <h5 className="project-card-title"></h5>
            ...
          </motion.div>
          </div>
    </section>
  )
}

export default Portfolio
