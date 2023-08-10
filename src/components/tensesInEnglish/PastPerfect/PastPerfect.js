import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './PastPerfectStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";


const PastPerfect = () => {
    const dispatch = useDispatch();
    const {title, markers} = tenses[7];

    const titlesPastPerfect = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesPastPerfect));
    }, [titlesPastPerfect]);

    return (
        <main className={'pastPerfect width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'pastPerfect-rule fontSizeText'}>
                <strong>Past Perfect Tense (Past Perfect)</strong> є одним із часів в англійській мові, який
                використовується для вираження дій або станів, які відбулися перед певним моментом в минулому. Він
                показує послідовність подій у минулому, де одна подія сталася перед іншою. <strong>Past Perfect</strong>
                використовується для вираження дії, яка передує іншій дії у минулому або ж відбувалася до певного
                моменту
                в минулому. Використовується для вираження дій, що завершилися в минулому й результат цих дій був також
                спостерігався у минулому. <br/> <strong>Past Perfect</strong> використовується в
                конструкціях <strong>hardly...when</strong>
                та <strong>no sooner...than</strong>. Ці два вирази перекладаються як «ледь я», «тільки-но я»,
                «тільки щойно я». В таких реченнях <strong>Past Perfect</strong> також описує минулу дію, що відбулася
                перед іншою дією. Однак, особливістю є те, що в частині з <strong>Past Perfect</strong> використовується
                непрямий порядок слів (як в загальному питанні) або інверсія. В другій частині складного речення
                використовується час <strong>Past Simple</strong>.
            </p>

            <section className={'pastPerfect-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'pastPerfect-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'pastPerfect-formation-info fontSizeText width'}>
                    <p>
                        Для утворення <strong>Past Perfect</strong> використовується допоміжне
                        дієслово <strong>"had"</strong>
                        у поєднанні з основним дієсловом у формі <strong>Past Participle</strong> (3-я форма дієслова).
                        Як і у випадку з <strong>Present Perfect</strong>, для утворення <strong>Past
                        Participle</strong> можуть
                        використовуватися різні правила та закінчення, залежно від типу дієслова. Найчастіше
                        <strong>Past Participle</strong> співпадає із 2-ою формою дієслова (Past Simple).
                    </p>
                </article>
            </section>

            <section className={'pastPerfect-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'pastPerfect-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        В <strong>Past Perfect</strong> стверджувальне речення формується за допомогою допоміжного
                        дієслова <strong>had</strong> та форми <strong>Past Participle (третя форма дієслова)</strong>.
                        <strong>Had</strong> – це форма минулого часу допоміжного дієслова <strong>have</strong>.
                        <strong>Past Participle</strong> для правильних дієслів утворюється шляхом додавання
                        закінчення <strong>-ed</strong> до словникової форми дієслова. Неправильні дієслова мають свої
                        окремі треті форми, які можна взяти з таблиці неправильних дієслів. Форми <strong>Past
                        Perfect</strong>,
                        на відміну від <strong>Past Simple</strong>, завжди утворюються допоміжним
                        дієсловом <strong>had</strong>
                        та формою <strong>Past Participle</strong> (третя форма дієслова) від смислового дієслова.
                        <span className={'example'}>
                            <p>I <b>had booked</b> the table. – Я замовила (забронювала) столик</p>
                            <p>She <b>had washed</b> her hair. – Вона вимила волосся.</p>
                            <p>They <b>had seen</b> the sunset. – Вони побачили захід сонця.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'pastPerfect-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Для того, щоб утворити заперечення <strong>Past Perfect</strong>, слід додати заперечну
                        частку <strong>not</strong> після допоміжного дієслова <strong>had</strong>.

                        <span className={'example'}>
                            <p>I <b>had not</b> booked a table. – Я не забронювала столик.</p>
                            <p>She <b>had not</b> washed her hair. – Вона не вимила волосся.</p>
                            <p>They <b>hadn’t</b> seen the sunset. – Вони не побачили захід сонця.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'pastPerfect-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Past Perfect</strong> формується шляхом винесення допоміжного
                        дієслова had на початок речення перед підметом.
                        <span className={'example'}>
                            <p><b>Had</b> you booked a table? – Ти забронювала столик?</p>
                            <p><b>Had</b> she washed her hair? – Вона вимила волосся?</p>
                            <p><b>Had</b> they seen the sunset? – Вони побачили захід?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Past Perfect</strong> утворюється за допомогою питального слова
                        або фрази, що стоїть на самому початку речення. Подальший порядок слів такий самий, як і в
                        загальному питанні для <strong>Past Perfect</strong> (<strong>had</strong> + підмет + третя
                        форма дієслова).
                        <span className={'example'}>
                            <p><b>What had</b> I done? – Що я зробила?</p>
                            <p><b>Where had</b> she washed this cup? – Де вона мила цю чашку?</p>
                            <p><b>Who had</b> seen the sunset? – Хто побачив захід сонця?</p>
                    </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default PastPerfect;