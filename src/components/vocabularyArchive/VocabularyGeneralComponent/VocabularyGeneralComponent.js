import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import '../VocabularyGeneralStyle.css';
import {
    fruitsAndVegetables,
    vocabularyAdverbs,
    vocabularyForFamily,
    vocabularyForIt,
    vocabularyHome,
    vocabularyTitlesForGroups
} from "../../../constants";
import FormSearchComponent from "../FormSearchComponent/FormSearchComponent";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import PopUpComponent from "../popUpTraining/PopUpComponent/PopUpComponent";


const VocabularyGeneralComponent = () => {
    const {id} = useParams();

    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});
    const [title, setTitle] = useState('');

    const [newVocabularyArray, setNewVocabularyArray] = useState([]);

    useEffect(()=>{
        if (id === 'VT1') {
            setNewVocabularyArray(vocabularyHome);
            setTitle('Home')
        }
        if (id === 'VT2') {
            setNewVocabularyArray(vocabularyForFamily);
            setTitle('Family')
        }
        if (id === 'VT3') {
            setNewVocabularyArray(vocabularyForIt);
            setTitle('Fot IT')
        }
        if (id === 'VT7') {
            setNewVocabularyArray(fruitsAndVegetables);
            setTitle('fruits and vegetables')
        }
        if (id === 'VT8') {
            setNewVocabularyArray(vocabularyAdverbs);
            setTitle('adverbs')
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


    return (
        <main className={'wrapper width flexDirectionColumn'}>
            <h1>{title}</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{newVocabularyArray.length}</div>

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
            </section>
        </main>
    );
};

export {VocabularyGeneralComponent};