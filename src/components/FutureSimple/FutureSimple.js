import React from 'react';

import './FutureSimpleStyle.css';
import {tenses} from "../../constants";


const FutureSimple = () => {
    const {title, markers} = tenses[2];


    return (
        <main className={'futureSimple flexDirectionColumn width'}>
            <h1>{title}</h1>


        </main>
    );
};

export default FutureSimple;