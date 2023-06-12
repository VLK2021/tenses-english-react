import React, {useState} from 'react';

import '../VocabularyGeneralStyle.css';
import {fruitsAndVegetables} from "../../../constants";
import {vocabularyTitlesForGroups} from "../../../constants";
import VocabularySingleComponent from "../VocabularySingleComponent/VocabularySingleComponent";
import FormSearchComponent from "../FormSearchComponent/FormSearchComponent";
import PopUpComponent from "../popUpTraining/PopUpComponent/PopUpComponent";


const FruitsAndVegetables = () => {
    const [newFruitsAndVegetables, setNewFruitsAndVegetables] = useState(fruitsAndVegetables);
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({});


    const handleSelectChange = (e) => {
        const current = e.target.value;
        if (current === 'growth') {
            const sortByGrows = newFruitsAndVegetables.slice().sort((a, b) => a.infinitive > b.infinitive ? 1 : -1)
            setNewFruitsAndVegetables(sortByGrows)
        } else {
            const sortByDecline = newFruitsAndVegetables.slice().sort((a, b) => b.infinitive > a.infinitive ? 1 : -1)
            setNewFruitsAndVegetables(sortByDecline)
        }
    };


    return (
        <main className={'width wrapper flexDirectionColumn'}>
            <h1>Fruits and Vegetables</h1>

            <section className={'select width'}>
                <article>
                    <p>sort by:</p>

                    <select name="ddd" id="#" onChange={handleSelectChange}>
                        <option value="growth">by growth</option>
                        <option value="decline">by decline</option>
                    </select>
                </article>

                <div>{fruitsAndVegetables.length}</div>

                <article className={'forItComponent-form'}>
                    <FormSearchComponent setNewFruitsAndVegetables={setNewFruitsAndVegetables}/>
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
                        newFruitsAndVegetables.map(obj => <VocabularySingleComponent
                            key={obj.id}
                            obj={obj}
                            setVisible={setVisible}
                            setObj={setObj}
                        />)
                    }
                </article>

                {
                    visible && <PopUpComponent setVisible={setVisible}
                                               newFruitsAndVegetables={newFruitsAndVegetables}
                                               obj={obj}
                                               setObj={setObj}
                    />
                }
            </section>
        </main>
    );
};

export default FruitsAndVegetables;