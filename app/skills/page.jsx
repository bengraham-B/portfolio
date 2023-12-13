import React from 'react'
import Image from 'next/image'

import SkillComp from './SkillComp'

export default function Page() {
    return (
        <section className=' flex flex-col'>

            <div id="title" className='flex items-center justify-center my-12'>
                <h1 className='text-7xl'>Skills</h1>
            </div>

            <div className='flex justify-around w-full'>
                <div id="Frontend" className='w-1/2 flex flex-col items-center'>

                    <div>
                        <h1 className='text-6xl text-primary pb-12'>Frontend</h1>
                    </div>

                    <div id="Skills Section" className='w-full bg-prmary flex justify-around px-4 border-r border-primary'>
                        <div id="right" className='flex flex-col w-1/2'>
                            <SkillComp skill="React.JS" />
                            <SkillComp skill="Next.JS" />
                            <SkillComp skill="Mode.JS" />
                            <SkillComp skill="javascript" />
                        </div>
                        <div id="left" className='flex flex-col w-1/2'>
                            <SkillComp skill="SASS" />
                            <SkillComp skill="Tailwind" />
                            <SkillComp skill="Redux" />
                            <SkillComp skill="HTML & CSS" />
                        </div>
                    </div>

                </div>
                <div id="Backend" className='w-1/2 flex flex-col items-center'>

                    <div>
                        <h1 className='text-6xl text-primary pb-12'>Backend</h1>
                    </div>

                    <div id="Skills Section" className='w-full bg-prmary flex justify-around px-4'>
                        <div id="right" className='flex flex-col w-1/2'>
                            <SkillComp skill="Express" />
                            <SkillComp skill="Python" />
                            <SkillComp skill="MongoDB" />
                            <SkillComp skill="Postgres"/>
                        </div>
                        <div id="left" className='flex flex-col w-1/2'>
                            <SkillComp skill="SQL" />
                            <SkillComp skill="API" />
                            <SkillComp skill="Postman" />
                        </div>
                    </div>

                </div>                
            </div>
        </section>
    )
}
