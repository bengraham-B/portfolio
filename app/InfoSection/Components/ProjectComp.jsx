import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectComp() {
  return (
    <div className="my-6">
        <div>
            <h1 className='text-primary text-4xl'>Projects</h1>
        </div>
        <section id="project-mern-todo-app" className='my-4'>
            <Link href={"https://todo-app-client-8j2peagr8-bengraham-b.vercel.app"}> 
                <div id="title-container">
                    <h1 className='text-4xl text-white'>Mern Todo App</h1>
                </div>

                <div className='flex flex-col border border-primary rounded p-4'>
                    <div id="image-container">
                        <Image src={"/project-one.png"} width={300} height={300}/>
                    </div>
                    <div id="text-container" className='text-lg'>
                        <p>This is a web based application which is built in the MERN stack.</p>
                        <p>This application offers user authentication</p>
                        <p>This project is uplaoded on Vercel</p>

                    </div>

                
                </div>
            </Link>
        </section>
       
        <section id="goose-reloaded" className='my-4'>
            <Link href={"https://goose-reloaded-frontend-j2zfi7cqx-bengraham-b.vercel.app/auth/login"}> 
                <div id="title-container">
                    <h1 className='text-4xl text-white'>Reloading App for Sport Shooters</h1>
                </div>

                <div className='flex flex-col border border-primary rounded p-4'>
                    <div id="image-container">
                        <Image src={"/project-two.png"} width={300} height={300}/>
                    </div>
                    <div id="text-container" className='text-lg'>
                        <p>This is a full stack web application which allows soprts shooters to record their reloadig paramaters.</p>
                        <p>This is a web based application which is built in the MERN stack.</p>
                        <p>This application offers user authentication</p>
                        <p>This project is uplaoded on Vercel</p>

                    </div>

                
                </div>
            </Link>
        </section>

    </div>
  )
}
