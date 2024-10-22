import {Monitor} from "lucide-react";
import { servicos } from "../constants";


function Servicos() {
  return (

    <div className="mt-20 text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
          Serviços
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8">Nossos Serviços</h2>
        
        <div className="flex flex-wrap justify-center">
                {servicos.map((servico, index) =>
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-lg p-6 text-md border border-neutral-800 font-thin">
                      <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl">{servico.title}</h2>
                    <p>{servico.description}</p>
                    </div>

                  </div>
                )}
        </div>
    </div>

    
  )
}

export default Servicos;