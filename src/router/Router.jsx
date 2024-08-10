import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Contact from '../screens/contact/Contact'
import Navbar from '../component/Navbar'

const Router = () => {




  return (
    <>
    

    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route  path='/' element ={<Home />} />
    <Route  path='about' element ={<About />} />
    <Route  path='contact' element ={<Contact />} />

    

    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    
    
    </>
  )
}

export default Router