import React from 'react';
import {Outlet} from 'react-router-dom';

import './VocabularyStyle.css';
import ButtonVocabularyTitle from "../ButtonVocabularyTitle/ButtonVocabularyTitle";
import {vocabularyTitle} from "../../../constants";


const Vocabulary = () => {

    return (
        <main className={'vocabulary width flexDirectionColumn'}>
            <h1 className={'width flex'}>Vocabulary</h1>

            <section className={'width vocabulary-btn marginTop'}>
                {
                    vocabularyTitle.map(obj => <ButtonVocabularyTitle key={obj.id} obj={obj}/>)
                }
            </section>

            <section className={'outlet width'}><Outlet/></section>
        </main>
    );
};

export default Vocabulary;