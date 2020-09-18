import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import ShopList from '../ShopList/ShopList';


function HomePage (){  
   return(    
    <div className="homepage1">
       <div>
        <NavBar/>
        </div>
        <div>
        <ShopList/>
        </div>
    </div>
   )
              
}


export default HomePage;
