import React from 'react'
import Header from './Header'
import Overall from './templates/Overall'
import GrathCont from './GrathCont'
import OtherInfo from './OtherInfo'

const OverView = () => {
  return (
    <div className='w-full flex flex-col'>
      <Header currentPage={"Overview"} />
      <Overall />
      <GrathCont />
      <OtherInfo />
    </div>
  )
}

export default OverView