import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import ShopList from '../ShopList/ShopList';
import Category from './Category/Category';


function HomePage (){  
   return(    
    <div className="homepage1">
       <div>
        <NavBar/>
        </div>
        <div>
        <ShopList/>
        </div>
        <div>
           <Category/>
        </div>
    </div>
   )
              
}


export default HomePage;
