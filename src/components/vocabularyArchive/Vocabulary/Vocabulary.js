import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch} from "react-redux";

import './VocabularyStyle.css';
import ButtonVocabularyTitle from "../ButtonVocabularyTitle/ButtonVocabularyTitle";
import {vocabularyTitle} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";


const Vocabulary = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(titlesAction.getTitles([]));
}, []);


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