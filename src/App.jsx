import React from "react"
import Navbar from "./Components/Home/Navbar"

import Hero from "./Components/Home/Hero"
import HeroCard from "./Components/Home/HeroCard"
import About from "./Components/Home/About"
import Price from "./Components/Home/Price"
import Testimonials from "./Components/Home/Testimonials"
import Gallery from "./Components/Home/Gallery"
import Subscribe from "./Components/Home/Subscribe"
import Footer from "./Components/Home/Footer"
function App() {
  

  return (
<>
        <Navbar />
        <Hero />
      <HeroCard />
      <About/>
      <Gallery/>
      <Price/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
      
      </>
  )
}

export default App
