import React from "react";
import Link from "next/link";

const Studio = () => {
  const aboutLinks = [
    { name: "STUDIO //", href: "#studio" },
    { name: "TEAM //", href: "#team" },
    { name: "CLIENTS //", href: "#client" },
  ];

  return (
    <div className="scroll-smooth bg-black text-white font-trebuchet">
      <aside className="w-full md:w-1/4 lg:fixed top-0 left-0 pt-28 hidden lg:block z-10">
        {/* <ul className="flex space-x-6 justify-left">

        </ul> */}

        <ul className="space-y-4 text-[24px] font-bold leading-[30px] flex-wrap gap-4 font-trebuchet">
          {aboutLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-aGreen">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="lg:ml-[25%] px-8 pt-40">
        {/* STUDIO SECTION */}
        <section id="studio" className="min-h-screen py-24">
          <h1 className="text-[52px] font-bold mb-6">STUDIO</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl">
            Artemis Atelier Limited is one of Nigeria's leading architectural
            and construction companies located in Lagos, Nigeria. The company
            was founded by Mr. C. E. Makama with the aim to deliver outstanding
            service in our areas of specialization. We deal with architectural
            design, construction, facility management, real estate development,
            and architectural drafting services.
          </p>
        </section>

        <section id="team" className="min-h-screen py-24">
          <h1 className="text-[52px] font-bold mb-6">OUR TEAM</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl">
            Our team is made up of talented and experienced professionals who
            are dedicated to delivering high-quality designs that meet the needs
            of our clients. We work collaboratively to ensure that every project
            is a success.
          </p>
        </section>

        <section id="client" className="min-h-screen py-24">
          <h1 className="text-[52px] font-bold mb-6">CLIENTS</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl">
            We’ve had the privilege of working with clients across various
            industries, building long-term relationships based on trust and
            excellence.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Studio;
