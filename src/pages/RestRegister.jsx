import React, { useState } from 'react'
import Header from '../components/Header'
import RestInfo from '../components/RestInfo'
import RestType from '../components/RestType'
import CreateMenu from '../components/CreateMenu'

const RestRegister = () => {
     const restMains = [
          {
               id: 1,
               heading: "Restaurant Information",
               desc: "Restaurant name, address, details, owner details.",
               forms: <RestInfo />
          },
          {
               id: 2,
               heading: "Restaurant Type & Timing",
               desc: "Establishment & cuisine type, opening hours.",
               forms: <RestType />
          },
          {
               id: 3,
               heading: "Create Your Menu",
               desc: "Menu, restaurant, food images.",
               forms: <CreateMenu />
          }
     ]
     const [activeLink, setActiveLink] = useState(restMains[0].id)
     const [activeForm, setActiveForm] = useState(restMains[0].forms)
  return (
     <div>
          <Header currentPage={"Register Restaurant"} />
          <main className='flex w-full px-[7rem] py-10'>
               <div className={`w-2/3`}>
                    <div className={`shadow-md rounded-md w-4/5`}>
                         <h1 className={`font-bold px-10 py-2`}>1. Create Your Restaurant Profile</h1>
                         <div className={`py-[1rem] gap-[2rem] flex flex-col`}>
                              {restMains.map((rest) => (
                                   <button key={rest.id} className={`flex flex-row gap-2 items-center border-l-4 ${activeLink === rest.id ? "border-amber-600" : "border-transparent"}`} onClick={() => {
                                        setActiveLink(rest.id)
                                        setActiveForm(rest.forms)
                                   }}>
                                        <span className={`rounded-full text-2xl text-white min-w-10 min-h-10 ${activeLink === rest.id ? "bg-amber-600" : "bg-gray-500"} flex justify-center items-center ml-[1.5rem]`}>{rest.id}</span>
                                        <div className={`flex flex-col px-[1rem]`}>
                                             <h3 className='font-bold'>{rest.heading}</h3>
                                             <p className={`text-gray-600 text-sm`}>{rest.desc}</p>
                                        </div>
                                   </button>
                              ))}
                         </div>
                    </div>
               </div>
               <div className={`w-full`}>
                    {activeForm}
               </div>
          </main>
     </div>    
  )
}

export default RestRegister