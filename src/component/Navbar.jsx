import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>



        <div>
            <ul className='flex items-center justify-between'>

                <li>
                   <Link  to="/" >Home</Link> 
                </li>
                <li>
                   <Link  to="about" >About</Link> 
                </li>
                <li>
                   <Link  to="contact" >Contact</Link> 
                </li>
               

            </ul>
        </div>
    </div>
  )
}

export default Navbar