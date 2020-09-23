import React from 'react';
import '../Menu/Menu.scss';
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import {BrowserRouter as Router, Link } from 'react-router-dom';


 function Menu(){
     return(
        <div className='menuDiv'>
        <div className='grid-item1'>
            <h2><spam className='logo'>RENOSHOP</spam>BEE</h2>
        </div>
  <Router>
        <div className='grid-item2'>
           <ul className='main1'>
            <li><Link to ='/'>MENU</Link></li>
            <li><Link to ='men'>MEN</Link></li>
            <li><Link to ='women'>WOMEN </Link></li>
            <li><Link to ='kids'>KIDS</Link></li>
            <li><Link to ='jewellery'>JEWELLERY</Link></li>
            <li><Link to ='jewellery'>JEWELLERY</Link></li>
            <li><Link to ='accessories'>ACCESSORIES</Link></li>
           </ul>
         
          
        </div>
        <div className='grid-item3'>
           <ul className='main2'>
            <li><FaShoppingBasket/></li>
            <li><FaSearch/></li>

            <li><BiMenu/></li>
           
           </ul> 
         
    </div>
      </Router>
</div>

     )
 } 
 export default Menu;