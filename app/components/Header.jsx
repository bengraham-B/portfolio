import React from 'react'
import ButtonLink from './ButtonLink'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex py-6 border-b bg-primary border-primary'>

            <div className='w-1/2'>
                <div className='pl-4'>
                   <Link href={"/"}><h1 className='text-white hover:border-white text-3xl'>Home</h1></Link>
                </div>
            </div>

            <div className='w-full flex items-center justify-end pr-12'>
                <div className=' w-4/12 flex justify-around'>
                    <ButtonLink name={"Skills"} link={"/skills"}/>
                    <ButtonLink name={"Exprience"} link={"/exprience"}/>
                    <ButtonLink name={"Project"} link={"/projects"}/>
                </div>
            </div>
        </div>
    )
}
