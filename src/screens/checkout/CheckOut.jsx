import React, { useState } from 'react'
// import Topbar from './Topbar'
import Topbar from '../../component/Topbar';
import TextField from '@mui/material/TextField';


const CheckOut = () => {

  const[fname,setFname] =useState('')
  const [textInput, setTextInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState(0);
  const [addressInput, setAddressInput] = React.useState('');


  // let textInput = React.createRef();

  const handleChange = (event) => {
    setTextInput(event.target.value);
    setEmailInput(event.target.value);
    setPhoneInput(event.target.value);
    setAddressInput(event.target.value);
    console.log(event.target.value)

  }
  
  
  return (
    <div>
        {/* <Topbar /> */}
        <Topbar />

        <div className='mt-[15%] flex flex-wrap gap-3 items-center justify-center'>
            <h1>chekout</h1>
  
        {textInput}
   {/* first div part  */}
          <div  className='flex gap-4 flex-col '>


              <div>
    <TextField id="outlined-basic" label="Full Name" variant="outlined" color='secondary' onChange={handleChange}
     />

    </div>
    <div>
    <TextField id="outlined-basic" label="Phone" variant="outlined" color='secondary ' onChange={handleChange}/>

           </div>
                 </div>

                 <div  className='flex gap-4 flex-col '>

          {/* second div  */}
          <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" color='secondary' onChange={handleChange}/>

          </div>
          <div>
          <TextField id="outlined-basic" label="Address" variant="outlined" color='secondary' onChange={handleChange}/>

          </div>

          </div>



        </div>
        <h1 className='bg-[blueviolet] ml-[26%] mt-3 text-center w-[57%] p-1 text-white font-bold text-xl cursor-pointer hover:bg-[#892be2c4]'> Place Order</h1>
    </div>
  )
}

export default CheckOut