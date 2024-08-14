import  React,{useContext, useEffect} from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import EllipsisList from './list'
import CartContext from '../context/Cart';

export default function DrawerCloseButton({open,setOpen,updateQty}) {
  // const [open, setOpen] = React.useState(false);

  const[data,setData] =React.useState([])

  const{cart,setCart} =useContext(CartContext)

  useEffect(()=>{
    const cartData =JSON.parse(localStorage.getItem('cart'))

    setData(cartData)
     
    console.log("cart list",data)
  

  },[cart])



  return (
    <Box sx={{ display: 'flex' }}>
      
      <Drawer open={open} anchor='right' size='md' onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle>
            < EllipsisList data ={data} updateQty={updateQty} />
        </DialogTitle>
      </Drawer>
    </Box>
  );
}
