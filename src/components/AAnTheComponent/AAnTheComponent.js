import React from 'react';

import './AAnTheComponentStyle.css';


const AAnTheComponent = () => {

    return (
        <main className={'aAnTheComponent width flexDirectionColumn'}>
            <h1>a / an / the</h1>

            <p className={'aAnTheComponent-rule fontSizeText'}>
                В англійській мові слова, що однаково вимовляються або пишуться, можуть належати до різних частин
                мови і мати різне значення. <strong>Артикль</strong> – це особлива частка, це службова частина мови,
                що вживається з іменниками, вказує на їх <strong>визначеність</strong> або <strong>невизначеність</strong> та
                допомагає відрізняти їх від дієслів, прикметників та інших частин мови. В українській мові не існує
                відповідників цієї службової частки, тому артикль можна сприймати як невід'ємна частина іменника. <br/>
                Всі прикметники, що відповідають на питання <strong>«який?», «яка?», «яке?», «які?»</strong> будуть
                стояти між артиклем та іменником, до якого відносяться. Кількість таких прикметників необмежена.
                <span className={'example'}>
                            <p>a job – робота</p>
                            <p>a <b>good</b> job – гарна робота</p>
                            <p>a <b>good simple</b> job – гарна проста робота</p>
                            <p>an <b>atomic</b> bomb – атомна бомба</p>
                            <p>the <b>White</b> House – Білий дім</p>
                        </span>
            </p>

            <section className={'aAnTheComponent-a-an flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Неозначений артикль a / an</h2>

                <article className={'aAnTheComponent-a-an-info width fontSizeText'}>
                    <p className={'width'}>
                        Неозначений артикль <strong>a</strong> або <strong>an</strong> використовується з
                        обчислювальними іменниками у формі однини. <strong>A / an</strong> – це частка, що утворилася
                        від числівника <strong>one</strong> (один, єдиний) і означає, що цей предмет – один з множини
                        подібних, такий же, як і інші предмети.
                        <span className={'example'}>
                            <p><b>a</b> pen – (одна) ручка</p>
                            <p><b>a</b> dog – (один) собака</p>
                            <p><b>a</b> child – (одна) дитина</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>a / an</strong> використовується, коли певний предмет згадується вперше і
                        не виокремлюється з ряду інших подібних предметів.
                        <span className={'example'}>
                            <p>I want to buy <b>a car</b>. – Я хочу купити машину.</p>
                            <p>My father is <b>an engineer</b>. – Мій батько - інженер.</p>
                            <p>There is <b>a man</b> near your house. – Біля твого будинку стоїть (якийсь) чоловік.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Вибір артикля <strong>a</strong> або <strong>an</strong> залежить від звуку, яким починається
                        наступне слово після артикля. <strong>A</strong> використовується перед приголосними звуками.
                        <strong>An</strong> ставиться перед голосними звуками. Слід зазначити, що неважливо, з якої
                        букви пишеться слово, важливо з якого звуку воно вимовляється.
                        <span className={'example'}>
                            <p><b>a</b> message – повідомлення</p>
                            <p><b>a</b> stage – сцена, етап</p>
                            <p><b>a</b> year – календарний рік</p>
                            <p><b>an</b> alcoholic – алкоголік</p>
                            <p><b>an</b> hour – година</p>
                        </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default AAnTheComponent;