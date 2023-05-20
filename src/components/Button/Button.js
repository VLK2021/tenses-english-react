import React from 'react';
import {NavLink} from 'react-router-dom';

import './ButtonStyle.css';


const Button = ({obj, goToPage}) => {
    const {id, name} = obj;

    const setBtnClass = (id) => {
        if (id >= 13) {
            return 'btn-right'
        } else {
            return 'btn-left'
        }
    };

    return (
        <div>
            <NavLink to={id.toString()}>
                <button className={`${setBtnClass(id)}`}>
                    {name}
                </button>
            </NavLink>
        </div>
    );
};

export default Button;