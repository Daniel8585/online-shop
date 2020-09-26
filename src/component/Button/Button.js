import React from 'react';

function Button(props){
    return(
        <div className="Button">
            <button>{props.name}</button>
        </div>
    )
}

export default Button;