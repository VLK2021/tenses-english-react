import React, {useState} from 'react';

import './HomeVocabularyComponentStyle.css';
import {vocabularyHome, vocabularyTitlesForGroups} from "../../../constants";
import FormSearchComponent from "../../FormSearchComponent/FormSearchComponent";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import PopUpComponent from "../PopUpComponent/PopUpComponent";


const HomeVocabularyComponent = () => {
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});

    const [newVocabularyHome, setNewVocabularyHome] = useState(vocabularyHome);

    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newVocabularyHome.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewVocabularyHome(sortByGrows)
        } else {
            const sortByDecline = newVocabularyHome.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
            setNewVocabularyHome(sortByDecline)
        }
    };


    return (
        <main className={'homeVocabularyComponent width flexDirectionColumn'}>
            <h1>words For Home</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{vocabularyHome.length}</div>

                <article className={'homeVocabularyComponent-form'}>
                    <FormSearchComponent setNewVocabularyHome={setNewVocabularyHome}/>
                </article>
            </section>

            <section className={'homeVocabularyComponent-vocabulary width flexDirectionColumn'}>
                <header className={'width homeVocabularyComponent-vocabulary-title'}>
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
                        newVocabularyHome.map(obj => <VocabularySingleComponent
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
                                               newVocabularyHome={newVocabularyHome}
                    />
                }
            </section>
        </main>
    );
};

export default HomeVocabularyComponent;