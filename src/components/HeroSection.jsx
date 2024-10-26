import image from "../assets/back.jpg";
import image2 from "../assets/img.png";

const HeroSection = () => {
  return (
       
    <section id="home" className="pt-16 pb-28 bg-red-500 bg-[radial-gradient(ellipse_150%_100%_at_bottom,#5206B4,#121212_66%)]">

        <div className="flex flex-col items-center justify-center mt-6 lg:mt-10" > {/* CONTEINER TEXT SECTION */}
        
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extralight">
                Sua
                <span  className="font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                {' '}última
                </span> agência <br/> de marketing.
            </h1>

            <p className="mt-5 text-sm text-center text-neutral-400 max-w-4xl sm:text-sm lg:text-sm px-10 font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae blanditiis <br/>
                non id saepe eveniet veritatis itaque laborum, pariatur quia obcaecati ipsum at
            </p>

            <div className="flex justify-center my-7 ">
                <a href="#" className="bg-gradient-to-r from-purple-800 to-purple-600 py-2 px-6 text-sm " style={{ borderRadius: '15px' }}>
                    Fale conosco
                </a>
            </div>
  

            <div className="font-extralight sm:text-sm lg:text-xl py-5 px-8 mt-10 backdrop-blur-lg border border-neutral-700/80 w-2/5 mx-auto bg-black bg-opacity-50 shadow-md  flex justify-center text-center mx-auto" style={{ borderRadius: '30px' }}>
                <p>Transformando sua empresa em <br/>
                
                <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                soluções de ponta.
                </span></p>
            </div>
        </div>
    </section>
        
        

  )

}

export default HeroSection