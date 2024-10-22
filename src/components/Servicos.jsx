import {Monitor} from "lucide-react";
import {Megaphone} from "lucide-react";
import {Network} from "lucide-react";
import {Award} from "lucide-react";

function Servicos() {
  return (
    <div className="mt-20 text-center">
      <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
        Serviços
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-16">
        Nossos Serviços
      </h2>
      <div className="flex flex-wrap justify-center mx-5">
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full flex flex-col justify-center items-center border border-neutral-700 rounded-xl">
                <Monitor className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Web Design</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Apenas um texto de teste</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full flex flex-col justify-center items-center border border-neutral-700 rounded-xl">
                <Monitor className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Tráfego Pago</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Apenas um texto de teste</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full flex flex-col justify-center items-center border border-neutral-700 rounded-xl">
                <Monitor className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Branding</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Apenas um texto de teste</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full flex flex-col justify-center items-center border border-neutral-700 rounded-xl">
                <Monitor className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Social Media</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Apenas um texto de teste</p>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Servicos;
