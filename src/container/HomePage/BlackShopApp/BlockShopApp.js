import React from 'react';
import './BlockShopApp.scss';
import ShopContent from '../ShopContent/ShopContent';


function BlockShopApp(){
    return(
     <div className="BlockApp">
        <div className="title">
            <p className="text1"><b>FEATURED PRODUCT</b></p>
         <p className="text2">Newest trends from top brands</p>
        </div>
        <div className="BlockShopApp">
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/>  
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/>
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
            <ShopContent title="Cruise Dual Analog" price="$250.00"/> 
        </div>
     </div>  
    )
}

export default BlockShopApp;