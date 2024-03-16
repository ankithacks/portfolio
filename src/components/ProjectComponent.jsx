import { Link } from "react-router-dom";
import { data } from "../constants/projects";

const ProjectComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 gap-16 bg-blue lg:bg-transparent h-full">
      <h1 className="text-5xl font-bold text-white">
        <span className="text-4xl text-lime">{"<"}</span>Projects
        <span className="text-4xl text-lime">{"/>"}</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 lg:w-96"
          >
            <div className="relative h-36 lg:h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
              <img
                src={item.imgSrc}
                alt="card-image"
                className="h-full w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
                {item.label}
              </h5>
            </div>
            <div className="p-6 pt-0 flex justify-between">
            <Link to={item.code} target="blank">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                Code
              </button>
              </Link>
              <Link to={item.demo} target="blank">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                Demo
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectComponent;
