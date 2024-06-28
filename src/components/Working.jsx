import React from 'react'
import { FaUserEdit, FaDeaf, FaCalendarTimes } from 'react-icons/fa'
import { AiOutlineFork} from 'react-icons/ai'

const Working = () => {
     const steps = [
          {
               id: 1,
               icon: <FaUserEdit className={`text-amber-500 text-4xl`} /> ,
               h2: "Step 1",
               desc: "Register your restaurant"
          },
          {
               id: 2,
               icon: <AiOutlineFork className={`text-amber-500 text-4xl`} /> ,
               h2: "Step 2",
               desc: "Create your restaurant profile and create menu items"
          },
          {
               id: 3,
               icon: <FaCalendarTimes className={`text-amber-500 text-4xl`} /> ,
               h2: "Step 3",
               desc: "Start recieving orders"
          }
     ]
  return (
     <div className='justify-center items-center flex flex-col py-[1rem] bg-img bg-cover'>
          <h1 className={`text-2xl font-semibold`}>How it Works</h1>
          <div className={`grid grid-flow-col gap-[2rem] mt-[3rem]`}>
               {steps && steps.map((step) => (
                    <article className={`shadow-md p-[1rem] py-[2rem] flex flex-col justify-center items-center max-w-[6.8cm] rounded-md bg-white`} key={step.id}>
                         {step.icon}
                         <h2 className={`font-semibold text-xl`}>{step.h2}</h2>
                         <p className={`text-md text-center`}>{step.desc}</p>
                    </article>
               ))}
          </div>
     </div>
  )
}

export default Working