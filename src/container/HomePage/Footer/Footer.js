import React from 'react';
import './Footer.scss'

import {FaCcVisa,FaCcPaypal,FaCcAmazonPay,FaCcMastercard,FaCcAmex } from "react-icons/fa";

function Footer (){
    return (
        <div className="Footer">
            <div className="text">
                <p>Copyright 2017 RenoshopBee all right reserved - Design by BeeStudio</p>
            </div>

            <div className="icon">
                <ul>
                    <li><FaCcVisa/></li>
                    <li><FaCcPaypal/></li>
                    <li><FaCcAmazonPay/></li>
                    <li><FaCcMastercard/></li>
                    <li><FaCcAmex/></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;