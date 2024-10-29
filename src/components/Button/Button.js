import React from 'react';
import {NavLink} from 'react-router-dom';

import './ButtonStyle.css';


const Button = ({obj}) => {
    const {id, name} = obj;
    const setBtnClass = id => (id >= 13 ? 'btn-right' : 'btn-left');

    return (
        <div className={'customBtn'}>
            <NavLink to={id.toString()}>
                <button className={`${setBtnClass(id)}`}>
                    {name}
                </button>
            </NavLink>
        </div>
    );
};

export default Button;