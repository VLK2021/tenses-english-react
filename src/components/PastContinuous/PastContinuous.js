import React from 'react';

import './PastContinuousStyle.css';
import {tenses} from "../../constants";


const PastContinuous = () => {
    const {title, markers} = tenses[4];


    return (
        <div className={'pastContinuous flexDirectionColumn width'}>
            <h1>{title}</h1>

        </div>
    );
};

export default PastContinuous;