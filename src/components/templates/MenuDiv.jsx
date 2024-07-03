import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import items from '../../data/items'
import itemsAdd from '../../data/itemsAdd'

const MenuDiv = () => {
     const currentTime = new Date().toLocaleTimeString()
     const currentDate = new Date().toDateString()
     const [orderType, setOrderType] = useState(itemsAdd[0])
  return (
     <div className={`bg-white rounded-md shadow-md p-[1rem] my-[2rem]`}>
          <header className={`flex justify-between w-full items-center`}>
               <div className={`w-1/2`}>
                    <h1 className={`font-bold text-lg`}>Menus</h1>
                    <p className={`text-xs text-gray-400`}>As of {currentDate}, {currentTime}</p>
               </div>
               <div className={`flex gap-2 w-full text-black`}>
                    {itemsAdd.map((category) => (
                         <button key={category.id} onClick={() => setOrderType(category)} 
                         className={`px-[1rem] py-[.4rem] rounded-xl border border-black ${orderType.id === category.id ? `border-black bg-amber-600 text-white` : `border-black bg-white`}`}
                         >{category.lable}</button>
                    ))}
               </div>
          </header>
          <section className={`flex w-full gap-5 my-[2rem] pl-[4cm] items-center`}>
               <div className={`w-full`}>
                    {items.map((item) => (
                         <article key={item.id} className={`bg-slate-200 p-[1rem] rounded-md my-2 flex gap-[1rem] items-center`}>
                              <img src={item.image} alt={item.title} className={`w-20 h-14 rounded-md`} />
                              <div className={`flex flex-col gap-0`}>
                                   <p className={`text-xs text-gray-500`}>{item.desc}</p>
                                   <h2 className={`font-bold`}>{item.title} - 12.5</h2>
                                   <p className={`text-sm text-amber-500 font-bold`}>Frw {item.price}</p>
                              </div>
                         </article>
                    ))}
               </div>
               <div className={`w-full border-2 border-gray-400 rounded-md py-[1.2rem]`}>
                    <h1 className={`font-bold px-[1rem]`}>Add Item</h1>
                    <article className={`flex justify-between px-[1rem] py-2 border-b-2 border-gray-400 mt-[1rem]`}>
                         <p className={`text-gray-400`}>Create new menu item</p>
                         <button className={`p-1 rounded-md bg-gray-200 text-gray-600 text-2xl`}>&#43;</button>
                    </article>
                    {itemsAdd.map((item) => (
                         <article className={`flex gap-3 items-center px-[1rem] py-2 border-b-2 border-gray-400 last:border-none`} key={item.id}>
                              <input type="checkbox" id={item.id} />
                              <label htmlFor={item.id} className={`text-sm`}>{item.lable}</label>
                         </article>
                    ))}
               </div>
          </section>
          <div className={`flex justify-center text-amber-500 mb-5`}>
               <button className={`flex gap-10 items-center`}>More <FaChevronRight /></button>
          </div>
     </div>
  )
}

export default MenuDiv