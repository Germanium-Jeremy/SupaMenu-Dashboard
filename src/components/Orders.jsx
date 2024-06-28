import React from 'react'
import Header from './Header'
import OrderDiv from './templates/OrderDiv'

const Orders = () => {
  return (
     <div>
          <Header currentPage={"Orders"} />
          <main className={`p-[1rem]`}>
               <OrderDiv />
          </main>
     </div>
  )
}

export default Orders