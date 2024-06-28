import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     <div className={`bg-amber-500 h-screen flex w-full justify-center items-center px-[6rem]`}>
          <div className='flex justify-center items-center w-full'>
               <h1 className={`text-5xl font-bold`}>Supa<span className={`text-white`}>Menu</span></h1>
          </div>
          <form className={`rounded-lg bg-white h-[92%] w-full px-[1rem] py-[4rem]`}>
               <h2 className={`text-gray-400 text-2xl font-semibold text-center`}>Welcome</h2>
               <h2 className={`text-2xl text-center font-bold mt-5`}>Login to SupaMenu</h2>
               <p className={`text-gray-400 text-center`}>Enter your Email and Password below</p>
               <section className={`pt-10 px-[1rem]`}>
                    <div className={`flex flex-col mb-[1rem]`}>
                         <label htmlFor="email" className={`block text-xl text-gray-500`}>Email</label>
                         <input type="email" id='email' className='border-2 outline-none text-gray-800 w-full p-2' placeholder='Email Address' autoComplete='off' required />
                    </div>
                    <div className={`flex flex-col`}>
                         <label htmlFor="password" className={`block text-xl text-gray-500`}>Password</label>
                         <input type="password" id='password' className='border-2 outline-none text-gray-800 w-full p-2' placeholder='Password' autoComplete='off' required />
                    </div>
                    <button type='submit' className={`mt-[1rem] py-2 text-center text-white font-bold bg-amber-500 hover:bg-amber-400 w-full rounded-md shadow-md`}>Log in</button>
               </section>
               <h2 className={`text-gray-500 text-center py-3`}>Don't have an account? <Link to={'/signup'} className={`text-blue-700 font-semibold`}>Sign up</Link> </h2>
               <h2 className={`text-gray-500 text-center py-3`}>Forgot your password/login <Link to={'/reset'} className={`text-blue-700 font-semibold`}>Reset</Link> </h2>
          </form>
     </div>
  )
}

export default Login