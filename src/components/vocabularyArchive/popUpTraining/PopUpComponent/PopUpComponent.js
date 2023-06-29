import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './PopUpComponentStyle.css';


const PopUpComponent = (props) => {
    const {setVisible, obj, setObj, newVocabularyArray} = props;
    console.log(obj);

    const {register, reset, handleSubmit} = useForm();

    const [arrayWords, setArrayWords] = useState([]);
    const [visiblePop, setVisiblePop] = useState(false);
    const [visiblePop1, setVisiblePop1] = useState(false);


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
    }, [arrayWords, obj.id, setObj]);


    const getRandom = useCallback(() => {
        let randomIndex = Math.floor(Math.random() * arrayWords.length);
        const randomObj = arrayWords[randomIndex];
        setObj(randomObj);
    }, [arrayWords, setObj])


    const submit = (data) => {
        if (data.write === obj.infinitive) {
            alert('Good job!!!!')
        } else {
            alert('Bad job!!!')
        }

        reset();
    };


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
                            read
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

                        <button className={'popBtn marginTop'} onClick={() => setVisiblePop1(!visiblePop1)}>write /
                            don't
                            write
                        </button>
                    </article>
                </section>

                <section className={'width nextPrev'}>
                    <button className={'trainingPopUp-btn'} onClick={getPrev}>prev</button>
                    <button className={'trainingPopUp-btn'} onClick={getRandom}>random</button>
                    <button className={'trainingPopUp-btn'} onClick={getNext}>next</button>
                </section>
            </main>
    );
};

export default PopUpComponent;