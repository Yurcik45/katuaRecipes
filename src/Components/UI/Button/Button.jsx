import React from 'react';
import './Button.sass'

const Button = props => {
    return (
        <button className={props.className ? props.className : 'defaultBtn'}
                type={props?.type}
                onClick={props?.onClick}
        >
            {props.value}
        </button>
    );
};

export default Button;