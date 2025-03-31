import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-white text-black flex flex-col md:flex-row px-6 pt-12 pb-8 lg:flex-row">
        <span className=" text-[16px]">STUDIO INFO</span>
        <div className="text-md pt-4">
            <span className="block">Artemis Atelier ltd</span>
            <span className="block">70b Olorunlogbon St, Anthony,</span>
            <span className="block">Ikeja 105102, Lagos, Nigeria</span>
        </div>
        <div className="text-md pt-4">
            <span className="block">studio +234 80 3350 2393</span>
            <span className="block">mail(at)artemisatelierltd.com </span>
        </div>
        <div className="text-md pt-4">
            <span className="block">office(at)artemisatelier.com</span>
            <span className="block">VAT Nr. IT02677200210</span>
        </div>
        <div className="text-md pt-4">
            <span className="block"><button className="underline" download>Download the vCard</button></span>
            <span className="block">or <button className="underline">Scan QR-Code</button></span>
        </div>
        <div className="text-md pt-10">
            <span className="block">PRESS AREA</span>
            <span className="pt-4 block">studio(at)artemisatelierltd.com</span>
        </div>
        <div className="text-md pt-10">
            <span className="block">JOBS APPLICATION</span>
            <span className="pt-4 block">jobs(at)artemisatelierltd.com</span>
        </div>
        <div className="text-md">
            <span>BE mono UPTODATE</span>
            <div className="flex flex-col">

            </div>    
        </div>
      </div>
    </>
  );
};

export default Footer;
