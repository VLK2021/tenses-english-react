import React from 'react';

import './PastSimpleStyle.css';
import {tenses} from "../../../constants";


const PastSimple = () => {
    const {title, markers} = tenses[1];


    return (
        <main className={'pastSimple flexDirectionColumn width'}>
            <h1>{title}</h1>
            <p className={'pastSimple-rule fontSizeText'}>
                <strong>Past Simple</strong> – це простий або неозначений час (Simple або Indefinite), який вживається
                для опису дії, що відбулася в минулому. Також ми використовуємо цей час, коли перелічуємо декілька
                події, що відбулися в хронологічній послідовності, тобто одна за одною, для опису дії, що завершилась
                в минулому, дії, що не можуть більше повторитися, нетривалі дії в конкретний момент у минулому. <br/>
                <strong>Past Simple</strong> використовується, якщо на питання «коли це сталося?» можна дати чітку, але неточну відповідь
                про час дії. Якщо час, в який відбувалася дія, невідомий, й дія має результати в теперішньому часі,
                тоді використовується час з групи Perfect. Якщо відомий точний момент часу, в який протікала або
                відбувалася певна дія, то використовується Past Continuous.
            </p>

            <section className={'pastSimple-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'pastSimple-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'pastSimple-formation-info fontSizeText width'}>
                    <p className={'width'}>
                        Утворюється за допомогою використання форми минулого часу смислового дієслова.
                        Якщо дія виражена правильним дієсловом, то його форма минулого часу утворюється за допомогою
                        додавання закінчення <strong>-ed</strong> до його словникової форми. Якщо вживається неправильне
                        дієслово, тоді використовується його друга форма з таблиці неправильних дієслів. Якщо потрібне
                        дієслово відсутнє в таблиці, це означає, що воно правильне і минулий час утворюється за
                        допомогою закінчення <strong>-ed</strong>. Форма минулого часу дієслова однакова для всіх осіб
                        однини та множини (окрім дієслова <strong>to be</strong>).
                    </p>

                    <p className={'width'}>
                        Питальні та заперечні речення утворюються за допомогою допоміжного дієслова <strong>did</strong>.
                    </p>
                </article>
            </section>

            <section className={'pastSimple-toBe flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be в Past Simple</h2>

                <article className={'fontSizeText width'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> (бути, знаходитися, існувати) – особливий й для часу Past
                        Simple має дві форми: <strong>was</strong> та <strong>were</strong>. Це дієслово не потребує
                        допоміжних дієслів для утворення заперечних та питальних речень. Вибір правильної форми залежить
                        від підмета у реченні. <br/>
                        <strong>Was</strong> – використовується, коли підмет виражений іменником або займенником у
                        формі однини (<strong>I, he, she, it</strong>). <br/>
                        <strong>Were</strong> – коли підмет вказує на множину людей або речей (<strong>we, they</strong>),
                        а також коли він виражений займенником <strong>you</strong> (ти, ви, ввічливе Ви).
                        <span className={'example'}>
                            <p>I <b>was</b> tired. – Я був втомленим.</p>
                            <p>She <b>wasn't</b> abroad. – Вона не була за кордоном.</p>
                            <p>Those books <b>weren't</b> that old. – Ті книги не були настільки старими.</p>
                            <p>You <b>were</b> tired. – Ви були втомлені.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'pastSimple-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Affirmative sentence</h2>

                <article className={'pastSimple-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> (бути, знаходитися, існувати) – особливий й для часу Past
                        Simple має дві форми: <strong>was</strong> та <strong>were</strong>. Це дієслово не потребує
                        допоміжних дієслів для утворення заперечних та питальних речень. Вибір правильної форми залежить
                        від підмета у реченні. <br/>
                        <strong>Was</strong> – використовується, коли підмет виражений іменником або займенником у
                        формі однини (<strong>I, he, she, it</strong>). <br/>
                        <strong>Were</strong> – коли підмет вказує на множину людей або речей (<strong>we, they</strong>),
                        а також коли він виражений займенником <strong>you</strong> (ти, ви, ввічливе Ви).
                        <span className={'example'}>
                            <p>She <b>worked</b> abroad. – Вона працювала за кордоном.</p>
                            <p>My uncle <b>lived</b> here. – Мій дядько жив тут.</p>
                            <p>She <b>was</b> angry yesterday. – Вчора вона була розлюченою.</p>
                            <p>Harry <b>wrote</b> a lot of books. – Гаррі написав багато книг.</p>
                            <p>We <b>were</b> young and reckless. – Ми були молоді та безтурботні.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'pastSimple-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Negative sentence</h2>

                <p className={'width'}>
                    Заперечення в Past Simple утворюється за допомогою допоміжного дієслова <strong>did</strong> та
                    заперечної частки <strong>not</strong> після нього, що стоять після підмета та перед смисловим
                    дієсловом. <br/>
                    <strong>Did</strong> – це форма минулого часу допоміжного дієслова <strong>do</strong>.
                    <strong>Did</strong> вживається для всіх осіб однини та множини.
                    Після <strong>did not</strong> смислове дієслово використовується в формі простого інфінітиву без
                    частки to, тому що граматичний час в такому випадку виражається через допоміжне дієслово <strong>did</strong>.
                    <span className={'example'}>
                            <p>She <b>did not</b> work abroad. – Вона не працювала за кордоном.</p>
                            <p>Harry <b>did not</b> write a lot of letters. – Гаррі не написав багато листів.</p>
                            <p>His uncle <b>didn’t</b> live here. – Його дядько не жив тут.</p>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    Заперечення з дієсловом <strong>to be</strong> в формі минулого часу (<strong>was, were</strong>)
                    утворюється шляхом додавання частки <strong>not</strong> після <strong>was</strong> або
                     <strong>were</strong>. <strong>Was</strong> та <strong>were</strong> не потребують допоміжних
                    дієслів для утворення заперечного речення.
                    <span className={'example'}>
                            <p>I <b>was not</b> angry yesterday. – Я не була злою вчора.</p>
                            <p>Kate and Jack <b>were not</b> here two days ago. – Кейт та Джек не були тут два дні тому.</p>
                            <p>It <b>wasn't</b> true. – Це не було правдою.</p>
                            <p>They <b>weren't</b> Canadians. – Вони не були канадцями.</p>
                    </span>
                </p>
            </section>

            <section className={'pastSimple-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Interrogative sentence</h2>

                <p className={'width'}>
                    Загальне питання в Past Simple утворюється за допомогою допоміжного дієслова <strong>did</strong>,
                    що ставиться на початку речення перед підметом. Після підмета використовується смислове дієслово
                    тільки в формі простого інфінітиву без частки to.
                    <span className={'example'}>
                            <p><b>Did</b> she work abroad? – Вона працювала за кордоном?</p>
                            <p><b>Did</b> Harry write a lot of letters? – Гаррі писав багато листів?</p>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    Спеціальне питання в Past Simple утворюється за допомогою питального слова або фрази, що ставиться
                    на початок речення перед допоміжним дієсловом. Подальший порядок слів такий самий, як і в загальному
                    питанні для Past Simple.
                    <span className={'example'}>
                            <p><b>Where did</b> she work? – Де вона працювала?</p>
                            <p><b>What did</b> Harry write? – Що писав Гаррі?</p>
                            <p><b>When did</b> he live here? – Коли він тут жив?</p>
                    </span>
                </p>
            </section>
        </main>
    );
};

export default PastSimple;