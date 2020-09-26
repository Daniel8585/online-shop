import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import BlockShopApp from './BlackShopApp/BlockShopApp';
import Category from './Category/Category';
import ShopList from './ShopList/ShopList';
import Footer from './Footer/Footer';
import ContactApp from './ContactApp/ContactApp';
import Cover from './Cover/Cover';


function HomePage (){  
   return(    
    <div className="homepage1">
       <div>
        <NavBar/>
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
        <BlockShopApp/>
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
