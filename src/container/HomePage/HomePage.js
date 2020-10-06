import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import ShopList from './ShopList/ShopList';
import Menu from './Menu/Menu';
import BlockShopApp from './BlackShopApp/BlockShopApp';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import ContactApp from './ContactApp/ContactApp';
import Cover from './Cover/Cover';
import Sall from './Sall/Sall';
import InputApp from './InputApp/InputApp';

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
         <Cover/>
      </div>
      <div>
         <ShopList/>
      </div>
        <div>
        <Category/>
        </div>
      <div>
         <Sall/>
      </div>
      <div>
         <BlockShopApp/>
      </div>
      <div>
         <InputApp/>
      </div>
      <div>
         <ContactApp/>
      </div>
      <div>
         <Footer/>
      </div>

    </div>
   )
              
}


export default HomePage;
