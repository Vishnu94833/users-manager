// @flow 
import * as React from 'react';

function input(props){
    return (
        <input className={props.class}  type={props.type} placeholder={props.placeholder}/>
    );
};

export default  input;