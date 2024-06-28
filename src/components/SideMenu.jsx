import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCog, FaUserCircle } from 'react-icons/fa';
import { FaTachometerAlt, FaBars, FaCircleNotch, FaUserFriends } from 'react-icons/fa'
const basePath = '/dashboard';
const menuLinks = [
     {
          id: 1,
          icon: <FaTachometerAlt />,
          text: "Overview",
          link: `${basePath}/overview`
     },
     {
          id: 2,
          icon: <FaUserFriends />,
          text: "Clients",
          link: `${basePath}/clients`
     },
     {
          id: 3,
          icon: <FaCircleNotch />,
          text: "Orders",
          link: `${basePath}/orders`
     },
     {
          id: 4,
          icon: <FaBars />,
          text: "Menu",
          link: `${basePath}/menu`
     }
];

const SideMenu = () => {
     const location = useLocation();
  return (
     <div className={`bg-black text-white fixed top-0 left-0 bottom-0 w-[18%] overscroll-y-auto`}>
          <div className='h-full w-full flex flex-col px-[2rem] py-[2rem] overscroll-y-auto'>
               <h2 className={`text-2xl text-center font-bold text-white`}>Supa<span className={`text-amber-500`}>Menu</span></h2>
               <div className={`py-[2rem] font-light mb-[4cm]`}>
                    {menuLinks.map((menuLink) => {
                         const isActive = location.pathname.startsWith(menuLink.link);
                         return (
                              <Link key={menuLink.id} to={menuLink.link}
                                   className={`flex gap-5 items-center px-2 py-[.5rem] ${isActive ? "border-l-4 font-normal bg-gray-950" : "hover:bg-gray-900"}`}
                              >
                                   <span>{menuLink.icon}</span>
                                   <span>{menuLink.text}</span>
                              </Link>
                         );
                    })}
               </div>
               <Link to={`#`}
                    className={`flex gap-3 items-center px-1 py-[.5rem] font-normal bg-gray-950 hover:bg-gray-900"}`}
               >
                    <span><FaCog /></span>
                    <span>Settings</span>
               </Link>
               <Link to={`#`}
                    className={`flex gap-3 items-center px-1 py-[.5rem] font-normal bg-gray-950 hover:bg-gray-900"}`}
               >
                    <span><FaUserCircle /></span>
                    <span>My Account</span>
               </Link>
          </div>
     </div>
  )
}

export default SideMenu