import React from 'react'

const CreateMenu = () => {
  return (
     <div className={`p-[2rem] rounded-sm shadow-md w-full`}>
          <div className={`flex gap-4 w-full`}>
               <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Drink</button>
               <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Starter</button>
               <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Appetizer</button>
               <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Desert</button>
               <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Main</button>
          </div>
          <div className={`flex flex-col gap-[1rem] mt-[1rem] w-full`}>
               <div className={``}>
                    <label htmlFor="">Name</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 outline-none p-1 px-3`} placeholder='Menu name' />
               </div>
               <div className={``}>
                    <label htmlFor="">Price</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 outline-none p-1 px-3`} placeholder='Rwf' />
               </div>
               <div className={``}>
                    <label htmlFor="">Menu description</label>
                    <input type="text" className={`w-full border-gray-600 border-b-2 outline-none p-1 px-3`} placeholder='Ingredients' />
               </div>
               <div className={``}>
                    <label htmlFor="">Image</label>
                    <input type="file" className={`w-full border-gray-600 border-b-2 outline-none p-1 px-3`} />
               </div>
          </div>
          <div className={`flex justify-center items-center mt-5`}>
               <button type="submit" className={`px-[2rem] py-[.7rem] border-amber-500 border-2 font-bold rounded-lg`}>Add More</button>
          </div>
     </div>
  )
}

export default CreateMenu
