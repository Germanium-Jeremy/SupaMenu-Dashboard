import React, { useState } from 'react'
import orders from '../../data/orders'
import sideInfo from '../../data/sideInfo1'
import itemsAdd from '../../data/itemsAdd'
import { orderTypes } from '../../data/itemsAdd'

const OrderDiv = () => {
     const currentTime = new Date().toLocaleTimeString()
     const currentDate = new Date().toDateString()
     const [orderType, setOrderType] = useState(orderTypes[0])
  return (
     <div className={`bg-white rounded-md shadow-md p-[1rem] my-[2rem]`}>
          <header className={`flex justify-between items-center w-full`}>
               <div className={`w-1/2`}>
                    <h1 className={`font-bold text-lg`}>Orders</h1>
                    <p className={`text-xs text-gray-400`}>As of {currentDate}, {currentTime}</p>
               </div>
               <div className={`flex gap-2 w-full text-black`}>
                    {orderTypes.map((category) => (
                         <button key={category.id} onClick={() => setOrderType(category)}
                         className={`px-[1rem] py-[.4rem] rounded-xl border ${orderType.id === category.id ? `border-black bg-amber-600 text-white` : `border-black bg-white`}`}
                         >{category.label}</button>
                    ))}
               </div>
          </header>
          <section className={`flex w-full gap-5 my-[2rem] px-2 items-center`}>
               <div className={`w-full`}>
                    {orders.map((order) => (
                         <article key={order.id} className={`bg-slate-100 hover:bg-slate-200 p-[1rem] rounded-md my-2 flex gap-[1rem] justify-evenly items-center`}>
                              <div className={`text-amber-500 text-lg font-bold`}>Order {order.number}</div>
                              <div>
                                   <p className={`text-xs text-gray-400`}>{order.desc}</p>
                                   <h2 className={`font-semibold text-md`}>{order.title}</h2>
                                   <div className={`font-semibold text-sm flex items-center gap-4`}><hr className={`border-amber-500 w-10 border-b-2`} /> Table {order.table} <hr className={`border-amber-500 w-10 border-b-2`} /></div>
                              </div>
                              <div className={`text-center`}>
                                   <p className={`text-md text-amber-500 font-bold`}>Frw {order.price}</p>
                                   <div className={`font-semibold text-xs flex items-center gap-1`}><hr className={`border-amber-500 w-10 border-b-2`} /> Guest <hr className={`border-amber-500 w-10 border-b-2`} /></div>
                                   <p className={`text-xs`}>{order.pNumber}</p>
                              </div>
                         </article>
                    ))}
               </div>
               <div className={`w-1/3`}>
                    <div className={`mb-[1rem]`}>
                         {sideInfo.map((info) => (
                              <article key={info.id} className={`border-b-2 border-gray-400 text-center py-2`}>
                                   <h2 className={`text-gray-400 text-xs`}>{info.title}</h2>
                                   <p className={`font-bold text-sm`}>{info.number}</p>
                              </article>
                         ))}
                    </div>
                    <div className={`w-full border-2 border-gray-400 rounded-md py-[1.2rem]`}>
                         <h1 className={`font-bold px-[1rem]`}>Add Item</h1>
                         <article className={`flex justify-between px-[1rem] py-4 border-b-2 border-gray-400 mt-[2rem]`}>
                              <p className={`text-gray-400 text-sm`}>Create new menu item</p>
                              <button className={`p-1 rounded-md bg-gray-200 text-gray-600 text-2xl`}>&#43;</button>
                         </article>
                         {itemsAdd.map((item) => (
                              <article key={item.id} className={`flex gap-3 items-center px-[1rem] py-2 border-b-2 border-gray-400 last-of-type:border-none`}>
                                   <input type="checkbox" id={item.lable} />
                                   <label htmlFor={item.lable} className={`text-xs`}>{item.lable}</label>
                              </article>
                         ))}
                    </div>
               </div>
          </section>
     </div>
  )
}

export default OrderDiv