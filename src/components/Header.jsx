import React from 'react'
import Info from './templates/Info'

export default function Header({ currentPage }) {
  return (
    <div className={`${currentPage != "landing" ? "text-black" : "bg-black text-white"} flex justify-between px-[3rem] py-[1rem] shadow-md`}>
      {currentPage == "landing" ? (<h2 className={`text-3xl font-bold text-white`}>Supa<span className={`text-amber-500`}>Menu</span></h2>) : (<h2 className={`text-xl font-bold text-black`}>{currentPage}</h2>)}
      <Info />
    </div>
  )
}
