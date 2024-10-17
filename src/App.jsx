import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App