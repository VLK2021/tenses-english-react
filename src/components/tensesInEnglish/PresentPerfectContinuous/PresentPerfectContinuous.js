import React from 'react';

import './PresentPerfectContinuousStyle.css';
import {tenses} from "../../../constants";


const PresentPerfectContinuous = () => {
    const {title, markers} = tenses[9];

    return (
        <main className={'presentPerfectContinuous width flexDirectionColumn'}>
            <h1>{title}</h1>

            <p className={'presentPerfectContinuous-rule fontSizeText'}>

            </p>

            <section className={'presentPerfectContinuous-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>
        </main>
    );
};

export default PresentPerfectContinuous;