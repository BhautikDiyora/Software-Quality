import React, { useState } from 'react'
import "./navbar.scss"
import { Search, Notifications,  ArrowDropDown } from '@mui/icons-material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };


    
    return (
     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
         <div className='left'>
            <img
              src='https://www.animationxpress.com/wp-content/uploads/2020/01/shemaroome-logo.jpg'
              alt=''
            />
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>Populars</span>
            <span>Favourites</span>
         </div>
         <div className='right'>
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                 alt=''
            />
            <div className="profile">
                 <ArrowDropDown className='icon'/>
                 <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                 </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Navbar