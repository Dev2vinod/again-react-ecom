import  React,{useEffect, useState,useContext} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import by me
import { MdShoppingCart } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';
import Rightdrawer from './Rightdrawer';
import CartContext from '../context/Cart';
import Badge from '@mui/material/Badge';

 // add the file of css
 import './top.css'

const drawerWidth = 240;
const navItems = ['ALL', 'ELECTRONICS', "MEN'S CLOTHING","WOMEN'S CLOTHING",'JEWELERY'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GHOUS STORE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={()=>setSearchParams
            ({category:item.toLowerCase()})} key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  // right drawer  case
  const{cart,setCart} =useContext(CartContext)


   const[open,setOpen] =React.useState(false)
    const carticon =()=>{
    console.log("hello ji")
    setOpen(true)
    
   
  }

    // update the product quanty

    const updateQty =(type,id)=>{
        console.log("type",type,id)

     const cartData =JSON.parse(localStorage.getItem('cart'))||[]
    
    const index =cartData.findIndex((v)=>v.id===id)
    if(type==='+'){

    cartData.splice(index,1,{...cartData[index],qty:cartData[index].qty + 1})


    }else{
    cartData.splice(index,1,{...cartData[index],qty:cartData[index].qty - 1})

    }

    localStorage.setItem('cart',JSON.stringify(cartData))

    setCart(cartData)



    }


    // making the cart length of a cart

    // const[cart,setCart]=useState(0)

    const[num,setNum] =useState(0)
    
    React.useEffect(()=>{
      
      const cartData = JSON.parse(localStorage.getItem('cart') ) || [];
      
      //  console.log("cart length",cart.length )
      setNum(cartData.length)

    },[cart])

     
     

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='success' className='bg-violet-700 Appbar' >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            GHOUS STORE
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button  onClick={()=>setSearchParams
                ({category:item.toLowerCase()})
              } key={item} sx={{ color: 'white' }}>
          {item}
              </Button>
              
            ))}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={num} color="error">
            <MdShoppingCart  onClick={carticon}   />
                
              </Badge>
            </IconButton>

            </Box>
             
          </Box>
          

          < Rightdrawer open={open} setOpen={setOpen}  updateQty={updateQty}  />
        </Toolbar>
        
       

      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          
          {drawer}
        </Drawer>
        
      </nav>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
 
  window: PropTypes.func,
};

export default DrawerAppBar;
