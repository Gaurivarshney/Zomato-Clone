import React from 'react'
import '../../stylecss/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
function Header() {
  return (
    <div className='max-width header'>
     <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="...zomato" className='header-logo footer-logo'/>

    <div className="header-right">
        <div className="header-right-wrapper">
         <div className="header-location">
           <div  className='location-icon'> <LocationOnIcon/></div>
            <div>Banglore</div>
            <div className='arrow-drop'> <ArrowDropDownIcon/> </div>
         </div>
         <div className='separater'></div>
         <div className='header-input'>
            <div className='search-icon'> <SearchIcon/> </div>
            <input type="text"  placeholder='Search for restaurant, cuisine or a dish' className='input-text'/>
         </div>
        </div>
        <div className='login'>
           <div className='login-image'>
           <img src="https://th.bing.com/th?id=OIP.dBHEl6EJ1Qz2vpqqALC4XgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="...login" /> </div>
           <div className='login-name'>Shuvam</div>
           <div className='login-arrow'> <KeyboardArrowDownSharpIcon/> </div>
          
        </div>
    </div>

    </div>
  )
}

export default Header
