import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddClient = () => {
  return (
     <Link to={'../../addClient'} className={`w-1/2 rounded-md shadow-md relative p-[1rem]`}>
          <h2 className={`font-bold text-xl`}>New Client</h2>
          <p className={`text-gray-600 mt-5`}>Add New Client</p>
          <FaPlus className={`absolute right-[2rem] bottom-[1rem]`} />
     </Link>
  )
}

export default AddClient