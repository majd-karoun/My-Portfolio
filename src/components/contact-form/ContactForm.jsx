import React, {useState} from 'react';
import './ContactForm.css'
import emailjs from "emailjs-com"
import { motion } from 'framer-motion';


const ContactForm = () => {
    const [showSentConfirmation, setShowSentConfirmation] = useState(false)


    const sendEmail = (e)=> {
        e.preventDefault()
    
        emailjs.sendForm('service_9he62to','template_tj7vxij',e.target,'OlucHJboJJaCGm7cP')
    
        setShowSentConfirmation(true)
        
    
      }


  return (
    <form className='contact-form' onSubmit={sendEmail}>
      
      <input  type="name" name='name' required placeholder='Full name' />
      <input  type="email" name='email' required placeholder='your email adress'/>
      
      <textarea placeholder='Your message...' required name="message" id="message"  cols="80" rows="12"></textarea>

      <button className='button' type='submit' >Send</button>
      {showSentConfirmation && <motion.h5 animate={{opacity: 1}} initial={{opacity: 0}}>Your Message was sent successfully!</motion.h5>}
      {showSentConfirmation}


    </form>
  )
}

export default ContactForm