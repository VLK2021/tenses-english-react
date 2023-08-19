import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './PastPerfectContinuousStyle.css';
import '../TensesInEnglishStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";
import GoUpButton from "../../GoUpButton/GoUpButton";


const PastPerfectContinuous = () => {
    const dispatch = useDispatch();

    const {title, markers} = tenses[10];

    const titlesPastPerfectContinuous = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesPastPerfectContinuous));
    }, [titlesPastPerfectContinuous]);


    return (
        <main className={'tensComponent pastPerfectContinuous width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'tensComponent-rule fontSizeText'}>
                <strong>Past Perfect Continuous</strong> (або <strong>Past Perfect Progressive</strong>) - це часова
                форма дієслова, яка використовується для вираження тривалості дії в минулому до певного моменту часу,
                або для позначення тривалості дії, яка почалася в минулому і тривала до певного моменту в минулому.
                Ця форма утворюється за допомогою <strong>підмета + had been + present participle (V-ing)</strong> форма
                дієслова.
                Ця форма допомагає виразити тривалість дії в минулому, яка відбувалася до певної події, також
                підкреслюючи, що ця дія тривала і тривала певний час. <strong>Past Perfect
                Continuous</strong> використовується
                для того, щоб підкреслити саме тривалість певної дії, що почалася, тривала та завершилась до певного
                моменту або ж іншої дії у минулому. Результат такої тривалої дії також був відчутний в минулому.
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
                        <strong>Past Perfect Continuous</strong> утворюється шляхом поєднання допоміжного
                        дієслова <strong>"had"</strong> в минулому часі з часткою <strong>"been"</strong> і
                        дієприкметником (present participle) форми дієслова. Зверніть увагу, що <strong>"V-ing"</strong>
                        це дієприкметник, який утворюється додаванням суфіксу <strong>"-ing"</strong> до базової форми
                        дієслова.
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Стверджувальне речення в <strong>Past Perfect Continuous</strong> (Past Perfect Progressive)
                        утворюється
                        за допомогою комплексного допоміжного дієслова <strong>had been</strong> (форма <strong>Past
                        Perfect</strong> від допоміжного дієслова <strong>be</strong>), що використовується для всіх
                        осіб однини та множини, та форми Present Participle (першої форми смислового дієслова з
                        закінченням <strong>-ing</strong>).
                        <span className={'example'}>
                            <p>
                                We <b>had been searching</b> for a room for two hours before we found a free one. – Ми
                                шукали кімнату дві години, поки не знайшли вільну.
                            </p>
                            <p>
                                I <b>had been waiting</b> for them all morning, so I felt annoyed. – Я чекала їх весь
                                ранок, тому я була роздратована.
                            </p>
                            <p>
                                She<b>’d been driving</b> a car for an hour before she came to the gas station. – Вона
                                керувала машиною з цілу годину, поки не приїхала на автозаправну станцію
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        В <strong>Past Perfect Continuous</strong> заперечення формується за допомогою заперечної
                        частки <strong>not</strong>, що ставиться після допоміжного дієслова <strong>had</strong>.
                        Загальний порядок слів в реченні при цьому не змінюється.

                        <span className={'example'}>
                            <p>
                                We <b>had not</b> been searching for a room for two hours before we found a free one. – Ми
                                не шукали кімнату з дві години, поки не знайшли вільну.
                            </p>
                            <p>
                                I <b>had not</b> been waiting for them all morning, so I didn’t feel annoyed. – Я не
                                чекала їх весь ранок, тому я не була роздратована.
                            </p>
                            <p>
                                She <b>hadn’t</b> been driving a car for an hour before she came to the gas station. – Вона
                                не була за кермом з годину до того, як приїхала на автозаправну станцію.
                            </p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Для того, щоб утворити загальне питання в <strong>Past Perfect Continuous</strong>, необхідно
                        <strong>had</strong> (частину комплексного дієслова) винести на початок речення перед підметом
                        (так званий непрямий порядок слів).
                        <span className={'example'}>
                            <p>
                                <b>Had</b> you been searching for a room for two hours before we found a free one? – Ви
                                шукали кімнату дві години, поки не знайшли вільну?
                            </p>
                            <p>
                                <b>Had</b> she been waiting for them all morning, so she felt annoyed? – Вона прочекала
                                їх весь ранок, тому вона була роздратована?
                            </p>
                            <p>
                                <b>Had</b> she been driving a car for an hour before she came to the gas station. – Вона
                                була за кермом з годину, поки не приїхала на автозаправну станцію?
                            </p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Past Perfect Continuous</strong> утворюється за допомогою
                        питального
                        слова або фрази, що ставиться на початок речення. Подальший порядок слів такий самий, як й в
                        загальному питанні <strong>Past Perfect Continuous</strong> (<strong>had + підмет + been
                        +дієслово з
                        -ing</strong>).
                        <span className={'example'}>
                            <p>
                                <b>What had</b> we been doing for two hours before we found a free room? – Що ми робили
                                протягом двох годин, поки не знайшли вільну кімнату?
                            </p>
                            <p><b>Whom had</b> I been waiting all morning then? – Кого я тоді чекала весь ранок?</p>
                            <p>
                                <b>How long had</b> she been driving a car before she came? – Як довго вона була за
                                кермом машини до того, як приїхала?
                            </p>
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

export default PastPerfectContinuous;