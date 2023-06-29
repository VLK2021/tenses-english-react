import React, {useCallback, useEffect, useState} from 'react';

import './PopUpQuizComponentStyle.css';


const PopUpQuizComponent = (props) => {
    const {newVocabularyArray, setVisibleQuiz} = props;

    const [arrayWords, setArrayWords, obj, setObj] = useState([]);

    useEffect(() => {
        if (newVocabularyArray) {
            setArrayWords(newVocabularyArray)
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
    }, [arrayWords, obj.id, setObj]);

    return (
        <main className={'popUpQuizComponent direction-column'}>
            <button className={'trainingPopUp-btn'} onClick={() => setVisibleQuiz(false)}>close</button>

            {newVocabularyArray[0].id}

            <section className={'width nextPrev'}>
                <button className={'trainingPopUp-btn'} onClick={'getPrev'}>prev</button>
                <button className={'trainingPopUp-btn'} onClick={'getRandom'}>random</button>
                <button className={'trainingPopUp-btn'} onClick={getNext}>next</button>
            </section>
        </main>
    );
};

export {PopUpQuizComponent};