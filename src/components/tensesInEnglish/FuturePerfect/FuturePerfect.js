import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './FuturePerfectStyle.css';
import '../TensesInEnglishStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";


const FuturePerfect = () => {
    const dispatch = useDispatch();
    const {title, markers} = tenses[8];

    const titlesFuturePerfect = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesFuturePerfect));
    }, [titlesFuturePerfect]);


    return (
        <main className={'tensComponent futurePerfect width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'tensComponent-rule fontSizeText'}>
                <strong>Future Perfect Tense (Future Perfect)</strong> є одним із часів в англійській мові, який
                використовується для вираження дій або станів, які будуть завершені до певного моменту в майбутньому.
                Він вказує на послідовність подій, де дія завершиться до певного моменту в майбутньому.
                <strong>Future Perfect</strong> використовується для описання дії у майбутньому, яка почнеться та
                закінчиться до певного моменту або до іншої дії в майбутньому, або ж буде тривати в цей певний момент
                у майбутньому.
            </p>

            <section className={'tensComponent-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'tensComponent-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'tensComponent-formation-info fontSizeText width'}>
                    <p>
                        Для утворення <strong>Future Perfect</strong> використовується допоміжне дієслово
                        <strong>"will have"</strong> (для всіх особових займенників) у поєднанні з основним дієсловом
                        у формі <strong>Past Participle</strong> (3-я форма дієслова).
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Future Perfect</strong> утворюється за допомогою допоміжного
                        дієслова <strong>will</strong>
                        (або рідше <strong>shall</strong>) та форми доконаного інфінітиву <strong>Perfect
                        Infinitive</strong>
                        (<strong>have</strong> + смислове дієслово в третій формі) без частки to.
                        Якщо доконаний інфінітив утворюється від правильного дієслова, то його третя форма утворюється
                        за допомогою додавання закінчення закінчення <strong>-ed</strong>. Якщо використовується
                        неправильне
                        дієслово, тоді третя форма береться з таблиці неправильних дієслів. Якщо необхідного дієслова
                        немає в цій таблиці, це означає, що він правильний і до нього слід додавати
                        закінчення <strong>-ed</strong>.
                        <strong>Will</strong> в сучасній англійській мові вживається для всіх осіб однини та множини.
                        <strong>Shall</strong> використовується з першою особою <strong>I, We</strong>, але його
                        використання зараз вважається застарілим. В сучасній англійській для всіх осіб будь-якого числа
                        використовується тільки <strong>will</strong> й це не вважається помилкою.
                        Але <strong>shall</strong> ще
                        можна зустріти в газетах, старих або офіційних текстах, в художній літературі.
                        <span className={'example'}>
                            <p>I <b>shall have done</b> this work by 5 o’clock tomorrow. – Я виконаю цю роботу до 5-ї години завтра.</p>
                            <p>She <b>will have bought</b> these flowers before the beginning of the party. – Вона придбає ці
                                квіти до початку вечірки.
                            </p>
                            <p>They <b>will have found</b> the new actor by next week. – Вони знайдуть нового актора до наступного тижня</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечення в <strong>Future Perfect</strong> утворюється шляхом додавання
                        частки <strong>not</strong> після
                        допоміжного дієслова <strong>will</strong> або <strong>shall</strong>.

                        <span className={'example'}>
                            <p>I <b>will not</b> have done this work by 5 o’clock tomorrow. – Я не виконаю цю роботу
                                до 5-ї години завтра.
                            </p>
                            <p>They <b>will not</b> have found the new actor by next week. – Вони не знайдуть нового актора до
                                наступного тижня.
                            </p>
                            <p>She <b>won’t</b> have bought these flowers before the beginning of the party. – Вона не придбає
                                ці квіти до початку вечірки.
                            </p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Утворення загального питання в <strong>Future Perfect</strong> відбувається шляхом винесення
                        допоміжного дієслова <strong>will</strong> або <strong>shall</strong> на початок речення перед
                        підметом.
                        <span className={'example'}>
                            <p><b>Will</b> I have done this work by 5 o’clock tomorrow? – Я виконаю цю роботу до 5-ї
                                години завтра?
                            </p>
                            <p><b>Will</b> she have bought these flowers before the beginning of the party? – Вона
                                придбає ці квіти до початку вечірки?
                            </p>
                            <p><b>Will</b> they have found the new actor by next week? – Вони знайдуть нового актора до
                                наступного тижня?
                            </p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Future Perfect</strong> утворюється за допомогою певного питального
                        слова або фрази, що ставиться на початку речення. Подальший порядок слів такий самий як і в
                        загальному питанні для <strong>Future Perfect</strong>.
                        <span className={'example'}>
                            <p><b>What shall</b> I have done by 5 o’clock tomorrow? – Що я виконаю до 5-ї години завтра?</p>
                            <p><b>When will</b> she have bought these flowers? – Коли вона придбає ці квіти? (до якого часу?)</p>
                            <p><b>Where will</b> they have found a new actor by next week? – Де вони знайдуть
                                нового актора до наступного тижня?
                            </p>
                    </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default FuturePerfect;