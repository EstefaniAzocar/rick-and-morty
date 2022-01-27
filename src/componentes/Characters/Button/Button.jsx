import React from "react";
import './Button.css'

export function Button(props) {
    const {name, onChange, page} = props
    return(
       <>
            {page?<button  className="btn" onClick={onChange}>{name}</button>: null}
       </>
        
    );
}