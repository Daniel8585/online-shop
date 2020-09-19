import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import ShopList from '../ShopList/ShopList';
import Menu from '../Menu/Menu';

function HomePage (){  
   return(    
    <div className="homepage1">
      <div>
        <NavBar/>
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <ShopList/>
      </div>
    </div>
   )
              
}


export default HomePage;
