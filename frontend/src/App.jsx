import React from 'react'
import Home from './pages/Home/Home'
import Courses from './pages/Course/Courses'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'
import { Toaster } from "react-hot-toast"
import { useAuthHook } from './components/context/AuthProvider'

const App = () => {

  const {authUser, setAuthUser} = useAuthHook();
  console.log(authUser);  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={authUser ? <Courses /> : <Navigate to={"/signup"} />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>      
    </>
  )
}

export default App