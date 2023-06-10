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

            <section className={'aAnTheComponent-a-an flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Означений артикль the</h2>

                <article className={'aAnTheComponent-a-an-info width fontSizeText'}>
                    <p className={'width'}>
                        Означений артикль <strong>the</strong> утворився від вказівних займенників <strong>this</strong> (цей,
                        ця, це), <strong>these</strong> (ці), <strong>that</strong> (той, та, те), <strong>those</strong> (ті).
                        Він виокремлює предмет з загальної множини подібних предметів і вказує на нього як на
                        «той самий» предмет. Артикль <strong>the</strong> може використовуватися з іменниками як в
                        однині, так і в множині. Артикль <strong>the</strong> можна використовувати з іменниками в
                        множині та необчислювальними іменниками, чим він і відрізняється від неозначеного
                        артикля <strong>a / an</strong>, що використовується тільки з обчислювальними іменниками в однині.
                        <span className={'example'}>
                            <p><b>The students</b> in my group are very smart. – Студенти в моїй групі дуже розумні.</p>
                            <p><b>The water</b> is too hot. Put some cold one. – Вода надто гаряча. Долий трохи холодної.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> використовується, коли говорять про вже знайомий або вже
                        згадуваний предмет. В цьому випадку цей предмет виділяється з множини подібних йому
                        предметів. (Раніше згадуваний предмет, конкретне поняття)
                        <span className={'example'}>
                            <p>
                               We moved to <b>a</b> new <b>house. The house</b> is haunted by ghosts. – Ми переїхали до
                                нового будинку. В (цьому) будинку живуть привиди.
                            </p>
                            <p>
                                I've found <b>an</b> old <b>phone. The phone</b> was broken. – Я знайшов старий телефон.
                                (Цей) телефон був зламаний.
                            </p>
                            <p>
                                We bought <b>a</b> Thai <b>cat</b>. We named <b>the cat</b> Zergling. – Ми купили
                                тайського кота. Ми назвали (цього) кота Зерлінгом.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> також використовується, коли розмова йде про певне абстрактне
                        поняття, певний предмет або ж певну частину, порцію необчислювальних предметів, але не про
                        цей предмет взагалі.
                        <span className={'example'}>
                            <p>
                                He was <b>the courage</b> and <b>the force</b> of his team. – Він був сміливістю та
                                силою своєї команди.
                            </p>
                            <p>
                                Do you remember <b>the</b> girl I was talking about? – Ти пам'ятаєш (ту) дівчину,
                                про котру розповідав?
                            </p>
                            <p><b>The bread</b> got stale. – Хліб зачерствів.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> використовується, коли розмова йде про єдині у своєму роді
                        предмети та поняття.(Унікальні предмети, поняття) <br/>
                        Однак, якщо в реченні зазначається якийсь особливий стан, певне визначення місяця, сонця або
                        ж неба, то можливе використання неозначеного артикля <strong>a / an</strong>. В більшості
                        випадків таке використання артиклів зустрічається в художній літературі.
                        <span className={'example'}>
                            <p>
                                <b>the</b> sun – сонце
                            </p>
                            <p>
                                <b>the</b> Earth – Земля
                            </p>
                            <p><b>the</b> countryside – сільська місцина</p>
                            <p>
                                <b>A</b> pearl-white <b>moon</b> smiles through the green trees. – Перлинно-білий місяць
                                усміхався крізь зелені дерева.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> використовується з назвами газет, кінотеатрів, театрів, готелів,
                        музеїв та галерей, з назвами музичних груп, назвами кораблів.
                        <span className={'example'}>
                            <p>
                                <b>the</b> Rolling Stones – група "Роллінг Стоунз"
                            </p>
                            <p>
                               <b>the</b> Berlin Philharmonic Orchestra – Берлінський філармонічний оркестр
                            </p>
                            <p><b>the</b> Times – газета "Таймс"</p>
                            <p>
                                <b>the</b> White House – Білий дім
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <b>the</b> використовується з назвами річок, пустель, пляжів, джунглів, океанів, водних
                        каналів, а також з назвами країн, в яких є слова States (штати), Kingdom (королівство),
                        Republic (республіка) тощо.
                        <span className={'example'}>
                            <p>
                                <b>the</b> Amazon – ріка Амазонка
                            </p>
                            <p>
                               <b>the</b> Sahara – пустеля Сахара
                            </p>
                            <p><b>the</b> UK – Сполучене королівство</p>
                            <p>
                                <b>the</b>  Czech Republic – Республіка Чехія
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> використовується з унікальними географічними термінами.
                        <span className={'example'}>
                            <p>
                                <b>the</b> Arctic Circle – Північне полярне коло
                            </p>
                            <p>
                               <b>the</b> Equator – екватор
                            </p>
                            <p><b>the</b> Eastern Hemisphere – Східна півкуля</p>
                            <p><b>the</b> West – Захід</p>
                            <p>
                                <b>the</b> North – Північ
                            </p>
                        </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default AAnTheComponent;