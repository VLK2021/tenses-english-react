import React from 'react';

import './PresentPerfectStyle.css';
import {tenses} from "../../constants";


const PresentPerfect = () => {
    const {title, markers} = tenses[6];


    return (
        <main className={'presentPerfect width flexDirectionColumn'}>
            <h1>{title}</h1>
        </main>
    );
};

export default PresentPerfect;