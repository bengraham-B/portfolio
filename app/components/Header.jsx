import React from 'react'
import ButtonLink from './ButtonLink'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex bg-black py-6 border-b border-primary'>
            <div className='w-1/2'>
                <div className='pl-4'>
                   <Link href={"/"}><h1 className='text-white hover:text-primary text-3xl'>Home</h1></Link>
                </div>
            </div>
            <div className='w-1/2 flex justify-around items-center'>
                <ButtonLink name={"Skills"} link={"/skills"}/>
                <ButtonLink name={"Exprience"} link={"/exprience"}/>
                <ButtonLink name={"Project"} link={"/projects"}/>
            </div>
        </div>
    )
}
