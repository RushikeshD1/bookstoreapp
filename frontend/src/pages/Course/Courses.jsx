import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Course from '../../components/Course/Course'

const Courses = () => {
  return (
    <>
        <Navbar />
        <div className='min-h-screen mt-4'>
            <Course />
        </div>
        <Footer />
    </>
  )
}

export default Courses