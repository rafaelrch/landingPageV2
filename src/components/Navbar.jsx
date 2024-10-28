import {Menu, X} from "lucide-react";
import {useState} from "react";
import logo from "../assets/okto-branco.png";
import { navItems } from "../constants";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const numero  = '+557199173322';
    const mensagem = 'Gostaria de fazer um reunião';

    const clickBtn = () => {
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }

  return (
    

    <nav className="sticky top-5 z-50 py-3 mt-5 backdrop-blur-lg border border-neutral-700/80 w-3/5 mx-auto bg-black bg-opacity-60 pl-4 shadow-md" style={{ borderRadius: '25px', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.2)' }}>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center ">
                <div className="flex items-center flex-shrink-0 ">
                    <img className="h-10 w-30" src={logo} alt="logo" />
                    
                </div>

                <ul className="hidden lg:flex ml-14 md:items-center space-x-12 font-extralight">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.href}
                                smooth={true}
                                duration={600}
                                spy={true}
                                activeClass="font-bold"
                                className="hover:font-bold duration-200 cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 md:text-center items-center ">
                    <a href="#" onClick={clickBtn} className="duration-300 transition hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-5" style={{ borderRadius: '15px' }}>
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
                <div className="fixed right-0 z-20 bg-neutral-900 font-extralight w-full p-12 flex flex-col justify-sta items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" onClick={clickBtn}  className="text-center text-xs py-2 px-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-800">
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