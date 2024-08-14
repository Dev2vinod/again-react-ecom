import React,{useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';
import axios from 'axios';
import CartContext from '../context/Cart';

import './top.css'
export default function MediaCard({product,viewDetail}) {

  const[data,setData] =useState({})
  const{cart,setCart} =useContext(CartContext)

  // console.log(" i am context cart",cart)
  const addToCart =(id,type)=>{
    
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      // console.log(res.data,"res of single product")

      setData(res.data)
      

    }).catch((err)=>{
      console.log("error of single product of axios",err)
    })
   

    const cartData =JSON.parse(localStorage.getItem('cart'))||[]
    const index =cartData.findIndex((v)=>v.id===product.id)

    
    // console.log("id in del",id,index)

    
    
      // console.log("type + ko hit kiya re")
    
    
    if(index!==-1){
      console.log("me working hu")

    cartData.splice(index,1,{...cartData[index],qty:cartData[index].qty + 1})
    


    }
    else{
      cartData.push({...product,qty:1})
    
      
    }
    
    localStorage.setItem("cart",JSON.stringify(cartData))
   setCart(cartData.length)
    

    // setCart(cartData)

   

    // console.log("cart",id,cart)

  }

//  const viewDetail =(id)=>{
//     console.log("id of product",id)
//   }

// console.log("product in the card",product)
  return (
    <Card sx={{ width:300 ,marginTop:10}}>
      <div>
        <img src={product.image}  className='w-[200px] h-[200px] object-contain mt-3 m-2' alt="" />
      </div>
      <CardContent>

      <Typography gutterBottom variant="h6" component="div">
       
       Rs {product.price} /-
       </Typography>
        <Typography gutterBottom variant="span" component="div">
          {product.title.slice(0,32)}...
      
        </Typography>
        
        <ReactStars
            edit={false}
            count={5}
            value={product.rating.rate}
             size={24}
            color2={'#ffd700'} />


        
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success"  className='addBtn' onClick={()=>addToCart(product.id,'+')}>Add To Cart</Button>
        <Button size="small" variant="outlined"  className='viewBtn' onClick={()=>viewDetail(product.id)}>View Detail</Button>
      </CardActions>
    </Card>
  );
}
