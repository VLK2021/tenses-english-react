import React from 'react';

import './SequenceOfTensesComponentStyle.css';


const SequenceOfTensesComponent = () => {

    return (
        <main className={'sequenceOfTensesComponent width flexDirectionColumn'}>
            <h1>Sequence Of Tenses</h1>

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
                <h2 className={'marginTop'}>Одночасні дії</h2>

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
                <h2 className={'marginTop'}>Дія, що передує іншій дії</h2>

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
                <h2 className={'marginTop'}>Тривала дія, що передує іншій дії у минулому</h2>

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
                <h2 className={'marginTop'}>Дії, що відбуваються після інших дій</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>

                        <span className={'example'}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'sequenceOfTensesComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Декілька підрядних речень</h2>

                <article className={'equenceOfTensesComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>

                        <span className={'example'}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default SequenceOfTensesComponent;