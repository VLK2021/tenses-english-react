// import React, {useCallback, useEffect} from 'react';
// import {useForm} from "react-hook-form";
//
// import './AnswerComponentStyle.css';
//
//
// const AnswerComponent = ({answerArray, infinitive}) => {
//     const {register, setValue} = useForm();
//
//
//     //обнуляю інпут
//     useEffect(() => {
//         setValue('radioOption', '');
//     }, [infinitive]);
//
//     //перемішую масив щоб кожен раз міняти розташування правильного слова
//     const shuffleArray = useCallback((array) => {
//         const newArray = [...array];
//         for (let i = newArray.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//         }
//         return newArray;
//     }, []);
//
//     //отримую перемішаний новий масив для рендеру
//     const shuffledAnswerArray = shuffleArray(answerArray);
//
//     const submit = (data) => {
//         if(data.radioOption === infinitive) {
//             // alert('good!!!');
//             console.log('good');
//         } else {
//             // alert('bad!!!');
//             console.log('bad');
//         }
//     };
//
//     const handleRadioChange = (e) => {
//         const selectedOption = e.target.value;
//         setValue('radioOption', selectedOption);
//         submit({radioOption: selectedOption});
//     };
//
//
//     return (
//         <main className={'width answerComponent marginTop'}>
//             <form className={'flex'}>
//                 {
//                     shuffledAnswerArray.length &&
//                     shuffledAnswerArray.map((obj, index) =>
//                         <div key={index} className={`width answersComponent-block `}>
//                             <div className={'answersComponent-block-input'}>
//                                 <input type="radio" value={obj}
//                                        {...register(`radioOption`)}
//                                        onChange={handleRadioChange}
//                                 />
//                             </div>
//
//                             <div className={`answersComponent-block-name`}>{obj}</div>
//                         </div>
//                     )
//                 }
//             </form>
//         </main>
//     );
// };
//
// export {AnswerComponent};

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './AnswerComponentStyle.css';

const AnswerComponent = ({ answerArray, infinitive }) => {
    const { register, setValue } = useForm();

    const [selectedOption, setSelectedOption] = useState('');
    const [changeColor, setChangeColor] = useState({});
    console.log(changeColor);
    const [shuffledAnswerArray, setShuffledAnswerArray] = useState([]);

    useEffect(() => {
        setValue('radioOption', '');
        setSelectedOption('');
        setChangeColor({});
        setShuffledAnswerArray(shuffleArray(answerArray));
    }, [answerArray, infinitive, setValue]);

    useEffect(() => {
        setChangeColor({});
        const color = selectedOption === infinitive ? 'green' : 'red';
        if (selectedOption) {
            setChangeColor((prevColors) => ({ ...prevColors, [selectedOption]: color }));
        }
    }, [selectedOption, infinitive]);

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





