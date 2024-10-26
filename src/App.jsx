import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuemSomos from "./components/QuemSomos";
import Infos from "./components/Map";
import Servicos from "./components/Servicos";
import Formulario from "./components/Formulario";
import Cases from "./components/Cases";
import { Element } from "react-scroll";



const App = () => {
  return (
    <>
    <Navbar/>
    <div className="items-center max-w-full max-h-max mx-auto py-" >
    <HeroSection/>
    </div>
    <QuemSomos/>
    <Infos/>
    <Servicos/>
    <Cases/>
    <Formulario/>
    </>
  )
}

export default App;