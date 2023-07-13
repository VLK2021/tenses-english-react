import React from 'react';

import './HaveToComponentStyle.css';


const HaveToComponent = () => {

    return (
        <main className={'haveToComponent width flexDirectionColumn'}>
            <h1>have to</h1>

            <p className={'haveToComponent-rule fontSizeText'}>
                Модальна конструкція <strong>have to</strong> з дієсловом у формі інфінітиву (в першій формі) виражає
                необхідність, обов'язок виконати щось і перекладається як «треба», «повинен», «необхідно»,
                «зобов'язаний» тощо. Конструкція <strong>have to</strong> має граматичні форми теперішнього
                (<strong>Present Simple</strong>), минулого (<strong>Past Simple</strong>) та майбутнього часу
                (<strong>Future Simple</strong>), а також форму пасивного стану (Passive Voice).
            </p>

            <section className={'haveToComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Стверджувальне речення</h2>

                <article className={'haveToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Have to</strong> в теперішньому часі змінюється в залежності від особи підмета та його
                        числа на відміну від інших модальних дієслів (<strong>should, must</strong> та інших).
                        <strong>Have</strong> – використовують з займенниками <strong>I, You, We, They</strong> та іменниками у множині.
                        <strong>Has</strong> – використовують з третьою особою множини (<strong>He, She, It</strong>).
                        <span className={'example'}>
                            <p>I <b>have to</b> get up at five every Sunday. – Я повинен прокидатися о п'ятій ранку кожної неділі.</p>
                            <p>Ann <b>has to</b> go to hospital. – Енн необхідно піти у лікарню.</p>
                            <p>
                                We <b>have to</b> walk all the way home because we can’t catch a taxi. – Ми повинні
                                йти додому пішки, так як ми не можемо піймати таксі.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        В минулому часі <strong>have to</strong> вживається у формі <strong>had</strong> для всіх осіб
                        множини та однини.
                        <span className={'example'}>
                            <p>
                                Last summer I <b>had to</b> get up at five every Sunday. – Минулого літа я повинен був
                                прокидатися о п'ятій ранку кожної неділі.
                            </p>
                            <p>
                                We <b>had to</b> walk all the way home because we couldn’t catch a taxi. – Ми були
                                змушені йти додому пішки, бо ми не могли спіймати таксі.
                            </p>
                            <p>
                                Janice <b>had to</b> visit her dentist last Monday. – Дженіс повинна була піти до
                                свого зубного лікаря минулого понеділка.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Майбутній час утворюється за допомогою допоміжного дієслова <strong>will (will have to)</strong>
                        для всіх осіб множини та однини. В сучасній англійській дуже рідко для першої особи <strong>
                        I</strong> та <strong>We</strong> використовується <strong>shall have to</strong>.
                        <span className={'example'}>
                            <p>
                                Next summer I <b>shall have to</b> get up at five every Sunday. – Наступного літа я
                                повинен буду прокидатися о п'ятій ранку кожної неділі.
                            </p>
                            <p>
                                I will be a bit busy tomorrow. I <b>will have to</b> take my dog to the vet. – Завтра я
                                буду трохи зайнятий. Я повинен буду відвезти свого собаку до ветеринара.
                            </p>
                            <p>
                                My friends <b>will have to</b> pick me up at 6 p.m. – Моїм друзям необхідно буде заїхати
                                за мною о шостій вечора.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Для утворення пасивного стану (<strong>Passive Voice</strong>) також використовується
                        конструкція <strong>have to</strong> та форма пасивного інфінітиву.
                        <span className={'example'}>
                            <p>
                                You did a great job! You <b>have to be</b> promoted to general manager. – Ти зробив
                                відмінну роботу! Ти повинен бути підвищений до посади головного менеджера.
                            </p>
                            <p>
                                This project <b>has to be</b> approved tomorrow morning. – Цей проект повинен бути
                                затверджений завтра вранці.
                            </p>
                            <p>His advice <b>has to be</b> taken into account. – Його порада повинна бути врахована.</p>
                        </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export {HaveToComponent};