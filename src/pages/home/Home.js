import React from 'react'
import Empower from '../../components/empower/Empower'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Service from '../../components/services/Service'

const Home = () => {
  return (
    <div>
        <Header />
        <Service/>
        <Empower />
        <Footer />
    </div>
  )
}

export default Home
