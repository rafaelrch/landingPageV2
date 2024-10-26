import { useState } from 'react';   

function Formulario() {

    
    const [faturamento, setFaturamento] = useState ('');

    const alterarFaturamento  = (e) => {
        setFaturamento(e.target.value);
    };

  return (
    <div className="pt-28 flex flex-wrap justify-center items-center space-x-28 pb-28 sm:mt-20 lg:mt-10 bg-[radial-gradient(ellipse_150%_100%_at_bottom,#5206B4,#121212_50%)]">
        
        <div className="py-5 px-8 mb-10 ">
            <h1 className="font-extralight text-4xl text-center sm:text-2xl lg:text-5xl">
                <span className="font-semibold">Entre em contato</span> <br />
                agora mesmo! 
            </h1>
        </div>

        <div className="flex flex-col  w-2/6">
            <form className="contact_form" >
                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="text" 
                id="nome"
                placeholder="Digite seu nome"
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="email"
                name="email_from"
                id="email_from"
                placeholder="Digite seu melhor email" 
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                name="instagram"
                id="instagram"
                placeholder="Digite o instagram da empresa"
                required/>

                <select className='w-full font-thin  mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                name="faturamento" 
                id="faturamento" 
                value={faturamento} 
                onChange={alterarFaturamento}>
                    <option value="" disabled selected hidden>Qual faturamento mensal da sua empresa?</option>
                    <option value="De 0 a 100 mil">De 0 a 100 mil</option>
                    <option value="De 100 mil a 300 mill">De 100 mil a 300 mill</option>
                    <option value="De 300 mil a 500 mil">De 300 mil a 500 mil</option>
                    <option value="De 500 mil a 1 milhão">De 500 mil a 1 milhão</option>
                </select>

                <textarea
                className="w-full font-thin mb-2 border border-neutral-700 px-3 py-3 bg-neutral-950  rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="message"
                name="message"
                rows="4"
                placeholder="Mensagem"
                required
                ></textarea>
                
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

export default Formulario