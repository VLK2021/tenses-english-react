import React, {useState} from 'react';

import '../VocabularyGeneralStyle.css';
import {vocabularyForFamily, vocabularyTitlesForGroups} from "../../../constants";
import FormSearchComponent from "../FormSearchComponent/FormSearchComponent";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import PopUpComponent from "../popUpTraining/PopUpComponent/PopUpComponent";


const FamilyVocabularyComponent = () => {
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});

    const [newVocabularyForFamily, setNewVocabularyForFamily] = useState(vocabularyForFamily);

    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newVocabularyForFamily.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewVocabularyForFamily(sortByGrows)
        } else {
            const sortByDecline = newVocabularyForFamily.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
            setNewVocabularyForFamily(sortByDecline)
        }
    };


    return (
        <main className={'wrapper width flexDirectionColumn'}>
            <h1>Family</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{vocabularyForFamily.length}</div>

                <article className={'forItComponent-form'}>
                    <FormSearchComponent setNewVocabularyForFamily={setNewVocabularyForFamily}/>
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
                        newVocabularyForFamily.map(obj => <VocabularySingleComponent
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
                                               newVocabularyForFamily={newVocabularyForFamily}
                    />
                }
            </section>

        </main>
    );
};

export default FamilyVocabularyComponent;