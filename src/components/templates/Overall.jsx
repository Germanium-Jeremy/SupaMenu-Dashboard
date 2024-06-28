import React from 'react'
import overallData from '../../data/overAllData'

const Overall = () => {
  return (
     <section className='flex py-6 mx-[2rem]'>
          <div className={`flex gap-[2rem]`}>
               {overallData.map((data) => (
                    <article className={`border-2 border-amber-500 p-3 px-12 rounded-md bg-white text-center`} key={data.id}>
                         <h2 className={`text-[16px] text-gray-800`}>{data.title}</h2>
                         <p className={`text-lg font-bold`}>{data.number}</p>
                    </article>
               ))}
          </div>
     </section>
  )
}

export default Overall