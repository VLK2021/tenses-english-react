import React, {useState} from 'react';

import './ForItComponentStyle.css';
import {vocabularyTitlesForGroups, vocabularyForIt} from "../../../constants";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import FormSearchComponent from "../../FormSearchComponent/FormSearchComponent";


const ForItComponent = () => {
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});



    const [newVocabularyForIt, setNewVocabularyForIt] = useState(vocabularyForIt);


    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newVocabularyForIt.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewVocabularyForIt(sortByGrows)
        } else {
                const sortByDecline = newVocabularyForIt.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
                setNewVocabularyForIt(sortByDecline)
        }
    };


    return (
        <main className={'forItComponent width flexDirectionColumn'}>
            <h1>words For It</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <article className={'forItComponent-form'}>
                    <FormSearchComponent setNewVocabularyForIt={setNewVocabularyForIt}/>
                </article>
            </section>

            <section className={'forItComponent-vocabulary width flexDirectionColumn'}>
                <header className={'width forItComponent-vocabulary-title'}>
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
                        newVocabularyForIt.map(obj => <VocabularySingleComponent
                            key={obj.id}
                            obj={obj}
                            setVisible={setVisible}
                            setObj={setObj}
                        />)
                    }
                </article>

                {
                    visible &&
                    <div className={'trainingPopUp'}>
                        <button className={'trainingPopUp-btn'} onClick={() => setVisible(false)}>close</button>
                        <h1>{obj.translation}</h1>
                    </div>
                }
            </section>
        </main>
    );
};

export default ForItComponent;