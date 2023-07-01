import React from 'react';

import './VocabularySingleComponentStyle.css';


const VocabularySingleComponent = ({obj, setVisible, setObj, setVisibleQuiz}) => {
    const {infinitive, transcriptionInf, translation} = obj;


    return (
        <main className={'vocabularySingleComponent'}>
            <article className={'vocabularySingleWordInfo'}>
                <h3 className={'width'}>{infinitive}</h3>
            </article>

            <article className={'vocabularySingleWordInfo'}>
                <h3 className={'width vocabularySingleComponent-transcription'}>{transcriptionInf}</h3>
            </article>

            <article className={'vocabularySingleWordInfo'}>
                <h3 className={'width'}>{translation}</h3>
            </article>

            <article className={'vocabularySingleWordInfo'}>
                <button
                    className={'vocabularySingleComponent-btn'}
                    onClick={(e)=> {
                        setVisible(true);
                        setVisibleQuiz(false);
                        setObj(obj);
                    } }
                >training</button>
            </article>
        </main>
    );
};

export default VocabularySingleComponent;