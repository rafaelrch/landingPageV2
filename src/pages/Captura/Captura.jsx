import React from 'react';
import { useState } from 'react';   
import Swal from 'sweetalert2';
import logo from "../../assets/okto-branco.png";
import { Link } from 'react-router-dom';

function Captura() {

    const [faturamento, setFaturamento] = useState ('');

    const alterarFaturamento  = (e) => {
        setFaturamento(e.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7487025f-dfbf-4129-b91e-1d47feebac9c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Enviado com sucesso",
                text: "Espero que façamos um ótimo trabalho juntos, até mais!",
                icon: "success"
              });
        }
      };

  return (
    <div className="flex h-screen flex-wrap justify-center items-center space-x-28 pb-28 sm:mt-20 lg:mt-10 bg-[radial-gradient(ellipse_150%_100%_at_bottom,#5206B4,#121212_50%)]">
        <div>
            <Link to="/" className='font-extralight'>Voltar</Link>
        </div>
        <div className="py-5 px-8 mb-10 w-1/4">
            <img src={logo} alt="" />
        </div>

        <div className="flex flex-col  w-2/6">
            <form className="contact_form" onSubmit={onSubmit} >
                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="text" 
                name='nome'
                placeholder="Digite seu nome"
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="number" 
                name='number'
                placeholder="Digite seu número"
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                name="email"
                placeholder="Digite seu melhor email" 
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                name="segmento"
                placeholder="Digite o segmento da sua empresa"
                required/>

                <select className='w-full font-thin  mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                name="faturamento" 
                id="faturamento" 
                value={faturamento} 
                onChange={alterarFaturamento}
                required>
                    <option value="" disabled selected hidden>Qual faturamento mensal da sua empresa?</option>
                    <option value="De 0 a 100 mil">De 0 a 100 mil</option>
                    <option value="De 100 mil a 300 mill">De 100 mil a 300 mill</option>
                    <option value="De 300 mil a 500 mil">De 300 mil a 500 mil</option>
                    <option value="De 500 mil a 1 milhão">De 500 mil a 1 milhão</option>
                </select>

                
                <button
                    type="submit"
                    variant="contained"
                    className="w-full duration-200 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Enviar
                </button>


            
            </form>
        </div>
    </div>
  )
}

export default Captura