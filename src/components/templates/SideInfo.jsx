import React from 'react'
import sideInfo from '../../data/sideInfo2'

const SideInfo = () => {
  return (
     <div className={`border-l-2 border-gray-300`}>
          {sideInfo.map((info) => (
               <article key={info.id} className={`border-b-2 border-gray-300 p-[1rem] text-center`}>
                    <h2 className={`text-sm text-gray-500`}>{info.title}</h2>
                    <p className={`font-bold text-lg`}>{info.number}</p>
               </article>
          ))}
     </div>
  )
}

export default SideInfo