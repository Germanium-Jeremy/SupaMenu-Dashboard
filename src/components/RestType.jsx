import React from 'react'

const RestType = () => {
  return (
     <div className={`p-[2rem] rounded-sm shadow-md w-full`}>
          <h2 className={`text-lg`}>Restaurant Type &#40;restaurant, pub, hotel, coffeeshop, other&#41;</h2>
          <div className={`flex flex-col gap-[1rem] mt-[1rem] w-full`}>
               <select className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`}>
                    <option value="Restaurant">Restaurant</option>
               </select>
               <select className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`}>
                    <option value="African">African</option>
               </select>
               <div className={``}>
                    <label htmlFor="">Opening Hours</label>
                    <div className='flex gap-[2rem]'>
                         <div className={`w-full rounded-md border-gray-600 border text-center p-1 px-3`}>
                              <label htmlFor="from" className={`mr-2 pr-3 border-r-2 border-black`}>From</label>
                              <input type='time' id='from' />
                         </div>
                         <div className={`w-full rounded-md border-gray-600 border text-center p-1 px-3`}>
                              <label htmlFor="to" className={`mr-2 pr-3 border-r-2 border-black`}>To</label>
                              <input type='time' id='to' />
                         </div>
                    </div>
               </div>
               <div className={``}>
                    <label htmlFor="">Upload Images &#40;pictures or logo&#41;</label>
                    <input type="file" className={`w-full rounded-md border-gray-600 border outline-none p-1 px-3`} placeholder='Mobile number' />
               </div>
          </div>
     </div>
  )
}

export default RestType