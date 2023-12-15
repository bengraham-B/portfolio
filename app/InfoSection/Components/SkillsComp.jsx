import React from 'react'

export default function SkillsComp() {
  return (
    <main>

        <div id="body-spacing" className="space-y-4">

            <div id="title-container" className='text-4xl text-primary space-y-8'>
                <h1>Skills</h1>
            </div>

            <div className="space-y-8">
                <section id="fronted-section" className='space-y-2'>
                    <h3 className='text-3xl underline underline-primary'>Frontend</h3>
                    <div id="skills-wrapper" className='flex justify-arund'>
                        <div className='flex  flex-row justify-around w-full'>

                            <div id="left" className='w-1/2 space-y-2 text-2xl'>
                                <p>Javascript</p>
                                <p>React</p>
                                <p>Sass</p>
                                <p>HTML</p>
                            </div>

                            <div id="right" className='w-1/2 bg-red600 space-y-2 text-2xl'>
                                <p>Tailwind</p>
                                <p>NextJS</p>
                                <p>Redux</p>
                                <p>CSS</p>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="fronted-section" className='space-y-2'>
                    <h3 className='text-3xl underline underline-primary'>Backend</h3>
                    <div id="skills-wrapper" className='flex justify-arund'>
                        <div className='flex  flex-row justify-around w-full'>

                            <div id="left" className='w-1/2 space-y-2 text-2xl'>
                                <p>Node.JS</p>
                                <p>JSON</p>
                                <p>REST API</p>
                                <p>SQL</p>
                            </div>

                            <div id="right" className='w-1/2 bg-red600 space-y-2 text-2xl'>
                                <p>MongoDB</p>
                                <p>Postgres SQL</p>
                                <p>Express.JS</p>
                                <p>CSS</p>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="fronted-section" className='space-y-2'>
                    <h3 className='text-3xl underline underline-primary'>Software</h3>
                    <div id="skills-wrapper" className='flex justify-arund'>
                        <div className='flex  flex-row justify-around w-full'>

                            <div id="left" className='w-1/2 space-y-2 text-2xl'>
                                <p>Python</p>
                                <p>Github</p>
                                <p>Potsman</p>
                                
                            </div>

                            <div id="right" className='w-1/2 bg-red600 space-y-2 text-2xl'>
                                <p>Docker</p>
                                <p>Git</p>
                                
                            </div>

                        </div>

                    </div>
                </section>
            </div>

          

        </div>

      
    </main>
  )
}
