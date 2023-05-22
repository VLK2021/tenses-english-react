import React from 'react';

import './IrregularVerbStyle.css';


const IrregularVerb = ({obj}) => {
    const {
        infinitive,
        pastSimple,
        pastParticiple,
        translation,
        transcriptionInf,
        transcriptionPS,
        transcriptionPP
    } = obj;


    return (
        <main className={'irregularVerb width'}>
            <article className={'irregularVerb-info'}>
                <h3 className={'width'}>{infinitive}</h3>
                <h4 className={'width colorTr'}>{transcriptionInf}</h4>
            </article>
            <article className={'irregularVerb-info'}>
                <h3 className={'width'}>{pastSimple}</h3>
                <h4 className={'width colorTr'}>{transcriptionPS}</h4>
            </article>
            <article className={'irregularVerb-info'}>
                <h3 className={'width'}>{pastParticiple}</h3>
                <h4 className={'width colorTr'}>{transcriptionPP}</h4>
            </article>
            <article className={'irregularVerb-info'}>
                <h3 className={'width'}>{translation}</h3>
            </article>
        </main>
    );
};

export default IrregularVerb;