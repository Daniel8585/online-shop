import React from 'react';
import '../ShopList/ShopList.scss';
import{FaStar,FaHeart} from "react-icons/fa";


function ShopList (){
   return(
       <div className="shoplist">
            <div className="shoptext">
              <div>  
               <p className="text1"><b>BEST SELERS</b></p>
               <p className="text2">The best productions from us</p>
               <p className="text3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </p>
            </div>
            </div>
            <div>
               <img src=""/>
               <div className="icon2">
                   <FaHeart className="ic1"/>
               </div>
               <p className="title">Cruise Dual Analog</p>
               <p className="price">$250.00</p>
               <FaStar className="star"/>

            </div>
            <div>
               <img src=""/>
               <p className="title">Crown Summit Backpack</p>
               <p className="price">$250.00</p>
               <FaStar className="star"/>
            </div>
            <div>
                <img src=""/>
                <p className="title" >Joust Duffle Bag</p>
               <p className="price">$250.00</p>
               <FaStar className="star"/>
            </div>
            <div>
                <img src=""/>
                <p className="title">Voyage Yoga Bag</p>
               <p className="price">$250.00</p>
               <FaStar className="star"/>
            </div>
       </div>
   )
}

export default ShopList;