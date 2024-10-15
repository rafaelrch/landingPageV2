import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuemSomos from "./components/QuemSomos";



const App = () => {
  return (
    <>
    <Navbar/>
    <div className="items-center max-w-full max-h-max mx-auto py-" >
    <HeroSection/>
    </div>
    <QuemSomos/>
    </>
  )
}

export default App