

const Education = () => {
  return (
    <section className="bg-blue h-full mt-8 flex flex-col items-center py-16 px-6 gap-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-lime">
        <span className="text-2xl lg:text-4xl text-white">{"<"}</span>Education
        <span className="text-2xl lg:text-4xl text-white">{"/>"}</span>
      </h1>
      <div className="flex flex-col gap-10 mt-6 lg:w-[50%] items-center">
        <div className="bg-white rounded-xl py-4 px-4 shadow-lg shadow-black/30 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue">Asansol Engineering College</h1>
            <p className="text-md lg:text-lg font-semibold text-black/70">2021 - 2025</p>
            <p className="text-lg lg:text-xl">Bachelor of Technology In Computer Science Engineering</p>
        </div>
        <div className="bg-white rounded-xl py-4 px-4 shadow-lg shadow-black/30 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue">Burnpur Riverside School</h1>
            <p className="text-md lg:text-lg font-semibold text-black/70">2019 - 2021</p>
            <p className="text-lg lg:text-xl">Higher Secondary In Science</p>
        </div>
        <div className="bg-white rounded-2xl py-2 px-2 shadow-xl shadow-black/30 mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="/assets/study.gif" className="h-44 lg:h-72"/>
        </div>
      </div>
    </section>
  )
}

export default Education