"use client"
import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

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

    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouse);
    }, [])


  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt='background' className='w-full h-full object-cover'/>
    </div>
      <nav className={`fixed w-full px-5 lg:pr-0.5 xl:px-[8%] py-2 flex items-right justify-between z-50 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} md:bg-transparent`}>
        <a href="#top" className='w-28 cursor-pointer mr-14'>
          <Image src={assets.logobg} alt="logo" className='w-14 lg:w-28 cursor-pointer'/>
        </a>
        <ul className="hidden flex-col lg:flex gap-4 lg:gap-2 px-2 py-12 justify-end font-normal text-[52px] leading-[50px] text-white font-trebuchet">
          {["PROJECTS", "STUDIO", "NEWS"].map((item,index) => (
            <li key={index} className="relative group"> 
              <a className="flex justify-end hover:text-aGreen relative z-10" href="#top">{item}</a>
              {/* <span className="absolute -inset-4 rounded-2xl bg-aGreen/30 blur-md opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span> */}
            </li>
          ))}
          
        </ul>            
          <button className="block lg:hidden ml-3" onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className="w-6"/>
            </button>
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
            <div className="font-trebuchet">
          <li className="flex justify-end">
            <a className="hover:text-aGreen block" href="#top" onClick={closeMenu}>PROJECTS</a>
          </li>
          <li className="flex justify-end"> 
            <a className="hover:text-aGreen block" href="#top" onClick={closeMenu}>STUDIO</a>
          </li>
          <li className="flex justify-end">
            <a className="hover:text-aGreen block" href="#top" onClick={closeMenu}>NEWS</a>
          </li>
          </div>
        </ul>



      </nav>
    </>
  );
};

export default Navbar;
