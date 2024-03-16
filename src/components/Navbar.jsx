import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 px-16 flex justify-center lg:justify-between items-center">
        <Link to="/" className="hidden lg:flex justify-center items-center gap-3 cursor-pointer">
            <h1 className="text-2xl font-bold text-navy cursor-pointer">{"{Portfolio}"}</h1>
        </Link>
        <div className="flex justify-center items-center gap-8">
            <Link to="/">
                <p className="text-xl lg:text-2xl text-navy font-semibold cursor-pointer">Home</p>
            </Link>
            <Link to="/profile">
                <p className="text-xl lg:text-2xl text-navy font-semibold cursor-pointer">Profile</p>
            </Link>
            <Link to="/projects">
                <p className="text-xl lg:text-2xl text-navy font-semibold cursor-pointer">Projects</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar