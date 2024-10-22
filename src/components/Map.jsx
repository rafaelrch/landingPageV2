import imageMap from "../assets/map.png";

function Map() {
  return (
    <div className="mt-20">
        <div className=" flex flex-wrap justify-center items-center">
            <div className="p-20 w-full lg:w-1/2">

                <img src={imageMap} alt="Mapa" className=""/>
            </div>

            <div className="pt-12 w-full lg:w-1/2 flex flex-col justify-center items-center" >
                <div className="flex mb-12 flex-row items-end border-b border-blue-700 w-3/5 gap-6 pb-3" >
                    <h1 className="text-7xl font-light"> +2 </h1>
                    <p className=" font-thin lg:text-base sm:text-sm"> Anos no mercado</p>
                </div>
                <div className="flex mb-12 flex-row items-end border-b border-blue-700 w-3/5 gap-6 pb-3 break-words" >
                    <h1 className="text-7xl font-light"> 2M + </h1>
                    <p className=" font-thin lg:text-base sm:text-sm"> Gerados para nossos clientes</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Map