import React from 'react'
import Header from './Header'
import AddClient from './templates/AddClient'
import ClientTable from './ClientTable'

const Client = () => {
  return (
     <div className=''>
          <Header currentPage={"Clients"} />
          <div className='flex items-center justify-center py-[1rem]'>
               <AddClient />
          </div>
          <div className={`flex flex-col items-center`}>
               <ClientTable />
          </div>
     </div>
  )
}

export default Client