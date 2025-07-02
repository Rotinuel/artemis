import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticlesComponent from "@/app/components/particles";

const products = () => {
  const productsLinks = [
    { name: "hotel-restaurant //", href: "/projects" },
    { name: "living //", href: "/projectts" },
    { name: "residential complexes //", href: "/projects" },
    { name: "headquarters //", href: "/projects" },
    { name: "retail //", href: "/projects" },
    { name: "healthcare //", href: "/projects" },
    { name: "exhibition stands //", href: "/projects" },
    { name: "infrastructure - public spaces //", href: "/projects" },
    { name: "urbanism //", href: "/projects" },
  ];

  const cards = [
    {
      image: "/finished/12.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/13.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/14.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/15.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/16.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/17.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/18.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/19.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/1.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/2.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/3.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/4.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/5.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/6.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/7.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/8.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/9.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/10.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/010.jpg",
      title: "",
      description: "",
    },
    
  ];

  const cards2 = [
    {
      image: "/ongoing/1.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/2.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/3.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/4.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/5.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/6.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/7.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/8.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/9.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/10.jpg",
      title: "",
      description: "",
    },
    {
      image: "/ongoing/11.jpg",
      title: "",
      description: "",
    },
  ]

  return (
    <div className="w-full overflow-hidden bg-white min-h-screen text-black relative z-[1] p-12 font-baumans pt-24">
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
          <li key={index} className="font-garamond hover:text-aGreen">
            <Link
              href={item.href}
              className="gap-4 leading-[30px] text-[24px] font-[700px] font-baumans hover:text-aGreen"
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
  <p className="text-xl text-aGreen py-2">Finished Projects</p>
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
        {/* <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p>{card.description}</p>
        </div> */}
      </div>
    ))}
  </div>

  <p className="text-xl text-aGreen py-2">Ongoing Projects</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {cards2.map((card, index) => (
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
        {/* <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p>{card.description}</p>
        </div> */}
      </div>
    ))}
  </div>

</div>

    </div>
  );
};

export default products;
