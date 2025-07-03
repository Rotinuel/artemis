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
    {
      image: "/finished/11.jpg",
      title: "",
      description: "",
    },
    {
      image: "/finished/12.jpg",
      title: "",
      description: "",
    },{
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
    },{
      image: "/finished/17.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/18.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/19.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/20.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/21.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/22.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/23.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/24.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/25.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/26.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/27.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/28.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/29.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/30.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/31.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/32.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/33.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/34.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/35.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/36.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/37.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/38.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/39.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/40.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/41.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/42.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/43.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/44.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/45.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/46.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/47.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/48.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/49.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/50.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/51.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/52.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/53.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/54.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/55.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/56.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/57.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/58.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/59.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/60.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/61.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/62.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/63.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/64.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/65.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/66.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/67.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/68.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/69.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/70.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/71.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/72.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/73.jpg",
      title: "",
      description: "",
    },{
      image: "/finished/74.jpg",
      title: "",
      description: "",
    }
    
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


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards2.map((card, index) => (
    <div
      key={index}
      className="group relative rounded-2xl bg-white shadow-md p-6 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 text-black overflow-hidden focus-within:outline-none"
    >
      <div className="absolute inset-0 z-0 rounded-2xl p-[2px] pointer-events-none bg-[length:200%_200%] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 group-hover:animate-[spinGradient_3s_linear_infinite] transition-opacity duration-500" />

      <div className="relative z-10 rounded-2xl bg-white overflow-hidden">
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
        {/* Optional content */}
        {/* <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
        <p className="text-sm text-gray-600">{card.description}</p> */}
      </div>
    </div>
  ))}
</div>



</div>

    </div>
  );
};

export default products;
