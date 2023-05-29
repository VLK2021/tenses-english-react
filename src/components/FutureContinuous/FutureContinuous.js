import React from 'react';

import './FutureContinuousStyle.css';
import {tenses} from "../../constants";


const FutureContinuous = () => {
    const {title, markers} = tenses[5];

    return (
        <main className={'futureContinuous width flexDirectionColumn'}>
            <h1>{title}</h1>

            <p className={'pastContinuous-rule fontSizeText'}>
                <strong>Future Continuous (Майбутній тривалий час)</strong> є одним з часів в англійській мові і
                використовується для вираження дії, яка буде тривати у певний момент у майбутньому або протягом певного
                періоду часу. <strong>Future Continuous</strong> використовується для вираження oдночасні дії в
                майбутньому, для опису дій, що будуть відбуватися в конкретний, точно відомий момент або ж проміжок
                часу в майбутньому, для описання події, що неодмінно відбудеться в найближчому майбутньому, так як вона
                була спланована або неминуча через певні обставини, може бути використаним, щоб повідомити про
                заплановані дії, що повинні відбутися найближчим часом, однак в сучасній англійській для цього частіше
                використовується час <strong>Present Continuous</strong>, може використовуватися для того, щоб задати
                ввічливе питання про чиїсь дії або плани на найближче майбутнє.
            </p>

            <section className={'futureContinuous-markers flexDirectionColumn width'}>
                <h2>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'futureContinuous-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Formation</h2>

                <article className={'futureContinuous-formation-info fontSizeText width'}>
                    <p>
                        Форма <strong>Future Continuous</strong> складається з допоміжного дієслова <strong>"will"</strong>
                        (або <strong>"shall"</strong> для першої особи однини) + дієслово <strong>"be"</strong> у
                        формі <strong>Present participle</strong> (дієприкметник з закінченням <strong>-ing</strong>).
                    </p>
                </article>
            </section>
        </main>
    );
};

export default FutureContinuous;