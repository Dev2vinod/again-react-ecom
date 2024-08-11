import React, { useState,useEffect } from 'react'
import DrawerAppBar from '../../component/Topbar'
import MediaCard from '../../component/CardProduct'
import ImgMediaCard from '../../component/SingleProduct';
import axios from 'axios'
import BasicModal from "../../component/BasicModal";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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

        <div className='flex bg-pink-500 flex-wrap justify-evenly items-center '>
        
        {data.length >0 ? data.map((item,i)=>{
           return  <MediaCard  product ={item} key={i} viewDetail ={viewDetail} />

        }):<Alert severity="error" variant="filled" >
        <AlertTitle>Error</AlertTitle>
        Data is loading....
      </Alert>
  }
        
        </div>



       { <BasicModal  open={open} singleProduct ={singleProduct}   setOpen={setOpen} />  }


 










    </div>
  )
}

export default Home