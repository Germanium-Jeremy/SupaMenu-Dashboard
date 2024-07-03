import React from 'react'

const RestInfo = () => {
  return (
     <div className={`p-[1rem] px-[2rem] rounded-sm shadow-md w-full`}>
          <h2 className={`text-md`}>Restaurant Information</h2>
          <div className={`flex flex-col gap-[.7rem] mt-[.5rem] w-full`}>
               <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Restaurant Name' />
               <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Restaurant Complete Name' />
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Contacts number @ Restaurant</label>
                    <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Mobile number' />
               </div>
               <div className={``}>
                    <label htmlFor="" className={`text-sm`}>Restaurant owner details</label>
                    <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Mobile number' />
               </div>
               <div className={`flex gap-[1rem] justify-between`}>
                    <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Owner' />
                    <input type="text" className={`w-full rounded-md border-gray-600 border text-sm outline-none p-1 px-3`} placeholder='Restaurant Owner Email' />
               </div>
          </div>
     </div>
  )
}

export default RestInfo