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

        <ul className="space-y-4 text-[24px] font-bold leading-[30px] flex-wrap gap-4 font-trebuchet text-white">
          {aboutLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-aGreen text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="lg:ml-[25%] px-8 pt-40">
        {/* STUDIO SECTION */}
        <section id="studio" className="min-h-screen pt-6 pb-12">
          <h1 className="text-[52px] font-bold mb-6">STUDIO</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl text-justify">
            Artemis Atelier Limited is one of Nigeria's leading architectural
            and construction companies, headquartered in Lagos. Established by
            Mr. C. E. Makama, the company was founded with a clear vision: to
            deliver exceptional service across multiple disciplines in the built
            environment. Our core areas of specialization include architectural
            design, building construction, facility management, real estate
            development, and architectural drafting services. With a deep
            understanding of both modern and traditional design principles,
            Artemis Atelier merges creativity with functionality to produce
            spaces that are not only aesthetically compelling but also
            structurally sound and environmentally sustainable. Our process is
            rooted in collaboration, innovation, and a commitment to excellence,
            ensuring that every project—regardless of scale—is delivered with
            precision and care. Over the years, we have built a reputation for
            integrity, reliability, and forward-thinking solutions. Our diverse
            portfolio spans residential, commercial, and institutional
            developments, each reflecting our dedication to quality and our
            passion for reshaping the Nigerian architectural landscape.
          </p>
        </section>

        <section id="team" className="min-h-screen pt-6 pb-12">
          <h1 className="text-[52px] font-bold mb-6">OUR TEAM</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl text-justify">
            Our team is made up of talented and experienced professionals who
            are dedicated to delivering high-quality designs that meet the needs
            of our clients. We work collaboratively to ensure that every project
            is a success.
          </p>
        </section>

        <section id="client" className="min-h-screen pt-6 pb-6">
          <h1 className="text-[52px] font-bold mb-6">CLIENTS</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl text-justify">
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
