import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import Category from './Category/Category';
import ShopList from './../HomePage/components/ShopList/ShopList';
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
