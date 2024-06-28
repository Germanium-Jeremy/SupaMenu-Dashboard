import React from 'react'
import Header from './Header'
import MenuDiv from './templates/MenuDiv'

const Menu = () => {
  return (
     <div className={`bg-slate-100`}>
          <Header currentPage={"Menu"} />
          <main className={`p-[1rem]`}>
               <MenuDiv />
          </main>
     </div>
  )
}

export default Menu
