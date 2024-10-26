import imageEquipe from "../assets/equipe.jpg";
import Marquee from "react-fast-Marquee";
import img1 from '../assets/durval.png';
import img2 from '../assets/trihair.png';
import img3 from '../assets/olámusic.png';
import img4 from '../assets/fill.png';
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
        </Marquee>
      </div>

    <div className="Relative mt-20 border-b border-neutral-800 min-h-[600px] flex flex-wrap justify-center ">
      <div className="text-center ">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
          Quem Somos
        </span>

        <div className=" flex flex-row justify-center space-x-72 mx-10">

          <div className="flex flex-col items-start ">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-start bg-gradient-to-tr from-neutral-300 to-purple-100 text-transparent bg-clip-text">
              Quem somos nós?
            </h2>

            <p className="text-start max-w-4xl sm:text-sm lg:text-sm text-neutral-400 font-extralight mt-5 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Nostrum odit, provident soluta maiores, dolore sapiente <br /> facere beatae voluptatem id, 
              adipisci mollitia illo asperiores in!  <br /> Quas eius nemo molestiae recusandae vel?
            </p>

            <div className="flex justify-center ">
                <a href="#" className="font-extralight py-3 px-10 text-sm border border-neutral-700/30 bg-customBackground" style={{ borderRadius: '20px'}}>
                    Sobre nós
                </a>
            </div>

          </div>


            <div className="flex justify-center items-center h-96 my-5 border border-neutral-700/80 drop-shadow-2xl overflow-hidden" style={{ borderRadius: '60px' }}>
            <img src={imageEquipe} alt="Equipe Okto" className="image-center h-full object-cover"/>
            </div>
          </div>
      </div>
    </div>
    </section>
    </Element>
  )
}

export default QuemSomos