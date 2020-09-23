import React from 'react';
import './ShopContent.scss';
import{FaStar} from "react-icons/fa";


function ShopContent(props){

    return(
    <div className='ShopContent'>
    <img src=""/>
    <p className="title">{props.title}</p>
    <p className="price">{props.price}</p>
         <ul>
            <li><FaStar className="star"/></li>
            <li><FaStar className="star"/></li>
            <li><FaStar className="star"/></li>
            <li><FaStar className="star"/></li>
            <li><FaStar className="star"/></li>
         </ul>
     </div>
    )
}

export default ShopContent;