import React from 'react';
import '../NavBar/NavBar.scss'


import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaBehance,FaPhoneAlt,FaEnvelope} from "react-icons/fa";

function NavBar (){
    return (
        
        <div className="homepage">

             <div className="num">
                 <ul>
                     <dt><FaPhoneAlt /></dt>
                     <dt>+1 123 456 789</dt>

                     <dt><FaEnvelope/></dt>
                     <dt>info@company.com</dt>
                    
                 </ul>
             </div>
                   
             <div className="icon">
                 <ul>
                     <dt><FaFacebookF/></dt>
                     <dt><FaTwitter/></dt>
                     <dt><FaInstagram/></dt>
                     <dt><FaLinkedinIn/></dt>
                     <dt><FaBehance/></dt>
                 </ul>
             </div>     
      
      
        </div>
    )
}

export default NavBar;