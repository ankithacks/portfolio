const About = () => {
  return (
    <section className="h-screen hidden lg:flex">
      <div className="bg-blue w-[65%] h-full px-16 pt-12 flex flex-col">
        <h1 className="text-5xl font-semibold text-lime">
          <span className="text-4xl text-white">{"<"}</span>Profile
          <span className="text-4xl text-white">{"/>"}</span>
        </h1>
        <div className="mt-32 px-16 py-6">
        <div className="flex flex-col items-start w-[85%] gap-2">
          <h1 className="text-4xl font-bold text-lime">Full Stack Developer 🧑🏽‍💻</h1>
          <p className="break-normal my-5 text-xl text-white font-semibold">
          I&#39;m a dynamic professional with a Computer Science Engineering background from Asansol Engineering College. Specializing in backend and full-stack web development, I&#39;m also well-versed in DevOps practices and CNCF technologies, particularly Docker and Kubernetes. As an AWS Cloud Practitioner, I excel in architecting robust cloud solutions. I&#39;m deeply passionate about exploring the ever-evolving KubeScape, constantly learning and implementing cutting-edge solutions to drive innovation and tackle complex challenges in technology.
          </p>
          <p className="text-xl text-black font-semibold bg-white px-4 py-1 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"><span className="text-blue font-semibold">Location: </span>Asansol, West Bengal, 713303</p>
          <p className="text-xl text-black font-semibold bg-white px-4 py-1 rounded-2xl mt-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer"><span className="text-blue font-semibold">Email: </span>ankitguitar117@gmail.com</p>
        </div>
        </div>
      </div>
      <div className="bg-lime w-[35%] h-full">
        <img src="/assets/pfp.png" className="h-96 w-72 absolute top-56 -translate-x-16 rounded-xl shadow-md shadow-zinc-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 z-10"/>
        <img src="/assets/vector.png" className="h-44 absolute z-0 top-24 translate-x-36"/>
        <img src="/assets/vector.png" className="h-44 absolute z-0 bottom-4 translate-x-36"/>
      </div>
    </section>
  );
};

export default About;
