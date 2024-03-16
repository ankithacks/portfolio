

const MobileAbout = () => {
  return (
    <section className="lg:hidden bg-lime h-full flex flex-col justify-center items-center px-3 py-8 gap-8">
        <h1 className="text-3xl font-bold text-blue">
        <span className="text-2xl text-black">{"<"}</span>Profile
        <span className="text-2xl text-black">{"/>"}</span>
      </h1>
      <img src="/assets/pfp.png" className="h-44 w-32 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-xl"/>
      <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-bold text-blue">Full Stack Developer 🧑🏽‍💻</h1>
          <p className="break-normal my-2 text-md text-center text-black font-semibold">
          I&#39;m a dynamic professional with a Computer Science Engineering background from Asansol Engineering College. Specializing in backend and full-stack web development, I&#39;m also well-versed in DevOps practices and CNCF technologies, particularly Docker and Kubernetes. As an AWS Cloud Practitioner, I excel in architecting robust cloud solutions. I&#39;m deeply passionate about exploring the ever-evolving KubeScape, constantly learning and implementing cutting-edge solutions to drive innovation and tackle complex challenges in technology.
          </p>
          <p className="text-lg text-white font-semibold bg-blue px-4 py-1 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-lg"><span className="text-lime font-semibold">Location: </span>Asansol, West Bengal, 713303</p>
          <p className="text-lg text-white font-semibold bg-blue px-4 py-1 rounded-2xl mt-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer"><span className="text-lime font-semibold shadow-lg">Email: </span>ankitguitar117@gmail.com</p>
        </div>
    </section>
  )
}

export default MobileAbout