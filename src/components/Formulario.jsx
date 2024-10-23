import emailjs from "@emailjs/browser";

function Formulario() {

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Submitted");

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_ID)
    }

  return (
    <div className="pt-28 flex flex-wrap justify-center items-center space-x-28 pb-28 sm:mt-20 lg:mt-10 bg-[radial-gradient(ellipse_150%_100%_at_bottom,#5206B4,#121212_66%)]">
        
        <div className="py-5 px-8 mb-10 ">
            <h1 className="font-extralight text-4xl text-center sm:text-2xl lg:text-5xl">
                <span className="font-semibold">Entre em contato</span> <br />
                agora mesmo! 
            </h1>
        </div>

        <div className="flex flex-col  w-2/6">
            <form className="contact_form" onSubmit={sendEmail}>
                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="text" 
                id="nome"
                placeholder="Seu nome"
                required/>

                <input className="w-full font-thin mb-2 border border-neutral-700 bg-neutral-950 px-3 py-3  rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="email"
                name="email_from"
                id="email_from"
                placeholder="Seu email" 
                required/>

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