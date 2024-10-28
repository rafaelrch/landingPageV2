
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const HeroSection = () => {

  return (
    

       
    <Element name="home">
        

    <section id="home" className="h-screen flex justify-center items-start pt-16 pb-28 bg-[radial-gradient(ellipse_150%_100%_at_bottom,#5206B4,#121212_66%)]">

        <div className="flex flex-col items-center justify-center mt-6 lg:mt-10" > {/* CONTEINER TEXT SECTION */}
        
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide font-extralight">
                Sua
                <span  className="font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                {' '}última
                </span> agência <br/> de marketing.
            </h1>

            <nav className="bg-blue-400">

                <Link to="/captura">Captura</Link>
            </nav>

            <p className="mt-5 text-sm text-center text-neutral-400 max-w-4xl sm:text-sm lg:text-base px-10 font-extralight">
            Onde inovação e resultados se encontram para levar seu negócio ao próximo nível. <br/>
            </p>
  

            <div className="font-extralight sm:text-sm lg:text-xl py-3 px-8 mt-10 backdrop-blur-lg border border-neutral-700/80 w-3/5 mx-auto bg-black bg-opacity-50 shadow-md  flex justify-center text-center mx-auto" style={{ borderRadius: '30px' }}>
                <p>Transformando sua empresa em <br/>
                
                <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                soluções de ponta.
                </span></p>
            </div>
        </div>
    </section>
    </Element>
        
        

  )

}

export default HeroSection