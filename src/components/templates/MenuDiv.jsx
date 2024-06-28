import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import items from '../../data/items'

const MenuDiv = () => {
     const currentTime = new Date().toLocaleTimeString()
     const currentDate = new Date().toDateString()
  return (
     <div className={`bg-white rounded-md shadow-md p-[1rem] my-[2rem]`}>
          <header className={`flex justify-between w-full`}>
               <div className={`w-1/2`}>
                    <h1 className={`font-bold text-xl`}>Menus</h1>
                    <p className={`text-sm text-gray-400`}>As of {currentDate}, {currentTime}</p>
               </div>
               <div className={`flex gap-2 w-full text-white`}>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black bg-amber-600`}>Drink</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Starter</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Appetizer</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Desert</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Main</button>
               </div>
          </header>
          <section className={`flex w-full gap-5 my-[2rem] pl-[4cm] items-center`}>
               <div className={`w-full`}>
                    {items.map((item) => (
                         <article key={item.id} className={`bg-slate-200 p-[1rem] rounded-md my-4 flex gap-[1rem] items-center`}>
                              <img src={item.image} alt={item.title} className={`w-24 h-14 rounded-md`} />
                              <div className={`flex flex-col gap-0`}>
                                   <p className={`text-xs text-gray-500`}>{item.desc}</p>
                                   <h2 className={`font-bold`}>{item.title} - 12.5</h2>
                                   <p className={`text-lg text-amber-500 font-bold`}>Frw {item.price}</p>
                              </div>
                         </article>
                    ))}
               </div>
               <div className={`w-full border-2 border-gray-400 rounded-md py-[2rem]`}>
                    <h1 className={`font-bold px-[1rem]`}>Add Item</h1>
                    <article className={`flex justify-between px-[1rem] py-4 border-b-2 border-gray-400 mt-[2rem]`}>
                         <p className={`text-gray-400`}>Create new menu item</p>
                         <button className={`p-1 rounded-md bg-gray-200 text-gray-600 text-2xl`}>&#43;</button>
                    </article>
                    <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                         <input type="checkbox" id="desert" />
                         <label htmlFor="desert" className={`text-sm`}>Desert</label>
                    </article>
                    <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                         <input type="checkbox" id="drink" />
                         <label htmlFor="drink" className={`text-sm`}>Drink</label>
                    </article>
                    <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                         <input type="checkbox" id="appet" />
                         <label htmlFor="appet" className={`text-sm`}>Appetizer</label>
                    </article>
                    <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                         <input type="checkbox" id="main" />
                         <label htmlFor="main" className={`text-sm`}>Main</label>
                    </article>
                    <article className={`flex gap-3 items-center px-[1rem] py-4`}>
                         <input type="checkbox" id="starter" />
                         <label htmlFor="starter" className={`text-sm`}>Starter</label>
                    </article>
               </div>
          </section>
          <div className={`flex justify-center text-amber-500 mb-5`}>
               <button className={`flex gap-10 items-center`}>More <FaChevronRight /></button>
          </div>
     </div>
  )
}

export default MenuDiv