import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Freebook from '../../components/FreeBook/Freebook'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
    </>
  )
}

export default Home