import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Course from '../component/course'

function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>

  )
}

export default Courses