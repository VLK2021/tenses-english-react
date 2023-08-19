import React, {useEffect} from 'react';

import './PresentPerfectContinuousStyle.css';
import '../TensesInEnglishStyle.css';
import {tenses} from "../../../constants";
import {useDispatch} from "react-redux";
import {titlesAction} from "../../../store/slices/titles.slice";
import GoUpButton from "../../GoUpButton/GoUpButton";


const PresentPerfectContinuous = () => {
    const dispatch = useDispatch();
    const {title, markers} = tenses[9];


    const titlesPresentPerfect = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];

    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesPresentPerfect))
    }, []);


    return (
        <main className={'tensComponent presentPerfectContinuous width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'tensComponent-rule fontSizeText'}>
                <strong>Present Perfect Continuous (Теперішній доконано-тривалий час)</strong> є часом англійської
                граматики, який використовується для вираження тривалої дії або стану, які почалися в минулому
                і тривають до моменту розмови або мають зв'язок з ним. Якщо дія завершилася, то її результати можна
                побачити у теперішньому часі. Ця конструкція ставить наголос саме на тривалість дії і відповідає на
                питання «як довго відбувається дія?».<br/>
                <strong>Present Perfect Continuous</strong> також використовується для вираження злості,
                незадоволення чимось або роздратування через певну тривалу дію.
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
                        Утворення <strong>Present Perfect Continuous</strong> використовує допоміжне дієслово
                        <strong>"have"</strong> у формі Present Perfect (has/have) + been + <strong>-ing</strong> форма
                        дієслова. <br/>
                        Основна форма: <br/>
                        <b>[Subject] + [have/has] + [been] + [verb (base form) + -ing] + [complements]</b>
                        <br/>
                        Варто зауважити, що <strong>Present Perfect Continuous</strong> передає тривалість дії або
                        стану,
                        яка триває в момент розмови або має зв'язок з ним, тому зазвичай супроводжується такими
                        обставинами як "<strong>for</strong>" (протягом) і "<strong>since</strong>" (з початку).
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Стверджувальне речення в <strong>Present Perfect Continuous (Present Perfect
                        Progressive)</strong> утворюється за допомогою комплексного допоміжного дієслова
                        <strong>have been</strong> або <strong>has been</strong> (форми Present Perfect дієслова to be)
                        у поєднанні з формою Present Participle (першої форми дієслова з
                        закінченням <strong>-ing</strong>).
                        В залежності від особи та числа, в яких стоїть підмет у реченні, використовується та або інша
                        форми допоміжного дієслова <strong>have</strong>.
                        <span className={'example'}>
                            <p>I, We, You, They → <b>have been</b> (для 1-ї, 2-ї особи та форм множини)</p>
                            <p>He, She, It → <b>has been</b> (для 3-ї особи однини)</p>
                            <p>I <b>have been watching</b> this trick all this time. – Я дивилася на цей трюк весь цей час.</p>
                            <p>She <b>has been waiting</b> for you for half an hour. – Вона чекала (чекає) на тебе з півгодини.</p>
                            <p>We’<b>ve been talking</b> about our wedding. – Ми розмовляли (розмовляємо) про наше весілля.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        В <strong>Present Perfect Continuous</strong> заперечення утворюється за допомогою заперечної
                        частки not, що ставиться після <strong>have</strong> або ж <strong>has</strong> та
                        перед <strong>been</strong>.
                        <span className={'example'}>
                            <p>I <b>have not</b> been watching this trick all this time. – Я не дивилася на цей трюк (фокус) весь цей час.</p>
                            <p>She <b>has not</b> been waiting for you for half an hour. – Вона не чекала (не чекає) на тебе з півгодини.</p>
                            <p>We <b>haven’t</b> been talking about our wedding. – Ми не розмовляли (в цей час) про наше весілля.</p>
                            <p>Ann <b>hasn’t</b> been living in this house for 10 years. – Енн не прожила (не живе) в цьому будинку 10 років.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Present Perfect Continuous</strong> утворюється за допомогою
                        винесення допоміжного дієслова <strong>have</strong> або <strong>has</strong> на початок
                        речення перед підметом.
                        <span className={'example'}>
                            <p><b>Have</b> you <b>been watching</b> this trick all this time? – Ти дивилася на цей фокус весь цей час?</p>
                            <p><b>Has</b> she <b>been waiting</b> for you for half an hour? – Вона чекала на тебе з півгодини?</p>
                            <p><b>Have</b> they <b>been talking</b> about our wedding? – Вони розмовляли про наше весілля?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Present Perfect Continuous</strong> утворюється за допомогою
                        питального слова або фрази, що ставиться на самий початок речення перед допоміжним дієсловом.
                        Подальший порядок слів такий самий, як і в загальному питанні в <strong>Present Perfect
                        Continuous</strong>.
                        <span className={'example'}>
                            <p><b>What have</b> I been doing all this time? – Що я робила весь цей час?</p>
                            <p><b>How long has</b> she been waiting for you? – Як довго вона тебе чекає?</p>
                            <p><b>Why have</b> we been talking about our wedding? – Чому ми розмовляли про наше весілля?</p>
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

export default PresentPerfectContinuous;