import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Link } from 'react-router-dom'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Web Development', 'Backend Development', 'DevOps', 'Cloud Computing'],
        loop: 0
      })

  return (
    <section className="flex flex-col justify-center items-center mt-12 gap-6">
    {/* <img src="/assets/avatar2.png" className="h-56 absolute left-20 -rotate-12 skew-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
    <img src="/assets/avatar2.png" className="h-56 absolute right-20 rotate-12 -skew-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/> */}
        <div className="my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="/assets/programmer.gif" className="h-44 lg:h-56"/>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3 mt-4">
            <h1 className="text-2xl lg:text-5xl font-bold text-navy">Hi, I&#39;m <span className="text-off-white">{"<"}</span>Ankit Chakraborty<span className="text-off-white">{"/>"}</span></h1>
            <p className="text-xl lg:text-4xl font-semibold">I&#39;m Into <span className='text-navy'>{text}</span><Cursor cursorColor='blue' /></p>
            <button className="text-lg lg:text-2xl py-2 px-4 lg:px-6 bg-navy rounded-xl lg:rounded-2xl text-orange font-semibold hover:text-off-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Resume</button>
        </div>
        <div className="flex gap-5 justify-center items-center mt-6">
            <ul className="flex gap-6">
                    <Link to="https://www.linkedin.com/in/ankit-chakraborty-845b9a25b/" target="_blank"><li className="p-2 lg:px-3 lg:py-3 rounded-lg lg:rounded-2xl bg-navy text-orange hover:text-off-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><LinkedinIcon className="h-5 lg:h-7 lg:w-7"/></li></Link>
                    <Link to="https://github.com/ankithacks" target="_blank"><li className="p-2 lg:px-3 lg:py-3 rounded-lg lg:rounded-2xl bg-navy text-orange hover:text-off-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><GithubIcon className="h-5 lg:h-7 lg:w-7"/></li></Link>
                    <Link to="https://twitter.com/NitishSadhu2003" target="_blank"><li className="p-2 lg:px-3 lg:py-3 rounded-lg lg:rounded-2xl bg-navy text-orange hover:text-off-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><TwitterIcon className="h-5 lg:h-7 lg:w-7"/></li></Link>
                    <Link to="https://www.instagram.com/n.i.t_i.s.h/" target="_blank"><li className="p-2 lg:px-3 lg:py-3 rounded-lg lg:rounded-2xl bg-navy text-orange hover:text-off-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><InstagramIcon className="h-5 lg:h-7 lg:w-7"/></li></Link>
                </ul>
            </div>
    </section>
  )
}

export default Hero