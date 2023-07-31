import React, {useEffect, useState} from 'react';

import './QuizSingleComponentStyle.css';
import {AnswerComponent} from "../AnswerComponent/AnswerComponent";


const QuizSingleComponent = ({obj, setIsSelected, correct, wrong, setCorrect, setWrong}) => {
    const {infinitive, translation, incorrect_answers} = obj;

    const [answerArray, setAnswerArray] = useState([]);


    useEffect(() => {
        if (incorrect_answers) {
        setAnswerArray([...incorrect_answers, infinitive]);
        }
    }, [incorrect_answers, infinitive]);


    return (
        <main className={'width quizSingleComponent'}>
            <div className={'width quizSingleComponent-title'}>
                {translation}
            </div>

            <div className={'width'}>
                {
                    answerArray.length > 0 && <AnswerComponent answerArray={answerArray}
                                                               infinitive={infinitive}
                                                               setIsSelected={setIsSelected}
                                                               setCorrect={setCorrect}
                                                               correct={correct}
                                                               setWrong={setWrong}
                                                               wrong={wrong}

                    />
                }
            </div>

            <div className={'quizSingleComponentCorWrong width flex'}>
                <p className={'correct'}>correct: {correct}</p>
                <p className={'wrong'}>wrong: {wrong}</p>
            </div>
        </main>
    );
};

export default QuizSingleComponent;