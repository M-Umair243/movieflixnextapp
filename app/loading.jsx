
import React from 'react'
import Image from 'next/image'
import Loader from "../public/loader.webp"
const loader = () => {
  return (
    <div className='loader'>
    <Image className='loader-image' src={Loader} alt="" />
    </div>
  )
}

export default loader
