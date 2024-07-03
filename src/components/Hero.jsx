import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
     <div className={`w-2/3`}>
          <h1 className={`text-2xl font-semibold`}>Register your Restaurant on SupaMenu</h1>
          <p className={`text-sm`}>for free and get more revenue!</p>
          <div className={`flex justify-between w-full my-[1rem]`}>
               <Link to={'/signup'} className={`px-[1rem] py-1 rounded-md text-sm bg-amber-500 hover:bg-amber-400 shadow-sm shadow-white`}>Register Your Restaurant</Link>
               <Link to={'/login'} className={`px-[1rem] py-1 rounded-md text-sm border border-white shadow-sm shadow-white hover:bg-gray-950`}>Restaurant already registered? Signin</Link>
          </div>
     </div>
  )
}

export default Hero