import React, {useEffect, useState} from 'react';

import './PopUpComponentStyle.css';


const PopUpComponent = (props) => {
    const {
        setVisible, obj, setObj,
        newFruitsAndVegetables,
        newVocabularyForIt,
        newVocabularyHome
    } = props;

    const [arrayWords, setArrayWords] = useState([]);


    useEffect(() => {
        if (newFruitsAndVegetables) {
            setArrayWords(newFruitsAndVegetables)
        }
        if (newVocabularyForIt) {
            setArrayWords(newFruitsAndVegetables)
        }
        if (newVocabularyHome) {
            setArrayWords(newVocabularyHome)
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


    return (
        <main className={'popUpComponent direction-column'}>
            <button className={'trainingPopUp-btn'} onClick={() => setVisible(false)}>close</button>
            <h1>{obj.translation}</h1>
            <button className={'trainingPopUp-btn'} onClick={getNext}>next</button>
        </main>
    );
};

export default PopUpComponent;