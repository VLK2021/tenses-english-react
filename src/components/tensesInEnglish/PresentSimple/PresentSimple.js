import React from 'react';

import './PresentSimpleSryle.css';
import {tenses} from '../../../constants';


const PresentSimple = () => {

    const {title, markers} = tenses[0];


    return (
        <main className={'presentSimple flexDirectionColumn width'}>
            <h1>{title}</h1>
            <p className={'presentSimple-rule fontSizeText'}>
                <strong>Present Simple</strong><i>(простий (неозначений) теперішній час)</i> - використовується для
                вираження дії яка регулярно повторюється або для вираження
                певного факту або інформації, що не зв'язана з певним часовим проміжком, а є актуальними загалом.
                Часто це чиїсь звички або вподобання, загальні твердження, загальні факти. Дії що часто
                повторюються(рутина, звичка). Розклади та домовленості. Коментарі та інструкції або для констатації
                факту.
            </p>

            <section className={'presentSimple-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'presentSimple-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'presentSimple-formation-info fontSizeText width'}>
                    <p>Від інфінітива смислового дієслова. (<i>без to</i>) (I read, you read, we read, they read)</p>
                    <p>У третій особі однини має закінчення. <strong>-s</strong> (<i>he reads, she reads</i>)</p>
                    <p>Дієслова <strong>to have</strong> і <strong>to be</strong> мають особливі форми відмінювання.</p>
                    <p>Питальні та заперечні речення утворюються за допомогою допоміжного
                        дієслова <strong>do</strong> і <strong>does</strong>.</p>
                </article>
            </section>

            <section className={'presentSimple-toBe flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be в Present Simple</h2>

                <article className={'fontSizeText width'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> (бути, існувати, знаходитися) – особливий і в часі Present
                        Simple вживається
                        в трьох формах: <strong>am, is, are</strong>. Вибір необхідної форми залежить від особи
                        та числа підмета у реченні.
                        <span className={'example'}>
                            <div>I → <b>am</b> ( для 1-ї особи однини: я)</div>
                            <div>He, She, It → <b>is</b> ( для 3-ї особи однини)</div>
                            <div>We, You, They → <b>are</b>( для 1-ї, 2-ї та 3-ї особи множини)</div>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> не потребує використання допоміжних дієслів для утворення
                        заперечних або питальних речень.
                        <span className={'example'}>
                            <div>She <b>is</b> not here. –  Вона не тут.</div>
                            <div><b>Is</b> this your first application to college? – Це ваша перша заява на вступ до коледжу?</div>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'presentSimple-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Affirmative sentence</h2>

                <article className={'presentSimple-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Стверджувальне речення в Present Simple (Present Indefinite) утворюється за допомогою
                        підмета (хто? що?) та присудка (здебільшого він виражається смисловим дієсловом в першій формі).
                        <span className={'example'}>
                            <div>I <b>study</b> French. – Я вчу французьку мову.</div>
                            <div>Cats <b>like</b> milk. – Коти люблять молоко.</div>
                            <div>You <b>speak</b> English. – Ти розмовляєш англійською.</div>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Якщо підмет виражений іменником або займенником в третій особі однини, тоді до дієслова
                        додається закінчення -s або -es.
                        <span className={'example'}>
                            <div>She <b>speaks</b> English. – Вона розмовляє англійською.</div>
                            <div>He <b>plays</b> the violin. – Він грає на скрипці.</div>
                            <div>Simon's cat <b>likes</b> milk. – Кіт Саймона любить молоко.</div>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'presentSimple-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Negative sentence</h2>

                <p className={'width'}>
                    Заперечне речення в Present Simple утворюється за допомогою допоміжного
                    дієслова <strong>do</strong> з заперечною
                    часткою <strong>not (do not)</strong>, що ставиться після підмета (хто? що?). Після допоміжного
                    дієслова <strong>do</strong> вживається смислове в формі інфінітиву без частки to.
                    <span className={'example'}>
                            <div>I <b>do not</b> speak English. – Я не розмовляю англійською.</div>
                            <div>They <b>do not</b> play the violin. – Вони не грають на скрипках.</div>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    Дієслово <strong>do</strong> з підметом, вираженим третьою особою однини (he, she, it),
                    вживається з закінченням <strong>-es</strong> у формі <strong>does</strong>.
                    Після <strong>does</strong> смислове дієслово використовується у формі простого інфінітиву без
                    частки to (перша форма дієслова).
                    <span className={'example'}>
                            <div>She <b>does not</b> speak English. – Вона не розмовляє англійською.</div>
                            <div>He <b>does not</b> play the violin. – Він не грає на скрипці.</div>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    Заперечення в Present Simple також можна виразити за допомогою заперечних займенників та
                    прислівників. Після них використовується смислове дієслово в стверджувальній формі,
                    так як подвійне заперечення не характерне для англійської мови.
                    <span className={'example'}>
                            <div><b>None</b> of us <b>are</b> saints. – Ніхто з нас не є святим.</div>
                            <div><b>Nobody</b> speak<b>s</b> Latin. – Ніхто не розмовляє на латині.</div>
                            <div><b>No</b> one know<b>s</b> who we are. – Ніхто не знає, хто ми.</div>
                            <div>We do <b>nothing</b>. – Ми нічого не робимо.</div>
                    </span>
                </p>
            </section>

            <section className={'presentSimple-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'}>Interrogative sentence</h2>

                <p className={'width'}>
                    Питальне речення (загальне питання) в Present Simple утворюється за допомогою допоміжного
                    дієслова <strong>do</strong> або <strong>does</strong> (якщо підмет стоїть в третій особі однини
                    he, she, it), що стоїть перед підметом. Після підмета йде смислове дієслово в першій формі тобто
                    основне дієслово для третьої особи втрачає своє закінчення <strong>-s/-es</strong>.
                    <span className={'example'}>
                            <div><b>Do</b> you speak English? – Ти розмовляєш англійською?</div>
                            <div><b>Does</b> he speak English? – Він розмовляє англійською?</div>
                    </span>
                </p>

                <p className={'width marginTop'}>
                    Спеціальне питання в Present Simple утворюється за допомогою необхідного питального слова або фрази,
                    що ставиться на початок речення. Подальший порядок слів такий самий, як і в загальному питанні
                    з Present Simple.
                    <span className={'example'}>
                            <div><b>Why do</b> you speak English? – Чому ти розмовляєш англійською?</div>
                            <div><b>Where does</b> she play the violin? – Де вона грає на скрипці?</div>
                            <div><b>How long do</b> they play the guitars? – Як давно вони грають на гітарах?</div>
                    </span>
                </p>
            </section>
        </main>
    );
};

export default PresentSimple;