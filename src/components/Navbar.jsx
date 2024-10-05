import {Menu, X} from "lucide-react";
import {useState} from "react";
import logo from "../assets/okto-branco.png";
import { navItems } from "../constants";

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    

    <nav className="sticky top-4 z-50 py-3 backdrop-blur-lg border border-neutral-700/80 w-3/5 mx-auto bg-black bg-opacity-50 py-3 pl-4 shadow-md" style={{ borderRadius: '25px', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.2)' }}>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-30" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight"></span>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-5" style={{ borderRadius: '15px' }}>
                    Vamos conversar
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800">
                            Vamos conversar
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>

  )
}

export default Navbar