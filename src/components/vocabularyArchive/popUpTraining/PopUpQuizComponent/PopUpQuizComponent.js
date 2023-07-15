import React, {useCallback, useEffect, useState} from 'react';

import './PopUpQuizComponentStyle.css';
import QuizSingleComponent from "../QuizSingleComponent/QuizSingleComponent";


const PopUpQuizComponent = (props) => {
    const {newVocabularyArray, setVisibleQuiz, obj, setObj} = props;

    const [arrayWords, setArrayWords] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (newVocabularyArray) {
            setArrayWords(newVocabularyArray);
            setObj(newVocabularyArray[0]);
        }
    }, [newVocabularyArray]);


    const getNext = useCallback(() => {
        const currentIndex = arrayWords.findIndex(item => item.id === obj.id);
        for (let i = 0; i < arrayWords.length; i++) {
            const element = arrayWords[i];
            if (element.id === obj.id) {
                setObj(arrayWords[i + 1]);
            }
            if (currentIndex === arrayWords.length - 1) {
                setObj(arrayWords[0])
            }
        }
        //після натискання на некст дізейблить кнопку допоки не виберуть один з варіантів відповіді
        setIsSelected(false);

    }, [arrayWords, obj.id, setObj]);

    const getPrev = useCallback(() => {
        const currentIndex = arrayWords.findIndex(item => item.id === obj.id);
        for (let i = 0; i < arrayWords.length; i++) {
            const element = arrayWords[i];
            if (element.id === obj.id) {
                setObj(arrayWords[i - 1]);
            }
            if (currentIndex === 0) {
                setObj(arrayWords[arrayWords.length - 1])
            }
        }
        //після натискання на некст дізейблить кнопку допоки не виберуть один з варіантів відповіді
        setIsSelected(false);

    }, [arrayWords, obj.id, setObj]);

    const getRandom = useCallback(() => {
        let randomIndex = Math.floor(Math.random() * arrayWords.length);
        const randomObj = arrayWords[randomIndex];
        setObj(randomObj);

        //після натискання на некст дізейблить кнопку допоки не виберуть один з варіантів відповіді
        setIsSelected(false);
    }, [arrayWords, setObj])


    return (
        <main className={'popUpQuizComponent direction-column'}>
            <button className={'trainingPopUp-btn'} onClick={() => setVisibleQuiz(false)}>close</button>

            <div className={'width'}>
                {
                    obj && <QuizSingleComponent obj={obj} setIsSelected={setIsSelected}/>
                }
            </div>

            <section className={'width nextPrev'}>
                <button className={'trainingPopUp-btn'} onClick={getPrev} disabled={!isSelected}>prev</button>
                <button className={'trainingPopUp-btn'} onClick={getRandom} disabled={!isSelected}>random</button>
                <button className={'trainingPopUp-btn'} onClick={getNext} disabled={!isSelected}>next</button>
            </section>
        </main>
    );
};

export {PopUpQuizComponent};