import React, {useEffect, useState} from 'react';

import './PopUpComponentStyle.css';


const PopUpComponent = (props) => {
    const {
        setVisible, obj, setObj,
        newFruitsAndVegetables,
        newVocabularyForIt,
        newVocabularyHome,
        newVocabularyAdverbs
    } = props;

    const [arrayWords, setArrayWords] = useState([]);
    const [visiblePop, setVisiblePop] = useState(false);


    useEffect(() => {
        if (newFruitsAndVegetables) {
            setArrayWords(newFruitsAndVegetables)
        }
        if (newVocabularyForIt) {
            setArrayWords(newVocabularyForIt)
        }
        if (newVocabularyHome) {
            setArrayWords(newVocabularyHome)
        }
        if (newVocabularyAdverbs) {
            setArrayWords(newVocabularyAdverbs)
        }
    }, []);

    const getNext = () => {
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
    };

    const getPrev = () => {
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
    }


    return (
        <main className={'popUpComponent direction-column'}>
            <button className={'trainingPopUp-btn'} onClick={() => setVisible(false)}>close</button>

            <h1>{obj.translation}</h1>
            {
                visiblePop &&
                <div>{obj.infinitive}</div>
            }
            <button className={'popBtn'} onClick={() => setVisiblePop(!visiblePop)}>show / don't Show</button>

            <article className={'width nextPrev'}>
                <button className={'trainingPopUp-btn'} onClick={getPrev}>prev</button>
                <button className={'trainingPopUp-btn'} onClick={getNext}>next</button>
            </article>
        </main>
    );
};

export default PopUpComponent;