import React from 'react';
import './Cover.scss';
import Button from '../../../component/Button/Button';


function Cover (){
    return(
        <div className="Cover">
            <div className="TextApp">
                <p className="text1"><b>THE BEST</b></p>
                <p className="text2"><b>WOOCOMMERCE</b></p>
                <p className="text3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm
                </p>
            </div>   

            <div className="butt">
                <Button className="b1" name="BUY NOW"/> 
            </div>

        </div>
    )
}

export default Cover;