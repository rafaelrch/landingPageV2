import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuemSomos from "./components/QuemSomos";
import Map from "./components/Map";



const App = () => {
  return (
    <>
    <Navbar/>
    <div className="items-center max-w-full max-h-max mx-auto py-" >
    <HeroSection/>
    </div>
    <QuemSomos/>
    <Map/>
    </>
  )
}

export default App