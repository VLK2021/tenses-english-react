import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ImArrowUp} from "react-icons/im";

import './VocabularyGeneralComponentStyle.css';
import '../VocabularyGeneralStyle.css';
import {
    fruitsAndVegetables,
    vocabularyAdverbs,
    vocabularyForFamily,
    vocabularyForIt,
    vocabularyHome,
    vocabularyAdjectives,
    vocabularyTitlesForGroups,
    vocabularyClothes,
    vocabularyTravel,
    vocabularyBody,
    vocabularyFodDrink,
    vocabularyPrepositions
} from "../../../constants";
import FormSearchComponent from "../FormSearchComponent/FormSearchComponent";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import PopUpComponent from "../popUpTraining/PopUpComponent/PopUpComponent";
import {PopUpQuizComponent} from "../popUpTraining/PopUpQuizComponent/PopUpQuizComponent";


const VocabularyGeneralComponent = () => {
    const {id} = useParams();

    const [visible, setVisible] = useState(false);
    const [visibleQuiz, setVisibleQuiz] = useState(false);

    const [newVocabularyArray, setNewVocabularyArray] = useState([]);

    const [obj, setObj] = useState({});
    const [title, setTitle] = useState('');


    useEffect(() => {
        if (id === 'VT1') {
            setNewVocabularyArray(vocabularyHome);
            setTitle('Home');
        }
        if (id === 'VT2') {
            setNewVocabularyArray(vocabularyForFamily);
            setTitle('Family')
        }
        if (id === 'VT3') {
            setNewVocabularyArray(vocabularyForIt);
            setTitle('fot IT');
        }
        if (id === 'VT4') {
            setNewVocabularyArray(vocabularyClothes);
            setTitle('clothes');
        }
        if (id === 'VT5') {
            setNewVocabularyArray(vocabularyTravel);
            setTitle('travel');
        }
        if (id === 'VT6') {
            setNewVocabularyArray(vocabularyBody);
            setTitle('body');
        }
        if (id === 'VT7') {
            setNewVocabularyArray(vocabularyFodDrink);
            setTitle('fod and Drink');
        }
        if (id === 'VT8') {
            setNewVocabularyArray(fruitsAndVegetables);
            setTitle('fruits and vegetables');
        }
        if (id === 'VT9') {
            setNewVocabularyArray(vocabularyAdverbs);
            setTitle('adverbs');
        }
        if (id === 'VT10') {
            setNewVocabularyArray(vocabularyAdjectives);
            setTitle('adjectives');
        }
        if (id === 'VT11') {
            setNewVocabularyArray(vocabularyPrepositions);
            setTitle('prepositions');
        }
    }, [id]);


    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newVocabularyArray.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewVocabularyArray(sortByGrows)
        } else {
            const sortByDecline = newVocabularyArray.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
            setNewVocabularyArray(sortByDecline)
        }
    };

    const quizFunction = () => {
        setVisibleQuiz(true);
        setVisible(false);
    }

    //робимо так щоб після кліку на посилання контекст не ховався під хедер а був під ним + плавна прокрутка
    const scrollToContent = (event, title) => {
        event.preventDefault();

        const headerHeight = document.querySelector('.header-block').offsetHeight;
        const offset = parseFloat(getComputedStyle(document.documentElement).fontSize);

        const targetPosition = document.getElementById(title).getBoundingClientRect().top;
        const scrollPosition = window.scrollY + targetPosition - headerHeight - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    };


    return (
        <main className={'wrapper width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{newVocabularyArray.length}</div>

                <div>
                    <button className={'btn-quiz flex'}
                            onClick={quizFunction}
                    >Quiz {`${title}`}</button>
                </div>

                <article className={'adverbsVocabulary-form'}>
                    <FormSearchComponent setNewVocabularyArray={setNewVocabularyArray} id={id}/>
                </article>
            </section>

            <section className={'wrapper-vocabulary width flexDirectionColumn'}>
                <header className={'width wrapper-vocabulary-title'}>
                    {
                        vocabularyTitlesForGroups.map(value =>
                            <h2 key={value.id} className={'names-one'}>
                                {value.name}
                            </h2>
                        )
                    }
                </header>

                <article className={'width block'}>
                    {
                        newVocabularyArray.map(obj => <VocabularySingleComponent
                            key={obj.id}
                            obj={obj}
                            setVisible={setVisible}
                            setVisibleQuiz={setVisibleQuiz}
                            setObj={setObj}
                        />)
                    }
                </article>

                {
                    visible && <PopUpComponent setVisible={setVisible}
                                               obj={obj}
                                               setObj={setObj}
                                               newVocabularyArray={newVocabularyArray}
                    />
                }

                {
                    visibleQuiz && <PopUpQuizComponent setVisibleQuiz={setVisibleQuiz}
                                                       newVocabularyArray={newVocabularyArray}
                                                       obj={obj}
                                                       setObj={setObj}
                    />
                }
            </section>


            <a href={`#${title}`} onClick={(e) => scrollToContent(e, title)}>
                <button className={'go-up flex'}>
                    <ImArrowUp/>
                </button>
            </a>
        </main>
    );
};

export {VocabularyGeneralComponent};