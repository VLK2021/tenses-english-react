import React from 'react';

import './UsedToComponentStyle.css';


const UsedToComponent = () => {

    return (
        <main className={'usedToComponent width flexDirectionColumn'}>
            <h1>used to</h1>

            <p className={'usedToComponent-rule fontSizeText'}>
                Конструкція <strong>used to</strong> використовується для вираження повторюваних дій або звичок
                у минулому. <strong>Used to</strong> має тільки одну форму минулого часу та не використовується
                в інших часових формах. Значення конструкції <strong>used to</strong> можна передати словами
                «<b>раніше</b>», «<b>колись</b>», «<b>раніше звичайно</b>» тощо. <br/>
                Конструкція <strong>used to</strong> використовується для вираження чиїхось звичок, дій,
                що часто відбувалися або повторювалися в минулому, однак зараз вони не відбуваються зовсім. <br/>
                Конструкція <strong>used to</strong> також використовується для вираження фактів, загальної
                інформації, що були вірні у минулому, але зараз не відповідають дійсності. <br/>
                Повторювані дії, звички, Факти, загальна інформація про минуле.
            </p>

            <section className={'usedToComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Affirmative sentence</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Стверджувальне речення утворюється за допомогою конструкції <strong>used to</strong> після
                        підмета та форми простого інфінітиву (першої форми) смислового дієслова.
                        <span className={'example'}>
                            <p>I <b>used to</b> get up at 6 a.m. when I was 20. – Раніше я прокидався о 6-й ранку, коли мені було 20.</p>
                            <p>Kate <b>used to</b> go to school by bike. – Кейт звично їздила до школи на велосипеді.</p>
                            <p>
                                They <b>used to</b> have dinner at this restaurant every Friday. – Раніше вони обідали
                                в цьому ресторані кожної п'ятниці.
                            </p>
                        </span>
                    </p>

                    <p className={'marginTop'}>
                        Використання конструкції <strong>used to</strong> в заперечних та питальних реченнях не
                        характерно
                        та небажано для англійської мови, однак в розмовному мовленні такі речення інколи можуть
                        зустрічатися.
                    </p>
                </article>
            </section>

            <section className={'usedToComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Negative sentence</h2>

                <p className={'width'}>
                    <strong>Заперечне речення</strong> утворюється за допомогою допоміжного
                    дієслова <strong>did</strong>
                    (форма минулого часу від <strong>do</strong>), після якого використовується <strong>use
                    to</strong> у
                    першій формі та простий інфінітив смислового дієслова.
                    <span className={'example'}>
                            <p>I <b>didn’t use to</b> learn French. – Раніше я не вчив французьку.</p>
                            <p>Ann <b>didn’t use to</b> attend this place. – Енн раніше не бувала тут.</p>
                            <p>We <b>didn’t use to</b> go to Italy every summer. – Ми не їздили в Італію кожного літа.</p>
                    </span>
                </p>
            </section>

            <section className={'usedToComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Interrogative sentence</h2>

                <p className={'width'}>
                    Питальне речення з <strong>used to</strong> утворюється за допомогою допоміжного
                    дієслова <strong>did</strong> (форма минулого часу від <strong>do</strong>), що ставиться на початок
                    речення перед підметом. Після підмета використовується use to в першій формі та інфінітив смислового
                    дієслова.
                    <span className={'example'}>
                            <p><b>Did</b> you <b>use to</b> ride a bike? – Ти раніше їздив на велосипеді?</p>
                            <p><b>Did</b> he <b>use to</b> do sports? – Він раніше займався спортом?</p>
                            <p><b>Did</b> Matt <b>use to</b> eat meat? – Метт раніше їв м'ясо?</p>
                    </span>
                </p>
            </section>

            <section className={'usedToComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>To be used to / To get used to</h2>

                <p className={'width'}>
                    Конструкцію <strong>used to</strong>, що вказує на повторювані дії у минулому, не слід плутати з
                    конструкціями <strong>to be used to</strong> та <strong>to get used to</strong>.
                    <strong>To be used to</strong> з іменником або з герундієм вказує на дію, що вважається нормальною
                    або звичною для когось. Ця конструкція може використовуватися як в теперішньому, так і в минулому
                    та майбутньому часах.
                    <span className={'example'}>
                            <p>
                                I’<b>m used to</b> working on Saturday, don’t worry. – Не переймайся, я звик працювати
                                по суботам.
                            </p>
                            <p>
                                He told me he <b>was used to</b> the cold weather. – Він сказав, що він звик до
                                холодної погоди.
                            </p>
                            <p>I’ll never <b>be used to</b> living in this city. – Я ніколи не звикну до життя в цьому
                                місті.
                            </p>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    <strong>To get used to</strong> з іменником або герундієм передає значення «звикати», «звикнути» до
                    чогось, що раніше було незвичним.
                    <span className={'example'}>
                            <p>
                                Don’t worry, you <b>will get used to</b> your new school soon. – Не переймайся, ти скоро
                                звикнеш до своєї нової школи.
                            </p>
                            <p>
                                Scottish accent was hard for understanding but I <b>got used to</b> it. – Шотландський
                                акцент було складно розуміти, але я звик до нього.
                            </p>
                            <p>
                                It’s a bit hard but I’<b>m getting used to</b> driving on the left. – Це трохи складно,
                                але я (поступово) звикаю керувати машиною за лівостороннім рухом.
                            </p>
                    </span>
                </p>
            </section>

        </main>
    );
};

export {UsedToComponent};