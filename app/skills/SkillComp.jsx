import React from 'react'
import Image from 'next/image'


export default function SkillComp({skill}) {
  return (
    <div className='flex items-center justify-around my-2  w-full'>
        {/* <Image 
            src={img}
            width={40}
            height={40}
            alt="Picture of the author"/> */}
        <p className='text-3xl'>{skill}</p> 
    </div>
  )
}
