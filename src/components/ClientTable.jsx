import React from 'react'
import { FaEye, FaEllipsisH, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ClientTable = () => {
  return (
     <div className={`my-[2rem] w-11/12 bg-white py-[1rem] rounded-md shadow-lg`}>
          <div className={`flex justify-between px-[2rem]`}>
               <h1 className={`font-bold`}>All Clients</h1>
               <div className='flex gap-[2rem]'>
                    <button className={`flex gap-2`}>
                         <span></span>
                         <span className={'font-semibold'}>Sort</span>
                    </button>
                    <button className={`flex gap-2`}>
                         <span></span>
                         <span className={'font-semibold'}>Filter</span>
                    </button>
               </div>
          </div>
          <table className={`w-full mt-4`}>
               <thead className={`border-b border-gray-600 text-start`}>
                    <tr className={`py-[2rem]`}>
                         <th className={`py-[1rem]`}>Clients Details</th>
                         <th className={`py-[1rem]`}>Sales</th>
                         <th className={`py-[1rem]`}>Detailed Report</th>
                         <th className={`py-[1rem]`}>Compony</th>
                    </tr>
               </thead>
               <tbody>
                    <tr className='border-b-2 border-gray-400 shadow-md hover:bg-slate-200'>
                         <td className='text-center p-2'>
                              <p className='font-bold'>Soy Restaurant</p>
                              <span className='text-sm text-gray-600'>Updated 1 day ago</span>
                         </td>
                         <td className='text-center p-2'>
                              <p className='font-bold'>232300 Frw</p>
                              <span className='text-sm text-gray-600'>On 23 21 1212</span>
                         </td>
                         <td className='text-center flex justify-center p-2 text-amber-500'><FaEye /></td>
                         <td className='text-center p-2 relative'>
                              <button className={`rounded-3xl px-3 py-1 bg-gray-400`}>RESTED</button>
                              <button className={`absolute right-3 rotate-90 rounded-full hover:bg-slate-400 p-1 text-lg`}><FaEllipsisH /></button>
                         </td>
                    </tr>
               </tbody>
               <tfoot>
                    <tr>
                         <td colSpan={"4"} className={`text-center text-2xl font-bold pt-[1rem]`}>
                              SUPA<span className='text-amber-500'>Menu</span>
                         </td>
                    </tr>
               </tfoot>
          </table>
          <div className={`flex justify-end px-[2rem] pt-[5rem] gap-[2rem]`}>
              Rows per page <div><select name="rows" id="rows" className={`outline-none`}>
               <option value="3">3</option>
               <option value="6">6</option>
               <option value="10">10</option>
               </select></div>
               <div className={`flex gap-2 items-center justify-center`}>
                    <p>1-6 of 12</p>
                    <FaChevronLeft />
                    <FaChevronRight />
               </div>
          </div>
     </div>
  )
}

export default ClientTable