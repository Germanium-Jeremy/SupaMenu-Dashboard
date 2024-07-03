import React, { useState } from 'react'
import itemsAdd from '../data/itemsAdd'

const CreateMenu = () => {
     const [orderType, setOrderType] = useState(itemsAdd[0])
  return (
     <form className={`px-[2rem] p-[1rem] rounded-sm shadow-md w-full`}>
          <div className={`flex gap-4 w-full`}>
               {itemsAdd.map((category) => (
                    <button key={category.id} onClick={() => setOrderType(category)} 
                         className={`px-[1rem] py-[.4rem] rounded-xl border border-black ${orderType.id === category.id ? `border-black bg-amber-600 text-white` : `border-black bg-white`}`}
                    >{category.lable}</button>
               ))}
          </div>
          <div className={`flex flex-col gap-[.5rem] mt-[.6rem] w-full`}>
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Name</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 text-xs outline-none p-1 px-3`} placeholder='Menu name' />
               </div>
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Price</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 text-xs outline-none p-1 px-3`} placeholder='Rwf' />
               </div>
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Menu description</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 text-xs outline-none p-1 px-3`} placeholder='Ingredients' />
               </div>
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Image</label>
                    <input type="file" className={`w-full border-gray-600 border-b-2 text-xs outline-none p-1 px-3`} />
               </div>
          </div>
          <div className={`flex justify-center items-center mt-3`}>
               <button type="button" className={`px-[2rem] py-[.3rem] border-amber-500 border-2 text-sm font-bold rounded-lg`}>Add More</button>
          </div>
     </form>
  )
}

export default CreateMenu
