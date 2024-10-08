import image from "../assets/back.jpg";
import image2 from "../assets/img.png";

const HeroSection = () => {
  return (
    <div className="container absolute inset-0  flex min-h-screen w-full h-full bg-red-500  bg-cover bg-no-repeat">
            
        
        <div className="flex flex-col items-start justify-center sm:mt-20 lg:mt-0 mx-40 bg-blue-400" > {/* CONTEINER TEXT SECTION */}
        
            <h1 className="text-4xl sm:text-6xl lg:text-6xl text-start tracking-wide font-light">
                Sua
                <span  className="font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                {' '}última
                </span> agência <br/> de marketing.
            </h1>

            <p className="mt-5 text-sm text-start text-neutral-400 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae blanditiis <br/>
                non id saepe eveniet veritatis itaque laborum, pariatur quia obcaecati ipsum at
            </p>

            <div className="flex justify-center my-7">
                <a href="#" className="bg-gradient-to-r from-purple-800 to-purple-600 py-2 px-6 text-sm" style={{ borderRadius: '15px' }}>
                    Fale conosco
                </a>
            </div>
  

            <div className="py-3 mt-5 backdrop-blur-lg border border-neutral-700/80 w-full mx-auto bg-black bg-opacity-50 pl-4 shadow-md  flex justify-center text-center" style={{ borderRadius: '20px' }}>
                <p>Transformando sua empresa em <br/>
                soluções de ponta</p>
            </div>
        </div>
        </div>

  )

}

export default HeroSection