import React from 'react'
import Link from 'next/link'
export default function ButtonLink({name, link}) {
    return (
      <Link href={link} className='bg-pink-white border border-primary hover:bg-primary hover:text-white text-pink-600 font-bold py-2 px-4 rounded'>{name}</Link>
    )
}

// <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//   Button
//   </button>