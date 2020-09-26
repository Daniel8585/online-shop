import React from 'react';
import './InputApp.scss';
import Button from '../../../component/Button/Button';
import Input from '../../../component/Input/Input';

function InputApp (){
    return(
        <div className='papadiv'>
            <div className='div1'>
                <p className='title'>Get Out Special Discount</p>
                <p >Donec eu tristique felis. Duis augue mi, auctor ut purus et, dignissim aliquet quam.
                    register your email for news and special offers
                </p>

              <div className='components'>
                <Input  />
                <Button name='Get now'/>
              </div>
               

            </div>
            <div className='div2'>
                <p>icons2</p>
                <p>icons3</p>
                <p>icons4</p>

            </div>
        </div>
    )
}

export default InputApp;