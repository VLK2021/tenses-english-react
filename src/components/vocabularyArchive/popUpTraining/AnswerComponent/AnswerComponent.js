import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './AnswerComponentStyle.css';


const AnswerComponent = ({ answerArray, infinitive, setIsSelected, setCorrect, correct, setWrong, wrong  }) => {
    const { register, setValue } = useForm();

    const [selectedOption, setSelectedOption] = useState('');
    const [changeColor, setChangeColor] = useState({});

    const [shuffledAnswerArray, setShuffledAnswerArray] = useState([]);

    //обнуляємо та наповнюємо стейти початковими значеннями
    useEffect(() => {
        setValue('radioOption', '');
        setSelectedOption('');
        setChangeColor({});
        setShuffledAnswerArray(shuffleArray(answerArray));
    }, [answerArray, infinitive, setValue]);

    //встановлюємо колір для слова
    useEffect(() => {
        setChangeColor({});
        const color = selectedOption === infinitive ? 'green' : 'red';
        if (selectedOption) {
            setChangeColor((prevColors) => ({ ...prevColors, [selectedOption]: color }));
        }
        if (selectedOption === infinitive) {
            setCorrect(correct +1);
        }
        if (selectedOption !== infinitive && selectedOption) {
            setWrong(wrong + 1);
        }
    }, [selectedOption]);

    //перемішуємо масив слів
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const submit = (data) => {};

    const handleRadioChange = (e, obj) => {
        const option = e.target.value;
        setValue('radioOption', option);
        setSelectedOption(option);
        setChangeColor({ [obj]: option === infinitive ? 'green' : 'red' });
        submit({ radioOption: option });
        if (option.length > 0) {
            setIsSelected(true);
        }
    };

    return (
        <main className="width answerComponent marginTop">
            <form className="flex">
                {shuffledAnswerArray.length &&
                shuffledAnswerArray.map((obj, index) => (
                    <div key={index} className="width answersComponent-block">
                        <div className="answersComponent-block-input">
                            <input
                                type="radio"
                                value={obj}
                                {...register(`radioOption`)}
                                onChange={(e) => handleRadioChange(e, obj)}
                            />
                        </div>
                        <div className={`answersComponent-block-name ${changeColor[obj]}`}>{obj}</div>
                    </div>
                ))}
            </form>
        </main>
    );
};

export { AnswerComponent };





