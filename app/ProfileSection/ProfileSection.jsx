'use client'
import React from 'react'
import Image from 'next/image'

export default function ProfileSection() {
    return (
        <div className='min-h-screen bg-bacground text-primary'>

            <div className=" h-screen flex justify-center content-center items-center">
                <div id="profile-card" className="flex flex-col">
                   
                    <Image width={400} height={400} src="/profile.jpg" style={{borderRadius: "100px"}}/>
                    
                    <div id="text-section" className='my-6 space-y-4'>
                        <h1  className='font-light text-6xl text-center'>Ben Graham</h1>
                        <h1  className='text-3xl text-center'>Full Stack Developer</h1>
                        <h1  className='text-3xl text-center'>Cape Town</h1>
                    </div>

                    {/* <py-script>
                        print("Python3")
                    </py-script> */}

                </div>
            </div>
        
        </div>
    )
}
