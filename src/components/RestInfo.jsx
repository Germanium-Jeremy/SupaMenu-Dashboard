import React from 'react'

const RestInfo = () => {
  return (
     <div className={`p-[2rem] rounded-sm shadow-md w-full`}>
          <h2 className={`text-lg`}>Restaurant Information</h2>
          <div className={`flex flex-col gap-[1rem] mt-[1rem] w-full`}>
               <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Restaurant Name' />
               <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Restaurant Complete Name' />
               <div className={``}>
                    <label htmlFor="">Contacts number @ Restaurant</label>
                    <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Mobile number' />
               </div>
               <div className={``}>
                    <label htmlFor="">Restaurant owner details</label>
                    <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Mobile number' />
               </div>
               <div className={`flex gap-[1rem] justify-between`}>
                    <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Owner' />
                    <input type="text" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Restaurant Owner Email' />
               </div>
          </div>
     </div>
  )
}

export default RestInfo