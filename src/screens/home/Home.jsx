import React, { useState,useEffect } from 'react'
import DrawerAppBar from '../../component/Topbar'
import MediaCard from '../../component/CardProduct'
import axios from 'axios'

const Home = () => {

  const[data,setData] =useState([])
   
  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products`).then((res)=>{
        
        console.log(res.data,"res")
        setData(res.data)
        // setData([...data])
        console.log(data,"from  data")
    }).catch((err)=>{
        console.log("error from fake store api" ,err)
    })

    
  }, [])
  

  return (
    <div>
        <DrawerAppBar />

        <div className='flex bg-pink-500 flex-wrap justify-evenly items-center '>
        
        {data.length >0 ? data.map((item,i)=>{
           return  <MediaCard  product ={item} key={i} />

        }):<h1> data is loading</h1> }
        
        </div>
    </div>
  )
}

export default Home