import React from 'react'
import EmpowerCard from './EmpowerCard'
import './Empower.css'

const Empower = () => {
  return (
    <div className='services-content'>
      <div className='container'>
            <div className='sub-heading'>
                <h2>We're also empowering Corporative with</h2>
            </div>
            <div className='row'>
                <EmpowerCard />
            </div>
       </div>
    </div>
  )
}

export default Empower
