import React from 'react'
import Button from './Button'

export default function Header() {
    return (
        <div className='flex bg-pink-700'>
            <div className='w-1/2'></div>
            <div className='w-1/2 flex justify-around items-center'>
                <Button name={"Skills"}/>
                <Button name={"Exprience"}/>
                <Button name={"Project"}/>
            </div>
        </div>
    )
}
