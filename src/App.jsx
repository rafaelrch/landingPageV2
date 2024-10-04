import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


const App = () => {
  return (
    <>
    <Navbar/>
    <div className=" max-w-6xl mx-auto pt-20" >
    <HeroSection/>

    </div>
    </>
  )
}

export default App