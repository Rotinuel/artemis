import React from 'react'

const news = ({ params }) => {
  return (
    <div className='h-screen flex justify-center items-center'>News: {params.slug?.join('/') || 'None'}</div>
  )
}

export default news