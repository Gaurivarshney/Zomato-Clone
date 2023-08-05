import React from 'react'
import '../../stylecss/Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Footer() {
  return (
    
    <div className='max-width footer'>
     <div style={{
        display: "flex",
        justifyContent: "space-between",
       
       }}>
     <div >
     <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="...zomato" className='header-logo'/>
     </div>
     <div className='logo'>
     <div className='btn'>
     <span>   <img src="https://th.bing.com/th?id=OIP.--08d7AwyCcZXcRwlIflRQHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className='india'/>
     India 
    <KeyboardArrowDownIcon/> 
     </span>
    
     </div>
     <div className='btn'>
     <span> 
     <img src="https://cdn-icons-png.flaticon.com/512/2014/2014350.png" alt="" />
     English
    <KeyboardArrowDownIcon/> 
   </span>

   </div></div>

     </div>
    <div className='footer-list' style={{
        display: "flex",
        justifyContent: "space-between",
       
       }}>
       <div className='first'>
        <ul>
          <li>
             <h4>ABOUT US </h4>
             <h6>Who we are</h6>
             <h6>Blog</h6>
             <h6>Work with us</h6>
             <h6>Investor Relations</h6>
             <h6>Report Fraud</h6>
             <h6>Contact US</h6>
          </li>
        </ul>
       </div>
       <div className='first'>
        <ul>
          <li>
             <h4>ZOMAVERSE</h4>
             <h6>Zomato</h6>
             <h6>Blinkit</h6>
             <h6>Feeding India</h6>
             <h6>Hyperpure</h6>
             <h6>Zomaland</h6>
          </li>
        </ul>
       </div>
       <div className='first'>
        <ul>
          <li>
             <h4>FOR RESTAURANTS</h4>
             <h6>Partner with us</h6>
             <h6>Apps For You</h6>
             <h6>Work with us</h6>
           <br />
             <h4>For Enterprises</h4>
             <h6>Zomato for Enterprise</h6>
          </li>
        </ul>
       </div>
       <div className='first'>
        <ul>
          <li>
             <h4>LEARN MORE</h4>
             <h6>Privacy</h6>
             <h6>Security</h6>
             <h6>Terms</h6>
             <h6>Sitemap</h6>
        
          </li>
        </ul>
       </div>
       <div className='first'>
        <ul>
          <li>
             <h4>SOCIAL LINKS</h4>
            <div style={{
        display: "flex",
        justifyContent: "space-between",
       
       }}>
             <div> <InstagramIcon/> </div>
             <div> <TwitterIcon/> </div>
             <div> <YouTubeIcon/> </div>
             <div> <LinkedInIcon/> </div>
             <div> <FacebookIcon/> </div>
           
            </div>
            <div style={{marginTop : 10}}>
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt=""  style={{height: 40, width: 157}}/>
            </div>
            <div style={{marginTop : 10}}>
             <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt=""  style={{height: 40, width: 157}}/>
            </div>
            
        
          </li>
        </ul>
       </div>
       </div>
<div className='separater'></div>
<div className='content'>
  <span>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</span>
</div>

    </div>
  )
}

export default Footer
