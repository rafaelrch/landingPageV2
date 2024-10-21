import imageMap from "../assets/map.png";

function Map() {
  return (
    <section>
        <div className="text-center flex flex-row justify-center mx-20 my-20 space-x-40">
            <img src={imageMap} alt="Mapa" className="w-2/5 h-auto "/>
            <div className="flex flex-col w-4/12 justify-center space-y-12 px-3 bg-red-600" >
                <div className="flex flex-row items-end border-b border-blue-700 w-full gap-6 pb-3" >
                    <h1 className="text-7xl font-light"> +2 </h1>
                    <p className=" font-thin lg:text-base sm:text-sm"> Anos no mercado</p>
                </div>
                <div className="flex flex-row items-end border-b border-blue-700 w-full gap-6 pb-3 break-words" >
                    <h1 className="text-7xl font-light"> 2M + </h1>
                    <p className=" font-thin lg:text-base sm:text-sm"> Gerados para nossos clientes</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Map