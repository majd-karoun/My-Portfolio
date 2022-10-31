import React from "react";
import ContactForm from "./components/contact-form/ContactForm";
import Nav from "./components/Nav/Nav";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Home from "./components/sections/Home/Home";
import Portfolio from "./components/sections/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    </div>
  );
}

export default App;
