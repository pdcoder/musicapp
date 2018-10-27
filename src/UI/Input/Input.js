import React from 'react';
import classes from './Input.css';

const input = (props) => {
    return <input className={classes.Input}  type="search" placeholder={props.placeholder}/>
}

export default input;