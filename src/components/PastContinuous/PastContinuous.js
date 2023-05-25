import React from 'react';

import './PastContinuousStyle.css';
import {tenses} from "../../constants";


const PastContinuous = () => {
    const {title, markers} = tenses[4];


    return (
        <div className={'pastContinuous flexDirectionColumn width'}>
            <h1>{title}</h1>

            <p className={'pastContinuous-rule fontSizeText'}>
                <strong>Past Continuous</strong> (ще його називають Past Progressive) - це минулий тривалий час.
                Іншими словами, це час, який вказує на процес, що тривав у певний момент або період у минулому.
                <strong>Past Continuous</strong> використовується для вираження дії в певний проміжок часу в минулому,
                oдночасні дії у минулому, вираження несхвалення, роздратування, заплановані дії, що не відбулися.
            </p>

            <section className={'pastContinuous-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'pastContinuous-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'futureSimple-formation-info fontSizeText width'}>
                    <p>
                        Формула утворення <strong>Past Continuous</strong> проста, логічна і схожа з утворенням
                        <strong>Present Continuous</strong>. Це підмет + допоміжне дієслово <strong>was/were</strong>
                        + смислове дієслово із закінченням <strong>«-ing»</strong>.
                    </p>
                </article>
            </section>

            <section className={'pastContinuous-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Affirmative sentence</h2>

                <article className={'futureSimple-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Past Continuous (Past Progressive)</strong> утворюється за допомогою допоміжного
                        дієслова was або were та форми простого дієприкметника теперішнього часу (дієслово з
                        закінченням <strong>-ing</strong>). <strong>Was та were </strong>– це форми минулого часу
                        допоміжного дієслова <strong>to be</strong>.
                        Вибір необхідної форми залежить від підмета (головного члена речення), його особи та
                        числа. <br/>
                        <strong>Was</strong> – використовується, коли підмет виражений займенником або іменником
                        в однині <strong>(I, he, she, it)</strong>. <br/>
                        <strong>Were</strong> – використовується, коли підмет виражений займенником або іменником у
                        формі множини (<strong>we, they</strong>) або ж разом з займенником <strong>you</strong> (ти,
                        ви, ввічливе Ви).
                        <span className={'example'}>
                            <p>I <b>was</b> sing<b>ing</b> a song. – Я співав пісню.</p>
                            <p>She <b>was</b> drink<b>ing</b> tea. – Вона пила чай.</p>
                            <p>They <b>were</b> watch<b>ing</b> the movie. – Вони дивилися кіно.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'pastContinuous-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечення в <strong>Past Continuous</strong> утворюється за допомогою додавання частки
                        <strong>not</strong> після допоміжного дієслова <strong>was або were</strong>. Загальний
                        порядок слів в реченні не змінюється.

                        <span className={'example'}>
                            <p>I <b>was not</b> singing a song when you came. – Я не співала пісню, коли ти прийшов.</p>
                            <p>She <b>was not</b> drinking tea at 3 p.m. – Вона не пила чай о 3-й дня.</p>
                            <p>They <b>were not</b> watching the movie when you called them. – Вони не дивилися кіно,
                                коли ти їм зателефонував.</p>
                            <p>I <b>wasn’t</b> playing at 5 p.m. – Я не грав о 5-й вечора.</p>
                            <p>You <b>weren’t</b> working when we came. – Ти не працював, коли ми прийшли.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'pastContinuous-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Загальне питання в <strong>Past Continuous</strong> утворюється шляхом винесення допоміжних
                        дієслів was або were на початок речення перед підметом.
                        <span className={'example'}>
                            <p><b>Was </b>I singing a song? – Я співала пісню?</p>
                            <p><b>Was</b> she drinking tea? – Вона пила чай?</p>
                            <p><b>Were</b> they watching the movie? – Вони дивилися кіно?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Past Continuous</strong> утворюється за допомогою питального слова
                        або фрази, що ставиться в самий початок речення. Подальший порядок слів такий самий, як і в
                        загальному питанні з <strong>Past Continuous</strong> (<strong>was, were</strong> + підмет +
                        дієслово з <strong>-ing</strong>).
                        <span className={'example'}>
                            <p><b>What was</b> I singing at karaoke at the same time yesterday? – Що я співав в караоке
                                в цей самий час вчора?</p>
                            <p><b>When was</b> she doing her hometask? – Коли вона виконувала своє домашнє завдання?</p>
                            <p><b>Where were</b> they watching the movie when the fire began? – Де вони дивилися кіно,
                                коли почалася пожежа?</p>
                    </span>
                    </p>
                </article>
            </section>

        </div>
    );
};

export default PastContinuous;