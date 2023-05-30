import React from 'react';

import './PresentContinuousStyle.css';
import {tenses} from "../../../constants";


const PresentContinuous = () => {
    const {title, markers} = tenses[3];


    return (
        <main className={'presentContinuous flexDirectionColumn width'}>
            <h1>{title}</h1>

            <p className={'presentContinuous-rule fontSizeText'}>
                <strong>Present Continuous</strong> (Present Progressive)виражає: дії, що були заплановані на найближче
                майбутнє, особливо якщо час та місце виконання дії заздалегідь відомі та сплановані, для вираження
                ситуацій, що розвиваються або змінюються, тобто для вираження певних тенденцій, для вираження тимчасової
                дії, що відбувається не в даний момент часу, а загалом в найближчий часовий проміжок, певної дії, що
                відбувається прямо зараз, в момент говоріння. Також <strong>Present Continuous</strong> вказує на
                одночасні дії,
                що відбуваються саме в цей момент. Дії, що відбуваються зараз, плани на найближче майбутнє, обставини,
                що змінюються, негативние ставлення до дій.
            </p>

            <section className={'presentContinuous-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'presentContinuous-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'futureSimple-formation-info fontSizeText width'}>
                    <p>
                        <strong>Present Continuous</strong> (Present Progressive) утворюється за допомогою допоміжного
                        дієслова <strong>to be</strong> у формах <strong>(am, is, are)</strong> та дієприкметника
                        теперішнього
                        часу смислового дієслова. В англійській мові дієприкметники утворюються за допомогою
                        закінчення <strong>-ing</strong>.
                    </p>
                </article>
            </section>

            <section className={'presentContinuous-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Affirmative sentence</h2>

                <article className={'futureSimple-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Граматичний час <strong>Present Continuous (Present Progressive)</strong> утворюється за
                        допомогою допоміжного дієслова <strong>be</strong> у формах <strong>am, is, are</strong> та
                        форми <strong>Present Participle</strong> (першої форми смислового дієслова з
                        закінченням <strong>-ing</strong>). Вибір необхідної форми допоміжного дієслова залежить від
                        підмета.
                        <span className={'example'}>
                            <p>I → <b>am</b> (про себе)</p>
                            <p>He, she, it → <b>is</b> (підмет виражений іменником або займенником в однині)</p>
                            <p>You, we, they → <b>are</b> (підмет виражений іменником або займенником в множині або займенником you)</p>
                            <p>I <b>am speaking</b> over the telephone. – Я розмовляю по телефону.</p>
                            <p>She <b>is watching</b> TV now. – Вона зараз дивиться телевізор.</p>
                            <p>They <b>are walking</b> down the street. – Вони прогулюються вниз вулицею.</p>
                            <p>She<b>’s working</b> now. – Вона зараз працює.</p>
                            <p>We<b>’re cleaning</b> the house. – Ми прибираємось у будинку.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'presentContinuous-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечне речення в <strong>Present Continuous</strong> утворюється за допомогою заперечної
                        частки <strong>not</strong>, що ставиться після допоміжного дієслова <strong>am, is або
                        are</strong>.
                        Загальний порядок слів при цьому не змінюється.

                        <span className={'example'}>
                            <p>I <b>am not</b> playing the guitar now. – Я зараз не граю на гітарі.</p>
                            <p>She <b>is not</b> watching TV now. – Вона зараз не дивиться телевізор.</p>
                            <p>Kate <b>isn’t</b> studying at the moment. – Кейт не вчиться в цей момент.</p>
                            <p>They <b>aren’t</b> talking about it. – Вони не розмовляють про це.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'presentContinuous-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Present Continuous</strong> утворюється шляхом винесення допоміжного
                        дієслова <strong>am, is або are</strong> на початок речення перед підметом.
                        <span className={'example'}>
                            <p><b>Am</b> I speaking over the telephone? – Я розмовляю по телефону (зараз)?</p>
                            <p><b>Is</b> she watching TV now? – Вона дивиться зараз телевізор?</p>
                            <p><b>Are</b> they walking down the street? – Вони йдуть вниз вулицею?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Present Continuous </strong>утворюється за допомогою питального
                        слова або фрази, що ставиться на початок речення перед допоміжним дієсловом. Подальший порядок
                        слів такий самий, як і в загальному питанні для <strong>Present Continuous</strong>.
                        <span className={'example'}>
                            <p><b>What am</b> I doing now? – Що я зараз роблю?</p>
                            <p><b>What is</b> she watching now? – Що вона зараз дивиться?</p>
                            <p><b>Where are</b> they walking? – Де вони прогулюються?</p>
                    </span>
                    </p>
                </article>
            </section>

        </main>
    );
};

export default PresentContinuous;