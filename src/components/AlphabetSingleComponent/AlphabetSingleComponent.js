import React from 'react';

import './AlphabetSingleComponentStyle.css';


const AlphabetSingleComponent = ({obj}) => {
    const {name, transcription} = obj;

    const changeClass = (name) => {
        if (name === 'Aa') {
            return 'red'
        } else if (name === 'Ee') {
            return 'red'
        } else if (name === 'Ii') {
            return 'red'
        } else if (name === 'Oo') {
            return 'red'
        } else if (name === 'Uu') {
            return 'red'
        } else if (name === 'Yy') {
            return 'red'
        } else {
            return 'black'
        }
    }


    return (
        <main className={`alphabetSingleComponent ${changeClass(name)}`}>
            <p className={'flex alphabetSingleComponent-name'}>{name}</p>
            <p className={'flex'}>{transcription}</p>
        </main>
    );
};

export default AlphabetSingleComponent;