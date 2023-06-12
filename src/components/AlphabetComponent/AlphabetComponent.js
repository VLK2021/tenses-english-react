import React from 'react';

import './AlphabetComponentStyle.css';
import {alphabet} from '../../constants';
import {AlphabetSingleComponent} from "../AlphabetSingleComponent/AlphabetSingleComponent";


const AlphabetComponent = () => {

    return (
        <main className={'alphabetComponent width flexDirectionColumn'}>
            <h1>Alphabet</h1>

            <section className={'width fontSizeText'}>
                <p>Англійський алфавіт нараховує <strong>26</strong> літер: <strong>6</strong> літер позначають
                    голосні звуки та <strong>21</strong> літера відповідає приголосним звукам. Літера Y може позначати
                    як голосний
                    звук, так і приголосний в залежності від того, з якими літерами вона поеднується. Британська та
                    американська назви (вимови) літери Z відрізняються: британський варіант - [zɛd] «зед», а
                    американський – [zi:] «зі». </p>

                <article className={'width alphabetComponent-block'}>
                    {
                        alphabet.map(obj => <AlphabetSingleComponent key={obj.id} obj={obj}/>)
                    }
                </article>
            </section>
        </main>
    );
};

export {AlphabetComponent};