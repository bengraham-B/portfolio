import React from 'react'
import Link from 'next/link'
export default function ButtonLink({name, link}) {
    return (
      <Link href={link} className='border border-white hover:bg-white hover:text-primary font-light py-2 px-4 rounded text-lg'>{name}</Link>
    )
}
