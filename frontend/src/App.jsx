import React from 'react'
import Home from './pages/Home/Home'
import Courses from './pages/Course/Courses'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App