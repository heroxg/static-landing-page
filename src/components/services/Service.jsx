import React from 'react'
import ServicesCard from './ServicesCard'
import './Services.css'

const Service = () => {
  return (
    <div className='wrapper'>
        <div className="col-sm-8 col-offset-sm-4 mx-auto sub-heading">
            <h2>We are revolutionising how individuals and SME's access financial services through</h2>
            <ServicesCard/>
        </div>
    </div>
  )
}

export default Service
