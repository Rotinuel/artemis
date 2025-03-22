import Image from "next/image"
import { assets } from "../assets/assets";

// import { Container } from './Container'

const Header = () => {
  return (
    <div className='w-full h-screen relative'>
        <Image src={assets.bg} alt='' layout='fill' objectFit='cover' quality={100} priority />
        {/* <Container className='relative z-10 flex flex-col justify-between h-full text-white'>
        </Container> */}
    </div>
  )
}

export default Header