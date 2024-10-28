import React from 'react'
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-8 px-10">
        <div class="container mx-auto px-4 flex flex-col md:flex-row sm:justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">

            
            <div class="text-center md:text-left ">
                <p class="text-lg font-bold">Contato</p>
                <p class="text-sm mt-2 font-extralight">oktoagencia@gmail.com</p>
                <p class="text-sm font-extralight mt-2">Edf. Mag Empresarial, <br /> Av. Luiz Tarquínio Pontes, 1904 <br />
                Lauro de Freitas - BA, 42700-130</p>
            </div>
                <div className='flex justify-center items-center p-2 bg-purple-600 hover:bg-blue-500 rounded-lg hover:scale-105 duration-200 w-12 mt-3'>
                    <a href="https://instagram.com/oktoagencia" target="_blank" rel="noopener noreferrer" class="text-white">
                    <Instagram/>
                    </a>
                </div>


    
        <div>
        <Link to="/captura" class="bg-blue-600 hover:bg-blue-500 text-white font-extralight py-2 px-6 rounded-lg">
            Captura
        </Link >
        </div>
    
  </div>
</footer>


  )
}

export default Footer