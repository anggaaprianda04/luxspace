import React from 'react'
import bgImg from '../assets/images/content/image-section-1.png'

export default function Hero() {
  return (
    <section className="flex items-center hero">
        <div className="absolute inset-0 z-20 flex flex-col justify-center w-full text-center md:relative md:w-1/2 hero-caption">
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                The Room <br className="" />You've Dreaming
            </h1>
                <h2 className="px-8 my-6 text-base tracking-wide md:px-0 md:text-lg">
                Kami menyediakan furniture berkelas yang
                <br className="hidden lg:block" />membuat ruangan terasa homey
                </h2>
                <div>
                <a
                    href="#browse-the-room"
                    className="flex-none inline-block px-8 py-3 mt-4 text-black transition duration-200 bg-pink-400 rounded-full hover:bg-black hover:text-pink-400"
                    >Explore Now</a
                >
                </div>
            </div>
            <div className="w-full md:relative md:w-1/2">
                <div className="relative bg-red-500 hero-image">
                <img
                    src={bgImg}
                    alt="hero 1"
                    className="absolute inset-0 object-cover object-center w-full h-full bg-opacity-30 md:relative"
                />
                </div>
      </div>
    </section>
  )
}
