import { useEffect, useState } from 'react'

import './App.css'
import Router from './router/Router'
import CartContext from './context/Cart'


function App() {

  const[cart,setCart] =useState(0)
  

    useEffect(()=>{

     const cart =JSON.parse(localStorage.getItem('cart')) || []

     setCart(cart.length)

     },[])
   
  return (
    <>
      <div>


            < CartContext.Provider value={{cart,setCart}} >
            
            <Router />
            
            </CartContext.Provider>
      
      </div>
    </>
  )
}

export default App
