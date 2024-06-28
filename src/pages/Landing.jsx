import React from 'react'
import Hero from '../components/Hero'
import '../App.css'
import Working from '../components/Working'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div className={``}>
      <Header currentPage={"landing"} />
      <div className={`bg-black w-full flex flex-col justify-center items-center text-white py-[3rem]`}>
        <Hero />
      </div>
      <Working />
      <Footer />
    </div>
  )
}
