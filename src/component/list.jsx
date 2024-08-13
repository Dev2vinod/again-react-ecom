import  React,{useEffect, useState} from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import './top.css'
import { MdDelete } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";


{/* <MdDelete />
  <CiSquarePlus />
  <CiSquareMinus />
  */}


export default function EllipsisList({data}) {

  // const delBtn =(id)=>{

  //   const cartData =JSON.parse(localStorage.getItem('cart')) || [];

  //   const index =cartData.findIndex((v)=> v.id ===id)
  //   console.log("id in del",id,index)

  //     cartData.splice(index,1)

  //     localStorage.setItem('cart',JSON.stringify(cartData))

  //     console.log("new data in storage",cartData)

  // }

   
    //  console.log(' i am list',data)

  return (
    <Box sx={{ width: 320 }}>
      

      <h1 className='font-bold text-xl text-center p-1 m-1 bg-[blueviolet] text-white rounded'>CART LIST</h1>

      {data.length >0 ? data.map((v,i)=>{

        return  <Box key={i}>

        <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        
        <ListItem>
          <ListItemDecorator>
            <Avatar src={v.image} />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">{v.title}</Typography>
            <Typography level="body-sm" >
            Rs {v.price} /-
            </Typography>
            <div className='flex items-center justify-between' >
              <div className='flex gap-9'>

             <CiSquarePlus  />
             <CiSquareMinus />
              </div>

                   <div>
                   <MdDelete  onClick={()=>delBtn(v.id)} color='red' />

                 </div>
            </div>
          </ListItemContent>
        </ListItem>
        </List>

        </Box>
      }) : <h1> Empty list</h1>}
     
          <div>
          <Button variant="contained" size='lg' className='checkBtn'>Check Out</Button>
          </div>
    </Box>
  );
}
