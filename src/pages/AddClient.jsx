import React from 'react'
import { Link } from 'react-router-dom'

const AddClient = () => {
  return (
<div className={`bg-amber-500 flex w-full justify-center py-[1rem] items-center px-[7rem]`}>
     <div className='flex justify-center items-center w-full'>
          <h1 className={`text-5xl font-bold`}>Supa<span className={`text-white`}>Menu</span></h1>
     </div>
     <form className={`rounded-lg bg-white h-[95%] w-full px-[1rem] py-[1rem]`}>
          <h2 className={`text-xl text-center font-bold mb-2`}>Client</h2>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="cnames" className={`block text-sm text-gray-500`}>Client</label>
               <input type="text" id='cnames' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' placeholder='Client Name' autoComplete='off' required />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="category" className={`block text-sm text-gray-500`}>Category</label>
               <input type="text" id='category' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' placeholder='Change Category' autoComplete='off' required />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="repre" className={`block text-sm text-gray-500`}>Representative</label>
               <input type="text" id='repre' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' required placeholder='Names' />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="date" className={`block text-sm text-gray-500`}>Date Of Creation</label>
               <input type="date" id='date' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' autoComplete='off' required />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="email" className={`block text-sm text-gray-500`}>Email</label>
               <input type="email" id='email' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' placeholder='Email' autoComplete='off' required />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="tel" className={`block text-sm text-gray-500`}>Phone</label>
               <input type="tel" id='tel' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' placeholder='Phone number' autoComplete='off' required />
          </div>
          <div className={`flex flex-col mb-[.2rem]`}>
               <label htmlFor="bank" className={`block text-sm text-gray-500`}>Bank Account &#40;IBAN&#41;</label>
               <input type="text" id='bank' className='border outline-none text-gray-800 text-sm w-full p-1 indent-2 rounded-md' placeholder='Bank Account' autoComplete='off' required />
          </div>
          <button type='submit' className={`mt-[.4rem] py-2 text-center text-white text-xs font-bold bg-amber-500 hover:bg-amber-500 w-full rounded-md shadow-md`}>Add Client</button>
     </form>
</div>
  )
}

export default AddClient