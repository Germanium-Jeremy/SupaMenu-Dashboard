import React from 'react'
import Graph from './templates/Graph'
import SideInfo from './templates/SideInfo'

const GrathCont = () => {
  return (
    <div className={`bg-white mx-[2rem] rounded shadow-md border-2 border-gray-300 overflow-hidden flex`}>
      <Graph />
      <SideInfo />
    </div>
  )
}

export default GrathCont