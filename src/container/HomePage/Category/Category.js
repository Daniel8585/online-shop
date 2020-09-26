import React from 'react';
import '../Category/Category.scss';

import { GiCutDiamond } from "react-icons/gi";
import {BiRepost } from "react-icons/bi";
import {DiKrakenjs } from "react-icons/di";
import {FaPaperPlane } from "react-icons/fa";

function Category(){
    return(
        <div className="Category">
           <div  className="block">
              <div>
                 <GiCutDiamond className="ic"/>
                <p className="p1"><b>SPECIAL OFFERS</b></p>
                <p className="p2">Shop Big Save Big</p>
              </div>
           </div>
             
           <div  className="block">
              <div>
                 <FaPaperPlane className="ic"/>
                <p className="p1"><b>FREE DELIVERY</b></p>
                <p className="p2">On Orders Above $99</p>
              </div>
           </div>
           
           <div  className="block">
              <div>
                 <BiRepost className="ic"/>
                <p className="p1"><b>30 DAYS RETURN</b></p>
                <p className="p2">Policy We Offers</p>
              </div>
           </div>
          
           <div className="block">
              <div>
                 <DiKrakenjs className="ic"/>
                <p className="p1"><b>FASTEST SHIPPING</b></p>
                <p className="p2">2 Days Express</p>
              </div>
           </div>

        </div>
            )
}

export default Category;