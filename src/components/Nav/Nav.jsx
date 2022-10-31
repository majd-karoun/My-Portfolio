import React, {useState} from 'react';
import './Nav.css'


const Nav = () => {
  const [navSection, setNavSection] = useState('home')


  const changeBackground = () => {
   
    if (window.scrollY > 400 && window.scrollY < 1000) {
    setNavSection('about');
    }else if (window.scrollY > 999 && window.scrollY < 1800){
      setNavSection('portfolio');
    }else if (window.scrollY > 1799){
      setNavSection('contact');
    }
    else {
    setNavSection('home');
    }
    }

    

    window.addEventListener('scroll', changeBackground)

  return (

 

    <nav >
    <a className={navSection === 'home' ? 'active' : ''} href="#">Home</a>

  <a className={navSection === 'about' ? 'active' : ''} href="#about">About</a>

  <a  className={navSection === 'portfolio' ? 'active' : ''} href="#portfolio">Portfolio</a>

  <a className={navSection === 'contact' ? 'active' : ''}  href="#contact">Contact</a>
    </nav>
  )
}

export default Nav