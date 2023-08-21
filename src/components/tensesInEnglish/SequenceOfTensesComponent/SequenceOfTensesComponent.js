import React, {useEffect} from 'react';

import './SequenceOfTensesComponentStyle.css';
import GoUpButton from "../../GoUpButton/GoUpButton";
import {useDispatch} from "react-redux";
import {titlesAction} from "../../../store/slices/titles.slice";


const SequenceOfTensesComponent = () => {
    const dispatch = useDispatch();

    const titlesSequenceOfTensesComponent = [
        'Sequence Of Tenses',
        'Одночасні дії',
        'Дія, що передує іншій дії',
        'Тривала дія, що передує іншій дії у минулому',
        'Дії, що відбуваються після інших дій',
        'Декілька підрядних речень',
        'Теперішній та майбутній часи',
        'Особливі підрядні речення',
        'Загальновідома інформація'
    ];

    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesSequenceOfTensesComponent));
    }, [titlesSequenceOfTensesComponent]);

    return (
        <main className={'sequenceOfTensesComponent width flexDirectionColumn'}>
            <h1 id={'Sequence Of Tenses'}>Sequence Of Tenses</h1>

            <p className={'sequenceOfTensesComponent-rule fontSizeText'}>
                <strong>Узгодження часів в англійській мові</strong> – це певна система залежності граматичного часу
                дієслова в
                підрядному реченні від граматичного часу, яке вживається в головній частині складнопідрядного речення.
                Правила узгодження часів часто використовуються для утворення непрямої мови. В українській мові правила
                узгодження часів відсутні, тому такі англійській речення перекладаються за нормами української мови
                (часто без збереження узгодження).
                Головне правило узгодження часів полягає у тому, що якщо в складнопідрядному реченні в головній
                частині дієслово вживається в формі одного з минулих часів (часто це Past Simple), то й дієслово
                підрядного речення повинно стояти у формі одного з минулих часів або ж у часі Future in the Past.

                <span className={'example'}>
                            <p>I <b>thought</b> you <b>knew</b> him. – Я думав, що ти знаєш його.</p>
                            <p>Chris said he <b>couldn’t find</b> you. – Кріс сказав, що він не може знайти тебе.</p>
                            <p>He <b>didn’t know</b> whether Ann <b>would come</b> or not. – Він не знав, Енн прийде чи ні.</p>
                        </span>
            </p>

            <p className={'sequenceOfTensesComponent-rule fontSizeText marginTop'}>
                Модальні дієслова <strong>can, may, will</strong> при узгодженні часів вживаються у формах минулого
                часу <strong>could, might та would, must</strong> часто замінюється на <strong>had to</strong>, а
                модальні дієслова
                <strong>сould, might, ought to, should, would</strong> не змінюються.

                <span className={'example'}>
                            <p>Mike <b>said</b> he <b>could</b> help us. – Майк сказав, що він може допомогти нам.</p>
                            <p>I <b>thought</b> I <b>had to</b> do everything by myself. – Я думав, що я повинен робити все сам.</p>
                            <p>The teacher <b>said</b> you <b>might</b> come in. – Вчитель сказав, що ти можеш увійти.</p>
                            <p>I <b>didn’t know</b> what I <b>should</b> do. – Я не знав, що мені робити.</p>
                        </span>
            </p>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Одночасні дії'}>Одночасні дії</h2>

                <article className={'sequenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо дія в підрядному реченні відбувалася одночасно з минулою дією в головному реченні,
                        то в підрядній частині використовується час <strong>Past Simple</strong> або ж <strong>Past
                        Continuous</strong> (якщо дія була тривалою).
                        <span className={'example'}>
                            <p>
                                I <b>was</b> sure Kate <b>was</b> busy that day. – Я був впевнений, що Кейт (була) зайнятою в той день.
                            </p>
                            <p>
                                Jane <b>knew</b> Matt <b>didn’t want</b> to go there. – Джейн знала, що Метт не хотів (не хоче) туди
                                йти.
                            </p>
                            <p>
                                I came to the stadium and <b>saw</b> that my friends <b>were playing</b> rugby. – Я прийшов на
                                стадіон та побачив, що мої друзі грають в регбі.
                            </p>
                            <p>
                                Janice <b>understood</b> that the guys behind her <b>were talking</b> about her friend. – Дженіс
                                зрозуміла, що хлопці позаду неї розмовляють про її друга.
                            </p>

                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Дія, що передує іншій дії'}>Дія, що передує іншій дії</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо дія підрядного речення передує минулій дії в головній частині, що в підрядній частині
                        використовується час <strong>Past Perfect</strong>.
                        <span className={'example'}>
                            <p>
                                I <b>thought</b> you <b>had finished</b> your work already. – Я думав, що ти вже
                                закінчив працювати.
                            </p>
                            <p>
                                Jack <b>knew</b> that Kate <b>had not had</b> time to write him a letter. – Джек знав,
                                що у Кейт не було (до цього) часу написати йому листа.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Тривала дія, що передує іншій дії у минулому'}>Тривала дія, що передує іншій дії у минулому</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо дія підрядного речення, що передує дії головного речення, тривала певний проміжок часу,
                        то в підрядній частині використовується час <strong>Past Perfect Continuous</strong>.
                        <span className={'example'}>
                            <p>
                                She <b>said</b> she <b>had been playing</b> the guitar all day long. – Вона сказала,
                                що грала на гітарі весь день.
                            </p>
                            <p>
                                Matt <b>knew</b> his mom <b>had been cooking</b> from the early morning. – Метт знав,
                                що його мати готувала на кухні з самого ранку.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        В такому випадку (при тривалій дії, що передує іншій дії у минулому) в підрядному реченні може
                        також використовуватися час <strong>Past Perfect</strong> з дієсловами, що не можуть бути
                        використані в часах групи <strong>Continuous: to be</strong> (бути), <strong>to belong</strong> (належати), <strong>to
                        believe</strong>(вірити), <strong>to know</strong> (знати), <strong>to feel</strong> (відчувати), <strong>to
                        love</strong> (любити), <strong>to want</strong> (хотіти) тощо або ж з неграничними дієсловами
                        (такими, що не передбачають закінчення свого протікання):<strong>to work</strong> (працювати),
                        <strong>to live</strong> (жити), <strong>to study</strong> (вчитися), <strong>to teach</strong>
                        (вчити, навчати, викладати), <strong>to travel</strong> (мандрувати), <strong>to last</strong> (продовжуватися).
                        <span className={'example'}>
                            <p>
                                Kate <b>said</b> she <b>had wanted</b> to become a teacher in her childhood. – Кейт
                                сказала, що в дитинстві хотіла стати вчителем.
                            </p>
                            <p>
                                We <b>learnt</b> that our parents <b>had lived</b> in this city for the last 50 years. –
                                Ми дізналися, що наші батьки жили в цьому місті останні 50 років.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Дії, що відбуваються після інших дій'}>Дії, що відбуваються після інших дій</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо дія в підрядному реченні відбувається після дії в головній частині (тобто мається на
                        увазі дія у майбутньому), то в підрядній частині використовується один з часів групи
                        <strong>Future in the Past</strong> в залежності від характеру дії.
                        <span className={'example'}>
                            <p>I <b>felt</b> you <b>would say</b> this to me. – Я відчував, що ти скажеш мені це.</p>
                            <p>You <b>said</b> you <b>would be waiting</b> for me. – Ти сказав, що будеш чекати на мене.</p>
                            <p>
                                We <b>didn’t expect</b> we <b>would have finished</b> this project by the end of the
                                week. – Ми не очікували, що закінчимо цей проект до кінця тижня.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Декілька підрядних речень'}>Декілька підрядних речень</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо в одному складнопідрядному реченні є підрядні речення, що залежать від іншого підрядного
                        речення в минулому часі, то вони також узгоджуються за часами.
                        <span className={'example'}>
                            <p>
                                She knows you <b>said</b> that you <b>would</b> never <b>be</b> together again. – Вона
                                знає, що ти сказав, що ви ніколи знову не будете разом.
                            </p>
                            <p>
                                Kate thinks you <b>didn’t know</b> she <b>had spent</b> all your money. – Кейт вважає,
                                що ти не знав, що вона витратила всі твої гроші.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <h1 className={'h1-second marginTop'}>Відсутність узгодження</h1>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Теперішній та майбутній часи'}>Теперішній та майбутній часи</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Якщо в складнопідрядному реченні у головній частині вживається одне з теперішніх або майбутніх
                        часів, що в підрядній частині дієслово може вживатися в будь-якому часі, і часові форми не
                        узгоджуються між собою
                        <span className={'example'}>
                            <p>I <b>don’t think</b> it <b>will rain</b> tomorrow. – Я не думаю, що завтра буде дощ.</p>
                            <p>Ann <b>knows</b> you <b>are</b> a nice guy. – Енн знає, що ти хороший хлопець.</p>
                            <p>She <b>says</b> she <b>went</b> shopping yesterday. – Вона каже, що вона пішла вчора по магазинам.</p>
                            <p>I <b>have heard</b> Jane <b>will be</b> at the party. – Я чув, що Джейн буде на вечірці.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
            <h2 className={'marginTop'} id={'Особливі підрядні речення'}>Особливі підрядні речення</h2>

            <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                <p className={'width'}>
                    Узгодження часів не відбувається, якщо в складнопідрядному реченні використовуються означальні
                    підрядні речення, або підрядні речення причини, результату, порівняння.
                        <span className={'example'}>
                            <p>
                                Yesterday i <b>bought</b> a book which <b>is</b> believed to be a bestseller. – Вчора
                                я придбав книгу, що вважається бестселером. (означення)
                            </p>
                            <p>
                                Paul <b>didn’t go</b> to the party last night because he <b>will have</b> exams in two
                                days. – Пол не пішов на вечірку минулого вечора, тому що через два дні у нього будуть
                                екзамени. (причина)
                            </p>
                            <p>
                                He <b>studied</b> so much last week that he still <b>has</b> a headache. – Він так
                                багато вчився минулого тижня, що в нього до сих під болить голова. (результат)
                            </p>
                            <p>
                                Charles <b>traveled</b> more last year than he <b>does</b> this year. – Чарльз мандрував
                                минулого року більше, ніж в цьому році. (порівняння)
                            </p>
                        </span>
                </p>
            </article>
        </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Загальновідома інформація'}>Загальновідома інформація</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Узгодження часів не відбувається, якщо в складнопідрядному реченні виражається певна
                        загальновідома інформація, певні факти або закони природи. Також узгодження не відбувається,
                        коли зображується часто повторювана дія, чиїсь звички, характеристика або ж в політичній мові.
                        <span className={'example'}>
                            <p>
                                The students <b>knew</b> that water <b>consists</b> of oxygen and hydrogen. – Студенти
                                знали, що вода складається з кисню та водню.
                            </p>
                            <p>The delegate <b>said</b> that people <b>want</b> peace. – Делегат сказав, що люди хочуть миру.</p>
                            <p>
                                I <b>asked</b> when the first train usually <b>leaves</b>. – Я спитав, коли звичайно
                                відправляється перший потяг.
                            </p>
                            <p>
                                We <b>didn’t know</b> hummingbirds <b>can fly</b> backwards. – Ми не знали, що колібрі
                                можуть літати назад.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'width'}>
                <GoUpButton title={'Sequence Of Tenses'}/>
            </section>
        </main>
    );
};

export default SequenceOfTensesComponent;