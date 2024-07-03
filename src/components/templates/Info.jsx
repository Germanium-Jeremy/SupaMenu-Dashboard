import React from 'react'
import { FaSearch, FaBell } from 'react-icons/fa'
import User from '../../assets/user.png'

const Info = () => {
  return (
<div className={`flex gap-[2rem]`}>
     <div className={`flex border-r-2 border-white gap-[1rem] pr-[2rem] items-center`}>
          <button className={`text-sm`}>
               <FaSearch />
          </button>
          <button className={`relative text-sm`}>
               <span className='absolute -top-1 -right-1 rounded-full bg-blue-800 h-3 w-3 border border-white'></span>
               <FaBell />
          </button>
     </div>
     <div className={`flex items-center`}>
          <p className={`text-xs pr-3`}>Jeremy NK</p>
          <img src={User} alt="user" className={`h-7 w-7 rounded-full p-[.1rem] border-2 border-white`} />
     </div>
</div>
  )
}

export default Info