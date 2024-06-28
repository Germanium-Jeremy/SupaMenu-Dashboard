import React from 'react'
import SideMenu from '../components/SideMenu'
import OverView from '../components/OverView'
import Client from '../components/Client'
import Menu from '../components/Menu'
import Orders from '../components/Orders'
import { Routes, Route, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
     <div className={``}>
          <SideMenu />
          <div className='w-[82%] bg-slate-100 float-right'>
               <Routes>
                    <Route path='overview' exact index element={<OverView />} />
                    <Route path='clients' element={<Client />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='orders' element={<Orders />} />
               </Routes>
               <Outlet />
          </div>
     </div>
  )
}

export default Dashboard