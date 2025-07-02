"use client";
import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ParticlesComponent from "./particles";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { name: "PROJECTS", href:"/projects"},
    { name: "STUDIO", href:"/studio"}
    // { name: "NEWS", href:"/news"}
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div> */}
      <nav
        className={`${isHomePage ? "fixed" : "reltive"} w-full px-5 lg:pr-0.5 xl:px-[8%] py-2 flex items-right justify-between z-[100] ${
          isHomePage ?
          isScrolled ? "bg-transparent shadow-md" : "bg-transparent" :
          "bg-white"
        } ${!isHomePage && isScrolled ? "shadow-md" : ""}`} 
      >
        <Link href="/" className="w-28 cursor-pointer mr-14">
          <Image
            src={assets.logobg}
            alt="logo"
            className="w-14 lg:w-28 cursor-pointer"
          />
        </Link>
        <ul className="hidden flex-col lg:flex gap-4 lg:gap-2 px-2 py-12 justify-end font-normal text-[52px] leading-[50px] text-black font-bauhaus">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                className="flex justify-end hover:text-aGreen relative z-10"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="block lg:hidden ml-3" onClick={openMenu}>
          <Image src={assets.bars} alt="" className="w-6" />
        </button>
        {menuOpen && (
          <>
          <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-500"
          onClick={closeMenu}
          />
          <div className="fixed inset-0 z-45">
          <ParticlesComponent id="particles" interactive={false}/>
          </div>
          </>
        )}

        {/* mobile menu */}
        <ul
          className={`fixed top-0 bottom-0 right-0 w-72 z-50 h-screen text-[#fff] flex flex-col gap-4 py-10 px-10 transition-transform duration-500 font-normal text-[52px] leading-[58px] overflow-x-hidden
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="top-4 flex justify-end" onClick={closeMenu}>
            <Image
              src={assets.x}
              alt=""
              className="w-8 cursor-pointer"
            />
          </div>
          <div className="font-bauhaus">
            {menuItems.map((item, index) => (
              <li key={index} className="flex justify-end">
              <Link
                className="hover:text-aGreen block"
                href={item.href}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
