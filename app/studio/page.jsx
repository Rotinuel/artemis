"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Studio = () => {
  const aboutLinks = [
    { name: "STUDIO //", href: "#studio" },
    { name: "TEAM //", href: "#team" },
    { name: "CLIENTS //", href: "#client" },
  ];

  const peopleLinks = [
    { name: "C.E MAKAMA", title: "Managing Director", image: "/team/makama.jpg" },
    { name: "E.M MAKAMA", title: "Admin Manager", image: "/team/em_makama.jpg" },
    { name: "CHIEF P.O MICHAEL", title: "Operations", image: "/team/michael.jpg" },
    { name: "O.IBIAM", title: "Financial Director", image: "/team/ibiam.jpg" },
    { name: "B.BUSARI", title: "Operations Manager", image: "/team/busari.jpg" },
    { name: "A.O OWOYOMI", title: "H.R Manager", image: "/team/owoyomi.jpg" },
    { name: "IBUKUN JEGEDE PHD", title: "Chairman of the Advisory Board", image: "/team/jegede.jpg" },
    { name: "TOBI AWOJOBI", title: "BIM Coordinator", image: "/team/awojobi.jpg" },
  ];

  const architectQuotes = [
    {
      image: "/architects/frank_lloyd_wright.jpg",
      quote: "The mother art is architecture. Without an architecture of our own we have no soul of our own civilization.",
      name: "Frank Lloyd Wright"
    },
    {
      image: "/architects/zaha_hadid.jpg",
      quote: "There are 360 degrees, so why stick to one?",
      name: "Zaha Hadid"
    },
    {
      image: "/architects/le_corbusier.jpg",
      quote: "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      name: "Le Corbusier"
    }
  ];

  return (
    <div className="w-full overflow-hidden min-h-screen scroll-smooth bg-white text-black relative font-trebuchet pt-12 lg:pt-96 left-2" style={{ backgroundImage: 'url(/studio_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ul className="hidden lg:flex flex-wrap gap-4 font-trebuchet lg:px-16 text-xl">
        {aboutLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="hover:text-aGreen text-black block"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <main className="lg:mx-[2%] px-8 ">
        {/* STUDIO SECTION */}
        <section id="studio" className="py-16 scroll-mt-32 shadow-xl bg-[white] bg-opacity-90 rounded-xl px-6">
          <h1 className="text-[52px] font-bold mb-6 text-aGreen">STUDIO</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
            Artemis Atelier Limited is one of Nigeria's leading architectural
            and construction companies, headquartered in Lagos. Established by
            Mr. C. E. Makama in 2010, the company was founded with a clear
            vision to render services in the field of Architecture and
            construction and also as general contractors. Delivering exceptional
            service across multiple disciplines. Our core areas of
            specialization include architectural design, building construction,
            facility management, real estate development, and architectural
            drafting services. With a deep understanding of both modern and
            traditional design principles, Artemis Atelier merges creativity
            with functionality to produce spaces that are not only aesthetically
            compelling but also structurally sound and environmentally
            sustainable. Our process is rooted in collaboration, innovation, and
            a commitment to excellence, ensuring that every project—regardless
            of scale—is delivered with precision and care. Over the years, we
            have built a reputation for integrity, reliability, and
            forward-thinking solutions. Our diverse portfolio spans residential,
            commercial, and institutional developments, each reflecting our
            dedication to quality and our passion for reshaping the Nigerian
            architectural landscape. We have served many individuals and firms in our capacity as contractors, designers, suppliers and facility managers. The management team converge with years of experience working together on projects for banks, merchants and individuals.
          </p>
          <h2 className="text-bold text-2xl mt-8 mb-4">
            <span className="text-aGreen">Our
            Vision, Mission & Core Values</span>
            <li>Creativity & Innovation</li>
            <li>Commitment</li>
            <li>Customer Satisfaction</li>
            <li>Quality & Safety</li>
          </h2>
        </section>

        <section className="py-16 scroll-mt-24 shadow-xl bg-white bg-opacity-90 rounded-xl px-6 mt-2">
          {/* <h1 className="text-[52px] font-bold mb-6 text-aGreen text-left">FAMOUS ARCHITECTS</h1> */}
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            className="max-w-3xl mx-auto"
          >
            {architectQuotes.map((item, index) => (
              <div key={index} className="px-6 py-5 text-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full object-cover mb-2"
                />
                <p className="text-lg italic mb-2">"{item.quote}"</p>
                <h3 className="font-bold text-aGreen">- {item.name}</h3>
              </div>
            ))}
          </Carousel>
        </section>

        <section id="team" className="py-16 scroll-mt-32 shadow-xl bg-white bg-opacity-90 rounded-xl px-6 mt-8 mb-8">
          <h1 className="text-[52px] font-bold mb-6 text-aGreen">OUR TEAM</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
            Our team is made up of talented and experienced professionals who
            are dedicated to delivering high-quality designs that meet the needs
            of our clients. We work collaboratively to ensure that every project
            is a success.
          </p>
          <div className="mt-16 flex justify-center flex-wrap gap-8">
            {peopleLinks.map((person, index) => (
              <div
                key={index}
                className="w-64 bg-white text-black text-center shadow-md rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full border-4 border-gray-200 mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{person.title}</p>
              </div>
            ))}
          </div>
          {/* <div className="mt-40px p-20 flex justify-center flex-wrap gap-[75px] gap-y-[25px]">
            <div className="w-[300px] h-[200px] shadow-md relative bg-white text-black">
              <Image src={} alt="" className="absolute w-[120px] h-[120px] rounded-[50%] top-[-60px] left-[50%] translate-x-[-50%] translate-y-0 border-[5px] border-solid border-[#f2f2f2]"/>
            </div>
            <div className="upper">
              <div className="name">

              </div>
              <div className="lower">
                <div className="post"></div>
                <div className="sci">
                  <FaInstagram/>
                  <FaFacebook/>
                  <FaLinkedin />
                </div>

              </div>
            </div>
          </div> */}
        </section>

        {/* <section id="client" className="py-16 scroll-mt-32 shadow-xl bg-white bg-opacity-90 rounded-xl px-6 mt-12 mb-8">
          <h1 className="text-[52px] font-bold mb-6 text-aGreen">CLIENTS</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
            We’ve had the privilege of working with clients across various
            industries, building long-term relationships based on trust and
            excellence.
          </p>
        </section> */}
      </main>
    </div>
  );
};

export default Studio;
