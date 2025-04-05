import React from "react";
import { FaAmilia, FaYoutube, FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="space-y-2">
      <div className="bg-white text-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-evenly px-6 pt-12 pb-8 lg:flex-row lg:p-4">
        <span className="hidden lg:block lg:p-6">Artemis Atelier ltd</span>
        <div className="text-md pt-10 lg:p-6">
            <span className=" text-[16px] pb-4">STUDIO INFO</span>
            <span className="block pt-4">Artemis Atelier ltd</span>
            <span className="block">70b Olorunlogbon St, Anthony,</span>
            <span className="block">Ikeja 105102, Lagos, Nigeria</span>
            <span className="block pt-4">studio +234 80 3350 2393</span>
            <span className="block">mail(at)artemisatelierltd.co </span>
            <span className="block pt-4">office(at)artemisatelier.co</span>
            <span className="block">VAT Nr. IT02677200210</span>
            <span className="block pt-4"><button className="underline" download>Download the vCard</button></span>
            <span className="block">or <button className="underline">Scan QR-Code</button></span>
        </div>
        
        <div className="">
        <div className="text-md pt-10 lg:p-6">
            <span className="block">PRESS AREA</span>
            <span className="pt-4 block">studio(at)artemisatelierltd.co</span>
        </div>
        <div className="text-md pt-10 lg:p-6">
            <span className="block">JOBS APPLICATION</span>
            <span className="pt-4 block">jobs(at)artemisatelierltd.co</span>
        </div>
        </div>
        <div className="text-md pt-10 lg:p-6">
            <span>BE mono UPTODATE</span>
            <div className="flex flex-row space-x-4 text-xl text-black pt-4 ">
              <a href="https://www.archilovers.com" target="blank" rel="noopener noreferrer" className="hover:text-aGreen"><FaAmilia /></a>
              <a href="https://www.youtube.com" target="blank" rel="noopener noreferrer" className="hover:text-aGreen"><FaYoutube /></a>
              <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer" className="hover:text-aGreen"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer" className="hover:text-aGreen"><FaInstagram /></a>
              <a href="https://www.facebook.com" target="blank" rel="noopener noreferrer" className="hover:text-aGreen"><FaFacebook /></a>

            </div>    
        </div>
      </div>
      <div className="pb-8 pt-4 text-aGreen lg:text-center leading-[20px] text-[16px] font-normal font-trebuchet md:text-left pl-6 lg:pl-12">
        <span>&copy; Artemis Atelier 2025. All rights reserved</span>
      </div>
    </div>
    </>
  );
};

export default Footer;
