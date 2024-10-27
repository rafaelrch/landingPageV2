import antonio from "../assets/antonio.png";
import thomas from "../assets/thomas.png";
import Marquee from "react-fast-marquee";
import img1 from '../assets/durval.png';
import img2 from '../assets/trihair.png';
import img3 from '../assets/olámusic.png';
import img4 from '../assets/bdf.png';
import img5 from '../assets/ótica.png';
import img6 from '../assets/supreme.png';
import { Element } from "react-scroll";



function QuemSomos() {
  return (
    <Element name="quemSomos">

    <section id="quemSomos">
      <div className="mt-10">
        <Marquee gradientColor="#121212" gradient="true">
          <div className="w-40 mx-20">
            <img src={img1} alt="" />
          </div>
          <div className="w-40 mx-20">
            <img src={img6} alt="" />
          </div>
          <div className="w-40 mx-20">
            <img src={img2} alt="" />
          </div>
          <div className="w-40 mx-20">
            <img src={img3} alt="" />
          </div>
          <div className="w-40 mx-20">
            <img src={img5} alt="" />
          </div>
          <div className="w-40 mx-20">
            <img src={img4} alt="" />
          </div>
        </Marquee>
      </div>

    <div className="Relative mt-20 border-b border-neutral-800 min-h-[600px] flex flex-wrap justify-center items-center ">
      <div className="text-center ">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
          Quem Somos
        </span>

        <div className=" flex flex-wrap justify-center gap-10 lg:gap-72 md:gap-52 mx-10">
 
          <div className="flex flex-col items-center md:items-center lg:items-start">
            <h2 className="f text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-start bg-gradient-to-tr from-neutral-300 to-purple-100 text-transparent bg-clip-text">
              Quem somos nós?
            </h2>

            <p className="text-center max-w-4xl sm:text-sm lg:text-sm md:text-center lg:text-start  text-neutral-400 font-extralight mt-5 mb-7">
            Transformamos desafios em oportunidades e marcas em referências. <br />
            Com uma equipe dedicada e uma visão estratégica clara, entregamos <br />
            soluções que vão além do esperado, criando conexões autênticas e <br />
            resultados de alto impacto. Somos apaixonados pelo que fazemos, <br />
            e isso se reflete em cada detalhe do nosso trabalho.
            </p>

            <div className="flex justify-center ">
                <a href="#" className="hover:border-neutral-500 duration-500 font-extralight py-3 px-10 text-sm border border-neutral-700/30 bg-customBackground" style={{ borderRadius: '20px'}}>
                    Sobre nós
                </a>
            </div>

          </div>


            <div className="flex justify-center items-center w-1/5 sm:w-1/2 lg:w-1/5 mr-0 md:mr-9 lg:mr-16 my-5 drop-shadow-2xl">
              <img src={thomas} alt="Equipe Okto" className="image-center h-full"/>
              <img src={antonio} alt="Equipe Okto" className="image-center h-full"/>
            </div>
          </div>
      </div>
    </div>
    </section>
    </Element>
  )
}

export default QuemSomos