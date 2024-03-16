import { data } from "../constants/skills"
const Skills = () => {
  return (
    <section className="h-full mt-8 py-6 px-2 lg:px-4 flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl lg:text-5xl font-bold text-blue">
        <span className="text-2xl lg:text-4xl text-black">{"<"}</span>Skills
        <span className="text-2xl lg:text-4xl text-black">{"/>"}</span>
      </h1>
        <div className="bg-blue grid grid-cols-3 lg:grid-cols-6 gap-8 lg:w-[80%] h-full rounded-2xl px-4 lg:px-8 py-8 items-center shadow-xl">
          {data.map((item) => (
            <div key={item.id} className="bg-lime flex flex-col items-center justify-center lg:px-2 py-2 lg:w-32 w-20 rounded-2xl gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/60">
              <img src={item.imgSrc} className="h-8 w-8 lg:h-16 lg:w-16"/>
              <h1 className="text-sm lg:text-lg font-semibold">{item.label}</h1>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
