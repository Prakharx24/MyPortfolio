import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe' 
import Footer from './components/footer'
import './index.css'

const App = () => {
  return(
    <>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
      <Footer />
    </>
  );
};




export default App;
