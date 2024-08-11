import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'

import './top.css'
export default function MediaCard({product,viewDetail}) {

//  const viewDetail =(id)=>{
//     console.log("id of product",id)
//   }

console.log("product in the card",product)
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
        <Button size="small" variant="contained" color="success"  className='addBtn'>Add To Cart</Button>
        <Button size="small" variant="outlined"  className='viewBtn' onClick={()=>viewDetail(product.id)}>View Detail</Button>
      </CardActions>
    </Card>
  );
}
