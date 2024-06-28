import React from 'react'
import orders from '../../data/orders'
import sideInfo from '../../data/sideInfo1'

const OrderDiv = () => {
     const currentTime = new Date().toLocaleTimeString()
     const currentDate = new Date().toDateString()
  return (
     <div className={`bg-white rounded-md shadow-md p-[1rem] my-[2rem]`}>
          <header className={`flex justify-between w-full`}>
               <div className={`w-1/2`}>
                    <h1 className={`font-bold text-xl`}>Orders</h1>
                    <p className={`text-sm text-gray-400`}>As of {currentDate}, {currentTime}</p>
               </div>
               <div className={`flex gap-2 w-full text-white`}>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black bg-amber-600`}>New</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Delivered</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>Rejected</button>
                    <button className={`px-[1rem] py-[.8rem] rounded-xl border border-black text-amber-600`}>All</button>
               </div>
          </header>
          <section className={`flex w-full gap-5 my-[2rem] px-2 items-center`}>
               <div className={`w-full`}>
                    {orders.map((order) => (
                         <article key={order.id} className={`bg-slate-100 hover:bg-slate-200 p-[1rem] rounded-md my-4 flex gap-[1rem] justify-evenly items-center`}>
                              <div className={`text-amber-500 text-xl font-bold`}>Order {order.number}</div>
                              <div>
                                   <p className={`text-xs text-gray-400`}>{order.desc}</p>
                                   <h2 className={`font-semibold text-lg`}>{order.title}</h2>
                                   <div className={`font-semibold text-sm flex items-center gap-4`}><hr className={`border-amber-500 w-10 border-b-2`} /> Table {order.table} <hr className={`border-amber-500 w-10 border-b-2`} /></div>
                              </div>
                              <div className={`text-center`}>
                                   <p className={`text-xl text-amber-500 font-bold`}>Frw {order.price}</p>
                                   <div className={`font-semibold text-sm flex items-center gap-4`}><hr className={`border-amber-500 w-10 border-b-2`} /> Guest <hr className={`border-amber-500 w-10 border-b-2`} /></div>
                                   <p>{order.pNumber}</p>
                              </div>
                         </article>
                    ))}
               </div>
               <div className={`w-1/3`}>
                    <div className={`mb-[2rem]`}>
                         {sideInfo.map((info) => (
                              <article key={info.id} className={`border-b-2 border-gray-400 text-center py-2`}>
                                   <h2 className={`text-gray-400 text-sm`}>{info.title}</h2>
                                   <p className={`font-bold`}>{info.number}</p>
                              </article>
                         ))}
                    </div>
                    <div className={`w-full border-2 border-gray-400 rounded-md py-[2rem]`}>
                         <h1 className={`font-bold px-[1rem]`}>Add Item</h1>
                         <article className={`flex justify-between px-[1rem] py-4 border-b-2 border-gray-400 mt-[2rem]`}>
                              <p className={`text-gray-400`}>Create new menu item</p>
                              <button className={`p-1 rounded-md bg-gray-200 text-gray-600 text-2xl`}>&#43;</button>
                         </article>
                         <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                              <input type="checkbox" id="desert" />
                              <label htmlFor="desert" className={`text-sm`}>Desert</label>
                         </article>
                         <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                              <input type="checkbox" id="drink" />
                              <label htmlFor="drink" className={`text-sm`}>Drink</label>
                         </article>
                         <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                              <input type="checkbox" id="appet" />
                              <label htmlFor="appet" className={`text-sm`}>Appetizer</label>
                         </article>
                         <article className={`flex gap-3 items-center px-[1rem] py-4 border-b-2 border-gray-400`}>
                              <input type="checkbox" id="main" />
                              <label htmlFor="main" className={`text-sm`}>Main</label>
                         </article>
                         <article className={`flex gap-3 items-center px-[1rem] py-4`}>
                              <input type="checkbox" id="starter" />
                              <label htmlFor="starter" className={`text-sm`}>Starter</label>
                         </article>
                    </div>
               </div>
          </section>
     </div>
  )
}

export default OrderDiv