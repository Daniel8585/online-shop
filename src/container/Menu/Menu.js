import React from 'react';
import '../Menu/Menu.scss';
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 function Menu(){
     return(
        <div className='menuDiv'>
        <div className='grid-item1'>
            <h2><spam className='logo'>RENOSHOP</spam>BEE</h2>
        </div>
  <Router>
        <div className='grid-item2'>
           <ul className='main1'>
            <dt><Link to ='/'>MENU</Link></dt>
            <dt><Link to ='men'>MEN</Link></dt>
            <dt><Link to ='women'>WOMEN </Link></dt>
            <dt><Link to ='kids'>KIDS</Link></dt>
            <dt><Link to ='jewellery'>JEWELLERY</Link></dt>
            <dt><Link to ='jewellery'>JEWELLERY</Link></dt>
            <dt><Link to ='accessories'>ACCESSORIES</Link></dt>
           </ul>
         
          
        </div>
        <div className='grid-item3'>
           <ul className='main2'>
            <dt><FaShoppingBasket/></dt>
            <dt><FaSearch/></dt>

            <dt><BiMenu/></dt>
           
           </ul> 
         
    </div>
      </Router>
</div>

     )
 } 
 export default Menu;