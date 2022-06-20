import React from 'react'
import Animation from './animation'

export default function Hero() {
  return (
    <>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Hi, I&apos;m JinHyuk Moon
            </h1>
            <p className="mb-8 leading-relaxed">Intellectually curios individual with a passion for learning new technologies and a strong interest in software development and UI/3D modeling. I am a highly motivated and willing to leran new skills. Seeking a Software internship position.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </div>
    </>
  )
}
