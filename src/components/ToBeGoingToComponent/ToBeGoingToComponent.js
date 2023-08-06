import React from 'react';

import './ToBeGoingToComponentStyle.css';


const ToBeGoingToComponent = () => {

    return (
        <main className={'toBeGoingToComponent width flexDirectionColumn'}>
            <h1>To be going to</h1>

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
        </main>
    );
};

export {ToBeGoingToComponent};