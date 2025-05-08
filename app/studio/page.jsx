import React from 'react'
import Image from "next/image"

const studio = () => {
  return (
    <div>
      <div className="w-full overflow-hidden bg-black min-h-screen text-white relative z-[1] p-12 font-trebuchet pt-52">
        <div className="flex flex-col gap-10 lg:gap-20">
          <h1 className="text-[52px] leading-[50px]">STUDIO</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl">
          Artemis Atelier Limited is one of Nigeria's leading architectural and construction company located in Lagos Nigeria. The company was founded by Mr C. E. Makama with the aim to deliver outstanding service in our areas of specialization. We deal with architectural design, construction, facility management, real estate development and architectural design/drafting services. 
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-black min-h-screen text-white relative z-[1] p-12 font-trebuchet pt-52">
        <div className="flex flex-col gap-10 lg:gap-20">
          <h1 className="text-[52px] leading-[50px]">OUR TEAM</h1>
          <p className="text-[20px] leading-[30px] max-w-3xl">
            Our team is made up of talented and experienced professionals who
            are dedicated to delivering high-quality designs that meet the needs
            of our clients. We work collaboratively to ensure that every project
            is a success.
          </p>
        </div>
    </div>
    </div>
  )
}

export default studio