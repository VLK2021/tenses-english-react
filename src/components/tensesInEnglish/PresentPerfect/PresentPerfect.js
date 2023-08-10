import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './PresentPerfectStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";


const PresentPerfect = () => {
    const dispatch = useDispatch();
    const {title, markers} = tenses[6];

    const titlesPresentPerfect = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesPresentPerfect));
    }, [titlesPresentPerfect]);


    return (
        <main className={'presentPerfect width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'presentPerfect-rule fontSizeText'}>
                <strong>Present Perfect Tense (Теперішній завершений)</strong> є одним із часів в англійській мові, який
                використовується для вираження дій або станів, які почалися в минулому, але мають зв'язок із теперішнім
                часом або їх результати відчуваються в теперішньому часі. Часто цей час також використовується для опису
                дій, які трапилися у невизначений час до моменту розмови.
                <strong>Present Perfect Tense</strong> використовується для передачі важливості результату минулої дії
                у теперішньому часі без точного зазначення часу виконання дії. Дія була виконана колись у минулому
                (часто нещодавно), і результат цієї дії можна побачити в теперішньому часі. Також для вираження дій,
                що почалися в не зовсім відомий момент в минулому (неважливо, коли), але ще можуть бути незавершеними,
                а результат таких дій можна побачити в теперішньому часі (Незакінчені дії).
            </p>

            <section className={'presentPerfect-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'presentPerfect-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'presentPerfect-formation-info fontSizeText width'}>
                    <p>
                        Для утворення <strong>Present Perfect</strong> використовується допоміжне дієслово <strong>"have"</strong>
                        (для особових займенників І, ІІ, ІІІ особи однини) або <strong>"has"</strong> (для ІІІ особи
                        однини) у поєднанні з основним дієсловом у формі <strong>Past Participle</strong> (3-я форма дієслова).
                        Для утворення <strong>Past Participle</strong> дієслова можуть використовуватися різні правила
                        та закінчення, залежно від типу дієслова. Наприклад, для дієслів у неправильній формі
                        <strong>Past Participle</strong> можуть бути змінені корені або застосовані неправильні закінчення.
                        Найчастіше <strong>Past Participle</strong> співпадає із 2-ою формою дієслова (<strong>Past
                        Simple</strong>). Важливо також пам'ятати, що деякі дієслова можуть мати неправильну форму
                        допоміжного дієслова "<strong>have</strong>" у Present Perfect Tense. Наприклад, "<strong>have</strong>" у
                        формі <strong>Present Perfect</strong> стає "<strong>has</strong>" для ІІІ особи однини.
                    </p>
                </article>
            </section>

            <section className={'presentPerfect-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'presentPerfect-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Граматичний час <strong>Present Perfect</strong> утворюється за допомогою допоміжного
                        дієслова <strong>have</strong> або <strong>has</strong> та форми Past Participle (третьої форми
                        смислового дієслова). <strong>Past Participle</strong> для правильних дієслів утворюється
                        шляхом додавання до їх словникової форми закінчення <strong>-ed</strong>. Для неправильних
                        дієслів використовуються їхні особливі треті форми, що можна взяти з таблиці неправильних
                        дієслів. В залежності від особи та числа, в якому стоїть підмет у реченні, використовується та
                        чи інша форма допоміжного дієслова <strong>have</strong>. <br/>
                        <strong>I, We, You, They → have</strong> (для 1-ї, 2-ї особи та форм множини) <br/>
                        <strong>He, She, It → has</strong> (для 3-ї особи однини)
                        <span className={'example'}>
                            <p>I <b>have dug</b> a hole for planting trees. – Я вирив яму для посадки дерев.</p>
                            <p>He <b>has</b> just <b>finished</b> his first book. – Він тільки-но закінчив свою першу книгу.</p>
                            <p>We <b>have bought</b> all the furniture. – Ми придбали всі меблі.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'presentPerfect-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        В заперечних реченнях в <strong>Present Perfect</strong> після допоміжного дієслова <strong>have</strong>
                        або <strong>has</strong> додається заперечна частка <strong>not</strong>.

                        <span className={'example'}>
                            <p>I <b>have not</b> dug a hole. – Я не вирив яму.</p>
                            <p>He <b>has not</b> finished his first book. – Він не закінчив свою першу книгу.</p>
                            <p>We <b>haven’t</b> bought all the furniture. – Ми не придбали всі меблі.</p>
                            <p>Kate <b>hasn’t</b> been to Paris yet. – Кейт ще не була в Парижі.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'presentPerfect-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Present Perfect</strong> утворюється шляхом винесення допоміжного
                        дієслова <strong>have</strong> або <strong>has</strong> на початок речення перед підметом.
                        <span className={'example'}>
                            <p><b>Have</b> I <b>dug</b> a hole? – Я (вже) вирив яму?</p>
                            <p><strong>Have</strong> we <strong>bought</strong> all the furniture? – Ми придбали всі меблі?</p>
                            <p><strong>Has</strong> he just <strong>finished</strong> his first book? – Він тільки-но закінчив свою першу книгу?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Present Perfect</strong> утворюється за допомогою питального
                        слова або фрази, що ставиться на самий початок речення перед допоміжним дієсловом. Подальший
                        порядок слів такий самий, як і в загальному питанні з <strong>Present Perfect</strong>.
                        <span className={'example'}>
                            <p><b>What has</b> he just finished? – Що він тільки-но закінчив?</p>
                            <p><b>Where have</b> we bought all the furniture? – Де ми придбали всі меблі?</p>
                            <p><b>How deep have</b> you dug a hole? – Наскільки глибоку яму ти вирив?</p>
                    </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default PresentPerfect;