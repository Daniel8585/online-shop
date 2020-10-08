import React from 'react';
import './ContactApp.scss';
import { FaEnvelope, FaPhoneAlt,  } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function ContactApp (){
    return(
        <div className="ContactApp">
          
          <div>
              <p><b>INFORMATION</b></p>

              <ul>
                    <li>Delivery Information</li>
                    <li>Discount</li> 
                    <li>Sitemap</li> 
                    <li>Privacy Policy</li> 
                    <li>My Account</li>  
              </ul>              
          </div>

          <div>
              <p><b>MY ACCOUNT</b></p>

              <ul>
                    <li>Sign in</li>
                    <li>View Catr</li> 
                    <li>My Wishlist</li> 
                    <li>Check out</li> 
                    <li>Track My Order</li>  
              </ul>              
          </div>

          <div>
              <p><b>HELP</b></p>

              <ul>
                    <li>F.A.Q.</li>
                    <li>Shipping</li> 
                    <li>Contact Us</li> 
                    <li>Privacy Policy</li> 
                      
              </ul>              
          </div>

          <div>
              <p><b>CONTACT INFO</b></p>

              <ul>
                    <li>
                        <BiWorld/> 1234 Your Address,Country.
                    </li>
                    <li>
                       <FaPhoneAlt /> +1 234 5678 9999
                    </li> 
                    <li className="mail">
                        <FaEnvelope/> mail@domain.com
                    </li>  
              </ul>              
          </div>


        </div>
    )
}

export default ContactApp;