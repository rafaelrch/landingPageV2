import image from "../assets/back.jpg";

const HeroSection = () => {
  return (
    <div className="container min-h-screen w-full h-full bg-[url('./assets/back.jpg')] bg-cover bg-no-repeat">

        <div className="flex flex-col items-start mt-6 lg:mt-10 mx-60" > {/* CONTEINER TEXT SECTION */}
        
            <h1 className="text-4xl sm:text-6xl lg:text-6xl text-start tracking-wide font-light">
                Sua
                <span  className="font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                {' '}última
                </span> agência <br/> de marketing.
            </h1>

            <p className="mt-5 text-sm text-start text-neutral-400 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae blanditiis <br />
                non id saepe eveniet veritatis itaque laborum, pariatur quia obcaecati ipsum at
            </p>

            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4" style={{ borderRadius: '15px' }}>
                    Entre em contato
                </a>
            </div>
        </div>
    </div>
  )

}

export default HeroSection