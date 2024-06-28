import React from 'react'
import divs from '../data/divs'

const OtherInfo = () => {
  return (
     <div className={`my-[2rem] flex gap-[2rem] mx-[2rem]`}>
          <div className={`grid grid-cols-2 gap-[2rem] w-full`}>
               {divs.map((div) => (
                    <div className={`rounded-md shadow-md py-[1rem] bg-white min-w-[15rem]`} key={div.id}>
                         <article className={`flex justify-between px-[1rem]`}>
                              <h1 className={`font-bold text-xl`}>{div.title}</h1>
                              <p className={`text-amber-500`}>View details</p>
                         </article>
                         <span className={`text-sm text-gray-400 px-[1rem]`}>Sales</span>
                         <article className={`flex justify-between px-[1rem] py-3 border-b-2 border-gray-400`}>
                              <h1 className={`font-bold text-md`}>{div.owner}</h1>
                              <p className={`text-gray-500`}>{div.number}</p>
                         </article>
                         <article className={`flex justify-between px-[1rem]`}>
                              <h1 className={`font-bold text-md`}>{div.addr}</h1>
                              <p className={`text-gray-500`}>{div.num2}</p>
                         </article>
                    </div>
               ))}
          </div>
          <div className={`rounded-md shadow-md py-[1rem] bg-white min-w-[15rem] w-1/2`}>
               <article className={`flex justify-between px-[1rem]`}>
                    <h1 className={`font-bold text-lg`}>Create</h1>
                    <p className={`text-amber-500`}>View all</p>
               </article>
               <span className={`text-sm text-gray-400 px-[1rem]`}>Sales</span>
               <article className={`flex justify-between px-[1rem] py-3 border-b-2 border-gray-400`}>
                    <h1 className={`font-bold text-md`}>Create</h1>
                    <p className={`text-gray-500 p-1 bg-gray-100 rounded-md text-2xl`}>&#43;</p>
               </article>
               <article className={`flex justify-between px-[1rem] py-3 border-b-2 border-gray-400`}>
                    <div className={`flex gap-[.5rem]`}>
                         <input type="checkbox" id="rest" />
                         <label htmlFor="rest" className={`text-sm`}>Restaurant</label>
                    </div>
                    <button className={`px-3 py-[.1rem] rounded-md bg-amber-500 text-white text-sm`}>New</button>
               </article>
               <article className={`flex justify-between px-[1rem] py-3 border-b-2 border-gray-400`}>
                    <div className={`flex gap-[.5rem]`}>
                         <input type="checkbox" id="hotel" />
                         <label htmlFor="hotel" className={`text-sm`}>Hotels</label>
                    </div>
                    <button className={`px-3 py-[.1rem] rounded-md bg-amber-500 text-white text-sm`}>New</button>
               </article>
               <article className={`flex justify-between px-[1rem] py-3 border-b-2 border-gray-400`}>
                    <div className={`flex gap-[.5rem]`}>
                         <input type="checkbox" id="pubs" />
                         <label htmlFor="pubs" className={`text-sm`}>Pubs</label>
                    </div>
                    <button className={`px-3 py-[.1rem] rounded-md bg-gray-300 text-white text-sm`}>DEFAULT</button>
               </article>
          </div>
     </div>
  )
}

export default OtherInfo