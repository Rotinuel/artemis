import React from 'react'

const notFound = () => {
  return (
    <div className='flex items-center bg-black h-screen text-white text-center justify-center flex-col text-2xl p-12 -z-1'>
        <h2>Page not Found</h2>
        <p className='px-12'>Could not find requested resource. visit <a href='/' className='hover:text-aGreen'>Artemis Atelier Ltd</a></p>
    </div>
  )
}

export default notFound