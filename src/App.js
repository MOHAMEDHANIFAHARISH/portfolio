import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Home/>
      <About/>
      <Skills/>
    <Service/>
    <Qualification/>
    <Contact/>
    <Footer/>
    </main>
    </>
  )
}

export default App