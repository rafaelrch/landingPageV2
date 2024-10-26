import {Monitor} from "lucide-react";
import {Megaphone} from "lucide-react";
import {Network} from "lucide-react";
import {Award} from "lucide-react";
import { Element } from "react-scroll";

function Servicos() {
  return (
    <Element name="servicos">

    <div id="servicos" className="mt-20 text-center flex flex-wrap flex-col justify-center items-center">
      <span className="flex items-center bg-neutral-900  text-purple-500 rounded-full h-10 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
        Serviços
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-16 font-thin">
        Nossos Serviços
      </h2>
      <div className="flex flex-wrap justify-center mx-5 space-x-1">
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className=" p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-700 hover:border-blue-600 hover:scale-105 duration-200 rounded-xl">
                <Monitor className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Web Design</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">E-commerce e Landing Pages</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-700 hover:border-blue-600 hover:scale-105 duration-200 rounded-xl">
                < Megaphone className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Tráfego Pago</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Google ADS e Meta ADS</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-700 hover:border-blue-600 hover:scale-105 duration-200 rounded-xl">
                <Award className="w-20 h-20 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Branding</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Criando uma identidade para sua marca</p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-700 hover:border-blue-600 hover:scale-105 duration-200 rounded-xl">
                <Network className="w-32 h-32 sm:w-20 lg:w-5/12 sm:h-20 lg:h-1/4"/>
                <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl">Social Media</h2>
                <p className="font-thin text-md sm:text-base lg:text-sm">Gerencimento de redes sociais</p>
              </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Servicos;
