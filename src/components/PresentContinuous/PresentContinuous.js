import React from 'react';

import './PresentContinuousStyle.css';
import {tenses} from "../../constants";


const PresentContinuous = () => {
    const {title, markers} = tenses[3];


    return (
        <main className={'presentContinuous flexDirectionColumn width'}>
            <h1>{title}</h1>

        </main>
    );
};

export default PresentContinuous;