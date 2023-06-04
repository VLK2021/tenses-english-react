import React from 'react';

import './PastPerfectContinuousStyle.css';
import {tenses} from "../../../constants";


const PastPerfectContinuous = () => {
    const {title, markers} = tenses[10];

    return (
        <main className={'pastPerfectContinuous width flexDirectionColumn'}>
            <h1>{title}</h1>


        </main>
    );
};

export default PastPerfectContinuous;