import React, {useState} from 'react';

import '../VocabularyGeneralStyle.css';
import FormSearchComponent from "../FormSearchComponent/FormSearchComponent";
import {vocabularyAdverbs} from "../../../constants";
import {vocabularyTitlesForGroups} from "../../../constants";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import PopUpComponent from "../popUpTraining/PopUpComponent/PopUpComponent";


const AdverbsVocabulary = () => {
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});

    const [newVocabularyAdverbs, setNewVocabularyAdverbs] = useState(vocabularyAdverbs);


    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newVocabularyAdverbs.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewVocabularyAdverbs(sortByGrows)
        } else {
            const sortByDecline = newVocabularyAdverbs.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
            setNewVocabularyAdverbs(sortByDecline)
        }
    };


    return (
        <main className={'wrapper width flexDirectionColumn'}>
            <h1>Adverbs</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{vocabularyAdverbs.length}</div>

                <article className={'adverbsVocabulary-form'}>
                    <FormSearchComponent setNewVocabularyAdverbs={setNewVocabularyAdverbs}/>
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
                        newVocabularyAdverbs.map(obj => <VocabularySingleComponent
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
                                               newVocabularyAdverbs={newVocabularyAdverbs}
                    />
                }
            </section>
        </main>
    );
};

export default AdverbsVocabulary;