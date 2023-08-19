import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './FutureContinuousStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";
import GoUpButton from "../../GoUpButton/GoUpButton";


const FutureContinuous = () => {
    const dispatch = useDispatch();
    const {title, markers} = tenses[5];

    const titlesFutureContinuous = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesFutureContinuous));
    }, [titlesFutureContinuous]);



    return (
        <main className={'futureContinuous width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'pastContinuous-rule fontSizeText'}>
                <strong>Future Continuous (Майбутній тривалий час)</strong> є одним з часів в англійській мові і
                використовується для вираження дії, яка буде тривати у певний момент у майбутньому або протягом певного
                періоду часу. <strong>Future Continuous</strong> використовується для вираження oдночасні дії в
                майбутньому, для опису дій, що будуть відбуватися в конкретний, точно відомий момент або ж проміжок
                часу в майбутньому, для описання події, що неодмінно відбудеться в найближчому майбутньому, так як вона
                була спланована або неминуча через певні обставини, може бути використаним, щоб повідомити про
                заплановані дії, що повинні відбутися найближчим часом, однак в сучасній англійській для цього частіше
                використовується час <strong>Present Continuous</strong>, може використовуватися для того, щоб задати
                ввічливе питання про чиїсь дії або плани на найближче майбутнє.
            </p>

            <section className={'futureContinuous-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'futureContinuous-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'futureContinuous-formation-info fontSizeText width'}>
                    <p>
                        Форма <strong>Future Continuous</strong> складається з допоміжного
                        дієслова <strong>"will"</strong>
                        (або <strong>"shall"</strong> для першої особи однини) + дієслово <strong>"be"</strong> у
                        формі <strong>Present participle</strong> (дієприкметник з закінченням <strong>-ing</strong>).
                    </p>
                </article>
            </section>

            <section className={'futureContinuous-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'futureContinuous-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Future Continuous (Future Progressive)</strong> утворюється за допомогою допоміжного
                        дієслова <strong>will</strong> (рідше <strong>shall для I та We</strong>) та форми тривалого
                        інфінітиву (<strong>be</strong> + дієслово з закінченням <strong>-ing</strong>).
                        <strong>Will</strong> в сучасній англійській мові вживається для всіх осіб однини та множини.
                        <strong>Shall</strong> використовується з першою особою <strong>I, We</strong>, але його
                        використання зараз вважається застарілим. В сучасній англійській для всіх осіб будь-якого числа
                        використовується тільки <strong>will</strong> й це не вважається помилкою.
                        Але <strong>shall</strong>
                        ще можна зустріти в газетах, старих або офіційних текстах, в художній літературі.
                        <span className={'example'}>
                            <p>I <b>shall be</b> work<b>ing</b> here. – Я буду тут працювати.</p>
                            <p>He <b>will be</b> drink<b>ing</b> tea with us. – Він буде пити з нами чай.</p>
                            <p>We <b>will be</b> danc<b>ing</b> all night. – Ми будемо танцювати всю ніч.</p>
                            <p>I’<b>ll be</b> sitt<b>ing</b> there. – Я буду сидіти там.</p>
                            <p>She’<b>ll be</b> send<b>ing</b> some letters. – Вона буде відправляти якісь листи.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'futureContinuous-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечення в <strong>Future Continuous</strong> утворюється за допомогою додавання частки
                        <strong>not</strong> після дієслова <strong>will</strong> або <strong>shall</strong>.

                        <span className={'example'}>
                            <p>I <b>will not be</b> working here. – Я не буду працювати тут.</p>
                            <p>He <b>will not be</b> drinking tea with us. – Він не буде пити з нами чай.</p>
                            <p>We <b>will not be</b> dancing all night. – Ми не будемо танцювати всю ніч.</p>
                            <p>I <b>won’t be</b> working here. – Я не буду працювати тут.</p>
                            <p>We <b>shan’t be</b> dancing all night. – Ми не будемо танцювати всю ніч.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'futureContinuous-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Future Continuous</strong> утворюється за допомогою винесення
                        допоміжного дієслова <strong>will</strong> (або <strong>shall</strong>) на початок речення перед
                        підметом.
                        <span className={'example'}>
                            <p><b>Will</b> I be working here? – Я буду тут працювати?</p>
                            <p><b>Will</b> he be drinking tea with us? – Він буде пити з нами чай?</p>
                            <p><b>Will</b> we be dancing all night? – Ми будемо танцювати всю ніч?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Future Continuous</strong> утворюється за допомогою питального
                        слова або фрази, що ставиться в самий початок речення. Подальший порядок слів такий самий,
                        як і в загальному питанні для <strong>Future Continuous</strong>.
                        <span className={'example'}>
                            <p><b>What will</b> I be doing here? – Що я буду тут робити?</p>
                            <p><b>Whom will</b> he be drinking tea with? – З ким він буде пити чай?</p>
                            <p><b>How long will</b> we be dancing? – Як довго ми будемо танцювати?</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'width'}>
                <GoUpButton title={title}/>
            </section>
        </main>
    );
};

export default FutureContinuous;