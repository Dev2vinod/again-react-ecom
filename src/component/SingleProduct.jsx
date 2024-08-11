import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/joy/Chip';
import Add from '@mui/icons-material/Add';

import Button from '@mui/joy/Button';
import { ImOffice } from 'react-icons/im';
import './top.css'


export default function MediaControlCard({singleProduct}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' ,alignContent:'center',justifyContent:'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>

      <CardMedia
        component="img"
        sx={{ width: 151,padding:2,margin:3 }}
        image={singleProduct.image}
        alt="Live from space album cover"
      />


        <CardContent sx={{ flex: 'row' }}>
          <Typography component="div" variant="h5">
            {singleProduct.title}
          </Typography>
          <h1 className='text-xl font-bold'>
             Rs {singleProduct.price}/-
            </h1>
      
          {/* <Chip color="neutral"  /> */}
          <Chip   color="neutral" size="lg"
          >{singleProduct.category}</Chip>
          

          
                   <div className='text-wrap'>
          {singleProduct.description}
          </div>


          <div className='flex gap-8 mt-2'>

          <Button className='addBtn' startDecorator={<Add />} size='md'>Add to cart</Button>
          <Button className='buyBtn' variant="outlined" size='lg'>Buy Now</Button>
          </div>
          
        
        </CardContent>

        
          </Box>
      
    </Card>
  );
}
