import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
     <div className={`bg-amber-500 h-screen flex w-full justify-center pt-2 items-center px-[7rem]`}>
          <div className='flex justify-center items-center w-full'>
               <h1 className={`text-5xl font-bold`}>Supa<span className={`text-white`}>Menu</span></h1>
          </div>
          <form className={`rounded-lg bg-white h-[95%] w-full px-[1rem] pt-[1rem]`}>
               <h2 className={`text-xl text-center font-bold mb-2`}>Signup</h2>
               <div className={`flex flex-col mb-[.4rem]`}>
                    <label htmlFor="first" className={`block text-lg text-gray-500`}>First Name</label>
                    <input type="text" id='first' className='border-2 outline-none text-gray-800 w-full p-1 indent-2 rounded-sm' placeholder='First Name' autoComplete='off' required />
               </div>
               <div className={`flex flex-col mb-[.4rem]`}>
                    <label htmlFor="last" className={`block text-lg text-gray-500`}>Last Name</label>
                    <input type="text" id='last' className='border-2 outline-none text-gray-800 w-full p-1 indent-2 rounded-sm' placeholder='Last Name' autoComplete='off' required />
               </div>
               <div className={`flex flex-col mb-[.4rem]`}>
                    <label htmlFor="phone" className={`block text-lg text-gray-500`}>Phone</label>
                    <input type="tel" id='phone' className='border-2 outline-none text-gray-800 w-full p-1 indent-2 rounded-sm' required />
               </div>
               <div className={`flex flex-col mb-[.4rem]`}>
                    <label htmlFor="email" className={`block text-lg text-gray-500`}>Email</label>
                    <input type="email" id='email' className='border-2 outline-none text-gray-800 w-full p-1 indent-2 rounded-sm' placeholder='Email Address' autoComplete='off' required />
               </div>
               <div className={`flex flex-col mb-[.4rem]`}>
                    <label htmlFor="password" className={`block text-lg text-gray-500`}>Password</label>
                    <input type="password" id='password' className='border-2 outline-none text-gray-800 w-full p-1 indent-2 rounded-sm' placeholder='Password' autoComplete='off' required />
               </div>
               <button type='submit' className={`mt-[1rem] py-2 text-center text-white font-bold bg-amber-500 hover:bg-amber-500 w-full rounded-md shadow-md`}>Sign up</button>
               <h2 className={`text-gray-500 text-center py-3`}>Already have an account? <Link to={'/login'} className={`text-blue-700 font-semibold`}>Login</Link> </h2>
          </form>
     </div>
  )
}

export default Signup
