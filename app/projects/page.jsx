import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticlesComponent from "@/app/components/particles";

const products = () => {
  const productsLinks = [
    { name: "hotel-restaurant //", href: "/products" },
    { name: "living //", href: "/products" },
    { name: "residential complexes //", href: "/products" },
    { name: "headquarters //", href: "/products" },
    { name: "retail //", href: "/products" },
    { name: "healthcare //", href: "/products" },
    { name: "exhibition stands //", href: "/products" },
    { name: "infrastructure - public spaces //", href: "/products" },
    { name: "urbanism //", href: "/products" },
  ];

  const cards = [
    {
      image: "/2.png",
      title: "",
      description: "",
    },
    {
      image: "/23.png",
      title: "",
      description: "",
    },
    {
      image: "/011.png",
      title: "",
      description: "",
    },
    {
      image: "/012.png",
      title: "Card Two",
      description: "This is the description for card two.",
    },
    {
      image: "/013.png",
      title: "Card Two",
      description: "This is the description for card two.",
    },
    {
      image: "/014.png",
      title: "Card Two",
      description: "This is the description for card two.",
    },
    {
      image: "/015.png",
      title: "Card Two",
      description: "This is the description for card two.",
    },
    {
      image: "/016.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },
    {
      image: "/017.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/018.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/019.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/020.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/021.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/022.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/023.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/024.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/025.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/026.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },
    {
      image: "/027.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/028.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/029.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/030.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/031.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/032.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/033.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/034.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },{
      image: "/035.png",
      title: "Card Three",
      description: "This is the description for card three.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white min-h-screen text-black relative z-[1] p-12 font-trebuchet pt-24">
       <div className="fixed inset-0 -z-10">
          <ParticlesComponent id="particles" color="#1bbb9f" number={20} interactive={false}/>
          </div>
      <Link
        href="/"
        className="block mb-4 text-xl font-bold hover:text-aGreen pt-2"
      >
        ALL
      </Link>
      <ul className="hidden lg:flex flex-wrap gap-4 font-trebuchet">
        {productsLinks.map((item, index) => (
          <li key={index} className="font-trebuchet hover:text-aGreen">
            <Link
              href={item.href}
              className="gap-4 leading-[30px] text-[24px] font-[700px] font-trebuchet hover:text-aGreen"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 text-white overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-black">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className="py-2">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {cards.map((card, index) => (
      <div
        key={index}
        className="group rounded-2xl bg-white shadow-md p-6 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 text-black overflow-hidden"
      >
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl">
          {card.image && (
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default products;
