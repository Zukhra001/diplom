import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className="w-full px-5 lg:px-15 py-10 flex justify-center items-center">
      <div className="w-full max-w-[850px]">
        <Image 
          src={"/companies.png"} 
          width={850} 
          height={68} 
          alt="companies" 
          className='w-full h-auto object-contain' 
        />
      </div>
    </div>
  )
}

export default Companies