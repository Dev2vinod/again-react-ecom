import React, { useState,useEffect } from 'react'
import DrawerAppBar from '../../component/Topbar'
import MediaCard from '../../component/CardProduct'
import { useSearchParams } from 'react-router-dom';

import axios from 'axios'
import BasicModal from "../../component/BasicModal";

import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import Alert from '@mui/material/Alert';
// import cors from 'cors';
// import express from 'express';
// // var app = express()
// // app.use(cors())




const Home = () => {

  const[data,setData] =useState([])


  const [searchParams, setSearchParams] = useSearchParams(false);

  useEffect(() => {
    const category =searchParams.get('category')
    if( category!=='all'){
      axios.get(`https://fakestoreapi.com/products/category/${category}`).then((res)=>{
        
        // console.log(res.data,"res")
        setData(res.data)
        // setData([...data])
        // console.log(data,"from  data")
    }).catch((err)=>{
        console.log("error from fake store api" ,err.message)
        
    })

    }
   
    console.log(searchParams.get('category'))
  }, [searchParams])
  


   
  useEffect(() => {

    const category =searchParams.get('category')
    if(!category || category==='all'){


      
      axios.get(`https://fakestoreapi.com/products`).then((res)=>{
        
        console.log(res.data,"res")
        setData(res.data)
        // setData([...data])
        console.log(data,"from  data")
      }).catch((err)=>{
        console.log("error from fake store api" ,err)
      })
      
      
    }
    }, [searchParams])



   // single product or viewdetail
    // open and close of basic modal
    const[open,setOpen] =useState(false)


    const[singleProduct,setSingleProduct] =useState({});

    const viewDetail =(id)=>{


      console.log("id of product",id) 



       


        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
          console.log(res.data,"res of single product")
  
          setSingleProduct(res.data)
          setOpen(true)

        }).catch((err)=>{
          console.log("error of single product of axios",err)
        })
         
      }

     
      
       

    

  return (
    <div className='mt-10'>
        <DrawerAppBar />

        <div className='flex bg-pink-600 flex-wrap justify-evenly items-center '>
        
        {data.length >0 ? data.map((item,i)=>{
           return  <MediaCard  product ={item} key={i} viewDetail ={viewDetail} />

        }):    <div className='flex flex-col gap-5 items-center justify-evenly bg-[blueviolet] w-full h-screen'>

         <CircularProgress variant="outlined" size='lg' thickness={10}  />
         <Chip   size='lg'>Data is loading...</Chip>
         <Alert variant="filled" severity="success">
        <h1>Network Error. <br />
          Please Check Your Network Connection
        </h1>
       </Alert>
        </div> 

  }
        
        </div>



       { <BasicModal  open={open} singleProduct ={singleProduct}   setOpen={setOpen} />  }


 










    </div>
  )
}

export default Home