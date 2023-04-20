import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <HomeIcon className='icon'/>
        
            <Link to='/'><span className='navbar-element'> Home</span></Link>
        
            <Link to='/links'><span className='navbar-element'> Essential Links  </span></Link>
        
            <Link to='/schemes'><span className='navbar-element'> Latest Schemes  </span></Link>
        
            <Link to='/aboutus'> <span className='navbar-element'> About Us </span> </Link>

            <Link to='/contact'> <span className='navbar-element'> Contact Us  </span> </Link>
       
    </div>
  )
}

export default Navbar