import React, {useCallback, useEffect} from 'react';
import {useForm} from "react-hook-form";

import './AnswerComponentStyle.css';


const AnswerComponent = ({answerArray, infinitive}) => {
    const {register, setValue} = useForm();

    //обнуляю інпут
    useEffect(() => {
        setValue('radioOption', '');
    }, [infinitive]);

    //перемішую масив щоб кожен раз міняти розташування правильного слова
    const shuffleArray = useCallback((array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }, []);


    const submit = (data) => {
        if(data.radioOption === infinitive) {
            alert('good!!!')
        } else {
            alert('bad!!!')
        }
    };


    const handleRadioChange = (e) => {
        const selectedOption = e.target.value;
        setValue('radioOption', selectedOption);
        submit({radioOption: selectedOption});
    };

    //отримую перемішаний новий масив для рендеру
    const shuffledAnswerArray = shuffleArray(answerArray);


    return (
        <main className={'width answerComponent marginTop'}>
            <form className={'flex'}>
                {
                    shuffledAnswerArray.length &&
                    shuffledAnswerArray.map((obj, index) =>
                        <div key={index} className={'width answersComponent-block'}>
                            <div className={'answersComponent-block-input'}>
                                <input type="radio" value={obj}
                                       {...register(`radioOption`)}
                                       onChange={handleRadioChange}
                                />
                            </div>

                            <div className={`answersComponent-block-name`}>{obj}</div>
                        </div>
                    )
                }
            </form>
        </main>
    );
};

export {AnswerComponent};