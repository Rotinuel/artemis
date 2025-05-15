import React from "react";
import Link from "next/link";

const Studio = () => {
  const aboutLinks = [
    { name: "STUDIO //", href: "#studio" },
    { name: "TEAM //", href: "#team" },
    { name: "CLIENTS //", href: "#client" },
  ];

  return (
    <div className="w-full overflow-hidden min-h-screen scroll-smooth bg-white text-black relative font-trebuchet pt-72 left-2">
        <ul className="hidden lg:flex flex-wrap gap-4 font-trebuchet lg:px-16 text-xl">
          {aboutLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-aGreen text-black block">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      

      <main className="lg:mx-[2%] px-8">
        {/* STUDIO SECTION */}
        <section id="studio" className="py-16 scroll-mt-32">
          <h1 className="text-[52px] font-bold mb-6">STUDIO</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
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

        <section id="team" className="py-16 scroll-mt-32">
          <h1 className="text-[52px] font-bold mb-6">OUR TEAM</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
            Our team is made up of talented and experienced professionals who
            are dedicated to delivering high-quality designs that meet the needs
            of our clients. We work collaboratively to ensure that every project
            is a success.
            
          </p>
        </section>

        <section id="client" className="py-16 scroll-mt-32">
          <h1 className="text-[52px] font-bold mb-6">CLIENTS</h1>
          <p className="text-[20px] leading-[30px] max-w-7.5xl text-justify">
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
