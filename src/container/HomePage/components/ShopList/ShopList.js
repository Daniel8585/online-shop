import React from 'react';
import './ShopList.scss';
import{FaStar,FaHeart,FaShoppingCart} from "react-icons/fa";
import {BiRepost } from "react-icons/bi";


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
               <div className="ic1">
                 <div> <p><FaShoppingCart className="i1"/></p> </div>
                  <div><p><FaHeart className="i1"/></p></div>
                  <div><p><BiRepost className="i1"/></p></div>
               </div>
               <img src=""/>
               <p className="title">Cruise Dual Analog</p>
               <p className="price">$250.00</p>
               <ul>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
               </ul>
            </div>
            <div >
               <img src=""/>
               <p className="title">Crown Summit Backpack</p>
               <p className="price">$250.00</p>
               <ul>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  
               </ul>
            </div>
            <div>
                <img src=""/>
                <p className="title" >Joust Duffle Bag</p>
               <p className="price">$250.00</p>
               <ul>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
               </ul>
            </div>
            <div>
                <img src=""/>
                <p className="title">Voyage Yoga Bag</p>
               <p className="price">$250.00</p>
               <ul>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
                  <ol><FaStar className="star"/></ol>
               </ul>
            </div>
       </div>
   )
}

export default ShopList;