import React from 'react';
import ContactForm from '../../contact-form/ContactForm';
import "./Contact.css";


const contact = () => {



  return (
    <section id='contact' className='contact'>
    
    <h2 className='section-title'>Contact</h2>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="main-container">
    <div className="contact-details">
      <div className='email-details'>
        <h2>Email:</h2>
        <h3>majd.karoun@gmail.com</h3>
      </div>
      <div className='phone-details'>
        <h2>Phone:</h2>
        <h3>+49 176 80251794</h3>
      </div>
    </div>
    <ContactForm/>
    </div>
    
    </section>
  )
}

export default contact