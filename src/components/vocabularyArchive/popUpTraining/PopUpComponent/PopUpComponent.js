import React, {useEffect, useState} from 'react';

import './PopUpComponentStyle.css';
import {useForm} from "react-hook-form";


const PopUpComponent = (props) => {
    const {
        setVisible, obj, setObj,
        newFruitsAndVegetables,
        newVocabularyForIt,
        newVocabularyHome,
        newVocabularyAdverbs,
        newVocabularyForFamily
    } = props;

    const {register, reset, handleSubmit} = useForm();

    const [arrayWords, setArrayWords] = useState([]);
    const [visiblePop, setVisiblePop] = useState(false);
    const [visiblePop1, setVisiblePop1] = useState(false);


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
        if (newVocabularyForFamily) {
            setArrayWords(newVocabularyForFamily)
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

    const submit = (data) => {
        if (data.write === obj.infinitive) {
            alert('Good job!!!!')
        } else {
            alert('Bad job!!!')
        }

        reset();
    }


    return (
        <main className={'popUpComponent direction-column'}>
            <button className={'trainingPopUp-btn'} onClick={() => setVisible(false)}>close</button>

            <h1>{obj.translation}</h1>

            <section className={'flex popUpComponent-read-write width'}>
                <article className={'flexDirectionColumn'}>
                    {
                        visiblePop &&
                        <div>{obj.infinitive}</div>
                    }

                    <button className={'popBtn marginTop'} onClick={() => setVisiblePop(!visiblePop)}>read / don't
                        rear
                    </button>
                </article>

                <article className={'flexDirectionColumn'}>
                    {
                        visiblePop1 &&
                        <div>
                            <form onSubmit={handleSubmit(submit)}>
                                <input type="text" {...register('write')} placeholder={'...write word'}/>
                            </form>
                        </div>
                    }

                    <button className={'popBtn marginTop'} onClick={() => setVisiblePop1(!visiblePop1)}>write / don't
                        write
                    </button>
                </article>
            </section>

            <section className={'width nextPrev'}>
                <button className={'trainingPopUp-btn'} onClick={getPrev}>prev</button>
                <button className={'trainingPopUp-btn'} onClick={getNext}>next</button>
            </section>
        </main>
    );
};

export default PopUpComponent;