import React, {useEffect} from 'react';

import './ToBeGoingToComponentStyle.css';
import {useDispatch} from "react-redux";
import {titlesAction} from "../../store/slices/titles.slice";
import GoUpButton from "../GoUpButton/GoUpButton";


const ToBeGoingToComponent = () => {
    const dispatch = useDispatch();

    const titlesToBeGoingToComponent = [
        'To be going to',
        'Negative sentence',
        'Interrogative sentence',
        'Спеціальне питання',
        'Заплановані дії',
        'Можливість або вірогідність чогось',
        'Наказ',
        'was / were going to',
        'to go та to come',
        'to be gonna'
    ];

    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesToBeGoingToComponent));
    }, [titlesToBeGoingToComponent]);


    return (
        <main className={'toBeGoingToComponent width flexDirectionColumn'}>
            <h1 id={'To be going to'}>To be going to</h1>

            <section className={'toBeGoingToComponent-affirmative flexDirectionColumn width'}>
                <article className={'toBeGoingToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Конструкція <strong>to be going to</strong> використовується для вираження наміру виконати щось
                        в недалекому майбутньому або ж для вираження запланованої дії. Конструкція <strong>to be going
                        to</strong> використовується тільки в теперішньому та минулому часах. Вона складається з
                        дієслова <strong>to go</strong> у формі <strong>Present Continuous (am / is / are
                        going)</strong> або <strong>Past Continuous (was / were going)</strong>, після якого вживається
                        форма інфінітиву (перша форма) смислового дієслова з часткою <strong>to</strong>.

                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Теперішній час:</h3>
                            <p>I <b>am going to</b> visit my parents next week. – Я збираюся навідати своїх батьків наступного тижня.</p>
                            <p>Matt <b>is going to</b> help me with my work. – Метт збирається допомогти мені з моєю роботою.</p>
                            <p>Ann and Sam <b>are going to</b> buy this car. – Енн та Сем збираються придбати цю машину.</p>
                        </span>

                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Минулий час:</h3>
                            <p>She <b>was going to</b> be here. – Вона збиралася прийти сюди.</p>
                            <p>
                                They <b>were going to</b> travel but they couldn’t. – Вони збиралися поїхати у мандрівку,
                                але в них не вийшло.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-negative flexDirectionColumn width marginTop'}>
                    <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'toBeGoingToComponent-negative-info width fontSizeText'}>
                    <p className={'width'}>
                        Заперечне речення утворюється за допомогою частки <strong>not</strong>, що ставиться після
                        допоміжного дієслова <strong>be</strong> (у формах <strong>am / is / are або was / were</strong>).
                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Теперішній час:</h3>
                            <p>I’<b>m not going to</b> do this! – Я не збираюся це робити!</p>
                            <p>They <b>are not going to</b> play tennis today. – Вони не збираються грати в теніс сьогодні.</p>
                        </span>

                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Минулий час:</h3>
                            <p>
                                Peter <b>wasn’t going to</b> meet Ann tonight. – Пітер не збирався зустрітися з Енн
                                сьогодні ввечері.
                            </p>
                            <p>
                                We <b>were not going to</b> buy this TV set but it was on sale. – Ми не збиралися
                                купляти цей телевізор, але на нього була знижка.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Питальне речення з <strong>to be going to</strong> утворюється шляхом винесення
                        допоміжного be (у формах <strong>am / is / are або was / were</strong>) на початок речення
                        перед підметом.
                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Теперішній час:</h3>
                            <p><b>Is</b> she really <b>going to</b> say that? – Вона дійсно збирається сказати це?</p>
                            <p>
                                <b>Are</b> you <b>going to</b> eat this piece of cake? – Ти збираєшся їсти цей
                                шматок торту?
                            </p>
                        </span>

                        <span className={'example'}>
                        <h3 className={'width marginTop'}>Минулий час:</h3>
                            <p><b>Was</b> he <b>going to</b> rob you? – Він збирався тебе пограбувати?</p>
                            <p>
                                <b>Were</b> they <b>going to</b> visit Paris this week? – Вони збиралися відвідати
                                Париж цього тижня?
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'Спеціальне питання'}>Спеціальне питання</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Спеціальне питання з <strong>to be going to</strong> утворюється за допомогою питального
                        слова або фрази, що ставиться на самий початок речення перед допоміжним дієсловом. Подальший
                        порядок слів у реченні такий самий, як і в загальному питанні для <strong>to be going
                        to</strong>.
                        <span className={'example'}>
                            <p><b>What</b> are you going to do now? – Що ти збираєшся робити зараз?</p>
                            <p>
                                <b>Where</b> were they going to meet? – Де вони збиралися зустрітися?
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <h3 className={'h3'}>Використання to be going to</h3>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'Заплановані дії'}>Заплановані дії</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Конструкція <strong>to be going to</strong> використовується для вираження бажання та наміру
                        зробити щось у майбутньому, певної запланованої дії, що повинна відбутися у майбутньому.
                        <span className={'example'}>
                            <p>
                                I’<b>m going to</b> meet Kelly tonight. Do you want to join? – Я збираюся зустрітися
                                з Келлі сьогодні ввечері. Хочеш піти з нами?
                            </p>
                            <p>
                                We <b>are going to</b> work on this project all weekends. – Ми будемо працювати над
                                цим проектом протягом всіх вихідних.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'Можливість або вірогідність чогось'}>Можливість або вірогідність чогось</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>To be going to</strong> також використовується для вираження припущення щодо чогось,
                        що повинно або дуже ймовірно може відбутися у майбутньому (як чогось позитивного, так і поганого).
                        <span className={'example'}>
                            <p>
                                It’<b>s going to</b> be cold tomorrow. – Завтра буде холодно.
                            </p>
                            <p>
                                He <b>is going to</b> be famous one day, believe me. – Одного дня він стане відомим, повір мені.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'Наказ'}>Наказ</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Конструкція <strong>to be going to</strong> може використовуватися для вираження наказу
                        або суворої заборони по відношенню до когось.
                        <span className={'example'}>
                            <p>
                                You <b>are going to</b> do your homework right now! – Ти негайно ж почнеш робити своє
                                домашнє завдання!
                            </p>
                            <p>
                               You <b>are not going to</b> say that! – Ти не скажеш цього!
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'was / were going to'}>was / were going to</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Конструкція <strong>to be going to</strong> у формі минулого часу (<strong>was / were going
                        to</strong>) означає, що запланована дія так і не відбулася.
                        <span className={'example'}>
                            <p>
                                I <b>was going to</b> invite you to the cinema but you were busy. – Я збирався запросити
                                тебе у кіно, але ти була зайнятою.
                            </p>
                            <p>
                               They <b>were going to</b> get married but it didn’t happen. – Вони збиралися одружитися, але
                                цього не сталося.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'to go та to come'}>to go та to come</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Для того, щоб уникнути тавтології після конструкції <strong>to be going to</strong> краще не
                        використовувати смислові дієслова <strong>to go</strong> (йти) та <strong>to come</strong> (приходити).
                        <span className={'example'}>
                            <h3 className={'width marginTop'}>Неправильно:</h3>
                            <p>
                                I’m going <b>to go</b> to Paris. – Я збираюся поїхати до Парижу.
                            </p>
                            <p>
                               He was going <b>to come</b> to that party. – Він збирався прийти на ту вечірку.
                            </p>
                            <h3 className={'width marginTop'}>Правильно:</h3>
                            <p>I’<b>m going to</b> Paris. – Я збираюся (поїхати) до Парижу.</p>
                            <p>He <b>was going to</b> be at that party. – Він збирався бути на тій вечірці.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeGoingToComponent-interrogative flexDirectionColumn width marginTop'}>
                <h2 className={'marginTop'} id={'to be gonna'}>to be gonna</h2>

                <article className={'toBeGoingToComponent-interrogative-info width fontSizeText'}>
                    <p className={'width'}>
                        Конструкція <strong>to be going to</strong> в розмовному мовленні часто скорочується до
                        форми <strong>to be gonna</strong>, після якої використовується інфінітив смислового дієслова
                        без частки <strong>to</strong>.
                        <span className={'example'}>
                            <p>
                                I’<b>m gonna</b> leave soon. I don’t wanna be late. – Я скоро піду. Не хочу запізнитися.
                            </p>
                            <p>
                               Ralph <b>is not gonna</b> do anything about that. – Ральф не збирається нічого робити щодо цього.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'width'}>
                <GoUpButton title={'To be going to'}/>
            </section>
        </main>
    );
};

export {ToBeGoingToComponent};