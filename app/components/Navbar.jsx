import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
      <nav className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-1 flex items-center justify-between z-50 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} md:bg-transparent`}>
        <a href="#top" className='w-28 cursor-pointer mr-14'>
          <Image src={assets.logobg} alt="logo" className='w-18 cursor-pointer mr-14'/>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-ovo" href="#top">Projects</a>
          </li>
          <li>
            <a className="font-ovo" href="#top">Studio</a>
          </li>
          <li>
            <a className="font-ovo" href="#top">News</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
            {/* <button>
                <Image src={assets.moon_icon} alt='' className="w-6"/>
            </button> */}
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo">
            contact
            <Image src={assets.arrow_icon} alt='' className='w-3'/>
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className="w-6"/>
            </button>
        </div>

        {
          menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
                        onClick={closeMenu}/>
          )
        }

        {/* mobile menu */}
        <ul className={`fixed top-0 bottom-0 right-0 w-72 z-50 h-screen bg-[#000] text-[#fff] flex flex-col gap-4 py-10 px-10 transition-transform duration-500 font-normal text-[52px] leading-[58px]
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="top-4 flex justify-end" onClick={closeMenu}>
                <Image src={assets.close_white} alt='' className="w-8 cursor-pointer"/>
            </div>
            <div className="">
          <li className="flex justify-end">
            <a className="font-ovo hover:text-aGreen inline-block" href="#top" onClick={closeMenu}>PROJECTS</a>
          </li>
          <li className="flex justify-end"> 
            <a className="font-ovo hover:text-aGreen inline-block" href="#top" onClick={closeMenu}>STUDY</a>
          </li>
          <li className="flex justify-end">
            <a className="font-ovo hover:text-aGreen inline-block" href="#top" onClick={closeMenu}>NEWS</a>
          </li>
          </div>
        </ul>



      </nav>
    </>
  );
};

export default Navbar;
