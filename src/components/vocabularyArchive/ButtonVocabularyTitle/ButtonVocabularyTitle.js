import React from 'react';
import {NavLink} from "react-router-dom";

import './ButtonVocabularyTitleStyle.css';


const ButtonVocabularyTitle = ({obj}) => {
    const {id, name} = obj;


    return (
        <main className={'btnVocabularyTitle'}>
            <NavLink to={id.toString()}>
                <button className={'btnVocabularyTitle-btn'}>
                    {name}
                </button>
            </NavLink>
        </main>
    );
};

export default ButtonVocabularyTitle;