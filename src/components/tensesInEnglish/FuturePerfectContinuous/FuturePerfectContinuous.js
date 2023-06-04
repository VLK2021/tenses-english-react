import React from 'react';

import './FuturePerfectContinuous.css';
import {tenses} from "../../../constants";


const FuturePerfectContinuous = () => {
    const {title, markers} = tenses[11];

    return (
        <main className={'futurePerfectContinuous width flexDirectionColumn'}>
            <h1>{title}</h1>
        </main>
    );
};

export default FuturePerfectContinuous;