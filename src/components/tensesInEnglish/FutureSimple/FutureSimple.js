import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './FutureSimpleStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";
import GoUpButton from "../../GoUpButton/GoUpButton";


const FutureSimple = () => {
    const {title, markers} = tenses[2];
    const dispatch = useDispatch();

    const titlesFutureSimple = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];

    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesFutureSimple));
    }, [titlesFutureSimple]);


    return (
        <main className={'futureSimple flexDirectionColumn width'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'futureSimple-rule fontSizeText'}>
                <strong>Future Simple</strong> (Майбутній простий час) вживається для вираження подій, які відбудуться
                в майбутньому. Основне правило вживання цього часу полягає в тому, що ми використовуємо його,
                коли говоримо про дії, які будуть відбуватися в майбутньому без будь-якого певного зв'язку з моментом
                нашого мовлення. Для вираження загальних фактів або правдивих тверджень про майбутнє. Для вираження
                запланованих дій або зобов'язань. Для вираження прогнозів, передбачень або припущень.
            </p>

            <section className={'futureSimple-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'futureSimple-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'futureSimple-formation-info fontSizeText width'}>
                    <p>
                        Утворюється за допомогою допоміжного дієслова <strong>will</strong> або <strong>shall</strong>,
                        яке ставиться перед базовою формою дієслова без будь-яких закінчень часу.
                    </p>
                    <p>
                        Допоміжне дієслово <strong>will</strong> використовується з усіма особами
                        (<strong>I, you, he, she, it, we, they</strong>), за винятком третьої особи однини
                        (<strong>he, she, it</strong>), де можна використовувати як <strong>will</strong>, так і
                        <strong>shall</strong>. Проте, в сучасній англійській мові частіше використовується
                        <strong>will</strong> у всіх випадках.
                    </p>
                    <p>
                        Питальні та заперечні речення утворюються за допомогою допоміжного
                        дієслова <strong>will</strong> і <strong>shell</strong>.
                    </p>
                </article>
            </section>

            <section className={'futureSimple-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'futureSimple-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Future Simple</strong> (Future Indefinite) утворюється за допомогою допоміжного
                        дієслова <strong>will</strong> або <strong>shall</strong> та форми простого інфінітиву без
                        частки to активного або пасивного стану. Дієслово <strong>to be (am, is, are)</strong> в простому
                        майбутньому часі використовується в формі <strong>will be</strong> (рідше <strong>shall be</strong>).
                        <strong>Will</strong> в сучасній англійській мові вживається для всіх осіб однини та множини.
                        <strong>Shall</strong> використовується з першою особою <strong>I</strong>, <strong>We</strong>,
                        але його використання зараз вважається застарілим.
                        В сучасній англійській для всіх осіб будь-якого числа використовується тільки <strong>will</strong>
                        й це не вважається помилкою. Але <strong>shall</strong> ще можна зустріти в газетах, старих
                        або офіційних текстах, в художній літературі.
                        <span className={'example'}>
                            <p>I <b>shall</b> go for a walk tomorrow. – Завтра я піду на прогулянку.</p>
                            <p>My husband <b>will</b> buy this ring for me. – Мій чоловік придбає для мене цю каблучку.</p>
                            <p>We <b>will</b> find your key tomorrow. – Ми знайдемо твій ключ завтра.</p>
                            <p><b>He’ll</b> fly to Paris next winter. – Він полетить у Париж наступної зими.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'futureSimple-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        В заперечних реченнях в <strong>Future Simple</strong> додається заперечна частка <strong>not</strong>
                         після допоміжного дієслова <strong>will</strong> або <strong>shall</strong>.
                        Загальний порядок слів у реченні не змінюється.

                        <span className={'example'}>
                            <p>I <b>will not</b> go for a walk tomorrow. – Я не піду завтра на прогулянку.</p>
                            <p>My husband <b>will not</b> buy this ring for me. – Мій чоловік не придбає для мене цю каблучку.</p>
                            <p>We <b>will not</b> find your key tomorrow. – Ми не знайдемо твій ключ завтра.</p>
                            <p><b>will not = won’t</b></p>
                            <p>She <b>won’t</b> go to the cinema. – Вона не піде у кіно.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'futureSimple-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Утворення загального питання в <strong>Future Simple</strong> відбувається шляхом винесення
                        допоміжного дієслова <strong>will</strong> або <strong>shall</strong> на початок речення
                        перед підметом.
                        <span className={'example'}>
                            <p><b>Will</b> I go for a walk tomorrow? – Я піду завтра на прогулянку?</p>
                            <p><b>Will</b> we find your key tomorrow? – Ми знайдемо твій ключ завтра?</p>
                            <p><b>Will</b> my husband buy this ring for me? – Мій чоловік придбає для мене цю каблучку?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Future Simple</strong> утворюється за допомогою питального слова
                        або фрази, що ставиться в самий початок речення. Подальший порядок слів такий самий, як і в
                        загальному питанні для <strong>Future
                        Simple (will + підмет + інфінітив)</strong>.
                        <span className={'example'}>
                            <p><b>Where will</b> I go tomorrow? – Куди я піду завтра?</p>
                            <p><b>What will</b> my husband buy for me? – Що придбає для мене мій чоловік?</p>
                            <p><b>When will</b> we find your key? – Коли ми знайдемо твій ключ?</p>
                            <p><b>Why will</b> the project be presented next Tuesday? – Чому проект буде представлений
                                наступного вівторка?</p>
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

export default FutureSimple;