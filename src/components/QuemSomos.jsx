
function QuemSomos() {
  return (
    <section>

    <div className="Relative mt-20 border-b border-neutral-800 min-h-[800px] ">
      <div className="text-center ">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
          Quem Somos
        </span>

        <div className=" flex flex-row justify-center space-x-72 mx-10">

          <div className="flex flex-col items-start ml-20 gap-5 pb-10 ">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-start">
              Quem somos nós?
            </h2>

            <p className="text-start max-w-4xl sm:text-sm lg:text-sm text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Nostrum odit, provident soluta maiores, dolore sapiente <br /> facere beatae voluptatem id, 
              adipisci mollitia illo asperiores in!  <br /> Quas eius nemo molestiae recusandae vel?
            </p>

          </div>


            <div className=" w-1/4 sm:w-xl h-96 my-5 border border-neutral-700/80 drop-shadow-2xl" style={{ borderRadius: '60px' }}>
            </div>
          </div>
      </div>
    </div>
    </section>
  )
}

export default QuemSomos