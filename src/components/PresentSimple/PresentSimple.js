import React from 'react';

import './PresentSimpleSryle.css';
import {tenses} from '../../constants';


const PresentSimple = () => {

    const {title, markers} = tenses[0];

    
    return (
        <main className={'presentSimple flexDirectionColumn width'}>
            <h1>{title}</h1>
            <p className={'presentSimple-rule fontSizeText'}>
                <strong>Present Simple</strong><i>(простий (неозначений) теперішній час)</i> - використовується для
                вираження
                певного факту або інформації, що не зв'язана з певним часовим проміжком, а є актуальними загалом.
                Часто це чиїсь звички або вподобання, загальні твердження, загальні факти. Дії що часто
                повторюються(рутина, звичка). Розклади та домовленості. Коментарі та інструкції.
            </p>

            <section className={'presentSimple-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={new Date().getTime()}>{marker}</li>)
                    }
                </ul>
            </section>

            <section className={'presentSimple-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'presentSimple-formation-info fontSizeText width'}>
                    <p>Від інфінітива смислового дієслова. (<i>без to</i>) (I read, you read, we read, they read)</p>
                    <p>У третій особі однини має закінчення. <strong>-s</strong> (<i>he reads, she reads</i>)</p>
                    <p>Дієслова <strong>to have</strong> і <strong>to be</strong> мають особливі форми відмінювання.</p>
                    <p>Питальні та заперечні речення утворюються за допомогою допоміжного дієслова <strong>do</strong> і <strong>does</strong>.</p>
                </article>
            </section>

            <section className={'presentSimple-toBe flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be в Present Simple</h2>

                <article className={'fontSizeText'}>
                    <p>
                        Дієслово <strong>to be</strong> (бути, існувати, знаходитися) – особливий і в часі Present Simple вживається
                        в трьох формах: <strong>am, is, are</strong>. Вибір необхідної форми залежить від особи
                        та числа підмета у реченні.
                        <span className={'example'}>
                            <p>I → am ( для 1-ї особи однини: я)</p>
                            <p>He, She, It → is ( для 3-ї особи однини)</p>
                            <p>We, You, They → are( для 1-ї, 2-ї та 3-ї особи множини)</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> не потребує використання допоміжних дієслів для утворення
                        заперечних або питальних речень.
                        <span className={'example'}>
                            <p>She is not here. –  Вона не тут.</p>
                            <p>Is this your first application to college? – Це ваша перша заява на вступ до коледжу?</p>
                        </span>
                    </p>
                </article>
            </section>

        </main>
    );
};

export default PresentSimple;