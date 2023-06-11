import React from 'react';

import './AAnTheComponentStyle.css';


const AAnTheComponent = () => {

    return (
        <main className={'aAnTheComponent width flexDirectionColumn'}>
            <h1>a / an / the</h1>

            <p className={'aAnTheComponent-rule fontSizeText'}>
                В англійській мові слова, що однаково вимовляються або пишуться, можуть належати до різних частин
                мови і мати різне значення. <strong>Артикль</strong> – це особлива частка, це службова частина мови,
                що вживається з іменниками, вказує на
                їх <strong>визначеність</strong> або <strong>невизначеність</strong> та
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
                        Означений артикль <strong>the</strong> утворився від вказівних
                        займенників <strong>this</strong> (цей,
                        ця, це), <strong>these</strong> (ці), <strong>that</strong> (той, та,
                        те), <strong>those</strong> (ті).
                        Він виокремлює предмет з загальної множини подібних предметів і вказує на нього як на
                        «той самий» предмет. Артикль <strong>the</strong> може використовуватися з іменниками як в
                        однині, так і в множині. Артикль <strong>the</strong> можна використовувати з іменниками в
                        множині та необчислювальними іменниками, чим він і відрізняється від неозначеного
                        артикля <strong>a / an</strong>, що використовується тільки з обчислювальними іменниками в
                        однині.
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

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Родові поняття</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується з родовими поняттями, коли обчислювальний
                        іменник вказує не на окремий предмет, а клас однорідних предметів чи понять.
                        <span className={'example'}>
                            <p><b>The lion</b> is the King of the Jungle. – Лев - король джунглів.</p>
                            <p>
                                <b>The telephone</b> was invented in the 19th century. – Телефон був винайдений в 19-му
                                сторіччі.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Однак, іменник man (чоловік, людина) у значенні родової назви не використовується з
                        артиклем <strong>the</strong>. Щодо іменника woman (жінка) у значенні родового поняття, то
                        це слово може стояти з артиклем <strong>the</strong>, хоча частіше зустрічається без нього.
                        <span className={'example'}>
                            <p>
                               <b>Man</b> is the cruelest animal. – Людина - найжорстокіша тварина.
                            </p>
                            <p>
                                His trust in <b>man</b> was cruelly destroyed. – Його віра в людину була
                                жорстоко зруйнована.
                            </p>
                            <p>
                                <b>Woman</b> is man’s helpmate. – Жінка - права рука чоловіка.
                            </p>
                            <p>
                                <b>The woman</b> is a reflection of her man. – Жінка - відображення свого чоловіка.
                            </p>
                        </span>
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Національності</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується з назвами національностей, що закінчуються
                        на <strong>-sh, -ch, -ese</strong>. Інші назви національностей можуть використовуватися як з
                        артиклем <strong>the</strong>, так і без нього.
                        <span className={'example'}>
                            <p><b>the</b> Portuguese – португальці</p>
                            <p><b>the</b> Polish – поляки</p>
                            <p><b>the</b> French – французи</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> також використовується в назвах трьох країн:
                        <strong>Нідерланди, Ватикан та Україна</strong> (застаріле використання).
                        <span className={'example'}>
                            <p>
                               <b>the Netherlands</b>  – Нідерланди
                            </p>
                            <p>
                                <b>the Vatican</b>  – Ватикан
                            </p>
                            <p>
                                <b>the Ukraine</b> – Україна (на даний час використовується без артикля – <b>Ukraine</b>)
                            </p>
                        </span>
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Група предметів</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується, коли мова іде про групу предметів.
                        <strong>The</strong> ставиться перед назвами груп островів, групи озер, гірських хребтів
                        (адже вони вказують на групу предметів). Також <strong>the</strong> використовується перед
                        іменами сімей (їх прізвищами), коли маються на увазі всі члени родини разом.
                        <span className={'example'}>
                            <p><b>the</b> Great Lakes – Великі озера</p>
                            <p><b>the</b> Philippines – Філіппінські острови</p>
                            <p><b>the</b> Simpson<b>s</b> – Сімпсони</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Також артикль <strong>the</strong> використовується з назвами великих організацій та установ,
                        а також з такими назвами, які складаються з абревіатур (Організації, установи). Однак, якщо
                        абревіатури є <strong>акронімами (читаються як окреме слово)</strong>, тоді артикль the не
                        використовується. <br/>
                        Артикль <strong>the</strong> використовується перед назвами музичних інструментів та
                        танців. <br/>
                        Артикль <strong>the</strong> використовується перед титулами та званнями, якщо після них не
                        використовуються власні імена.
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Час, історичні епохи</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується перед словами <strong>day (день), morning (ранок),
                        afternoon (пообідній час), evening (вечір)</strong>, коли вони позначають час, в який
                        виконується
                        певна дія.
                        <span className={'example'}>
                            <p>I take a shower <b>in the morning</b>. – Я приймаю душ вранці.</p>
                            <p>We will go shopping <b>in the evening</b>. – Ми підемо по магазинам увечері.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Однак, артикль <strong>the</strong> не використовується в наступних словосполученнях.
                        <span className={'example'}>
                            <p>at night – вночі</p>
                            <p>at noon – опівдні</p>
                            <p>at midnight – опівночі</p>
                            <p>by day – удень (в денний час)</p>
                            <p>by night – уночі (в нічний час)</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Артикль <strong>the</strong> також використовується з назвами сторіч, історичних епох,
                        з назвами історичних подій. Однак, <strong>the</strong> не використовується у
                        словосполученнях <strong>World War I та World War II</strong>.
                        <span className={'example'}>
                            <p><b>the</b> 21st century – 21-ше сторіччя</p>
                            <p><b>the</b> Renaissance – епоха Відродження</p>
                            <p><b>the</b> Korean war – Корейська війна</p>
                            <p><b>the</b> Second World War – Друга світова війна</p>
                            <p><b>the</b> Middle Ages – Середньовіччя</p>
                        </span>
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Найвищий ступіть порівняння</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> обов'язково використовується з найвищим ступенем порівняння.
                        <span className={'example'}>
                            <p>That was <b>the</b> best <b>summer</b>! – Це було найкраще літо!</p>
                            <p>
                                This is <b>the</b> most expensive <b>restaurant</b> in the city. –
                                Це найдорожчий ресторан в місті.
                            </p>
                            <p>
                                He’s <b>the</b> smartest <b>guy</b> in his class. – Він
                                найрозумніший хлопчина в своєму класі.
                            </p>
                        </span>
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Some, most, none</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується після слів <strong>some</strong> (декілька),
                        <strong>many</strong> (багато), <strong>non</strong> (жоден
                        з), <strong>most</strong> (більшість),
                        якщо після них стоїть прийменник <strong>of</strong>.
                        <span className={'example'}>
                            <p><b>Most of the</b> cats don’t like swimming. – Більшість котів не любить плавати.</p>
                            <p>
                                <b>None of the</b> gentlemen helped this lady. – Жоден з джентльменів не допоміг цій дамі.
                            </p>
                            <p>
                                <b>Some of the</b> students in this class speak really good French. – Деякі учні в цьому
                                класі можуть говорити дуже непоганою французькою.
                            </p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Однак, якщо після слів <strong>some, many, most</strong> вживається іменник без
                        прийменника <strong>of</strong>, тоді артикль <strong>the</strong> не ставиться.
                        <span className={'example'}>
                            <p><b>Most cats</b> don’t like swimming. – Більшість котів не любить плавати.</p>
                            <p>
                                <b>Many students</b> prepare for exams one day before them. – Багато студентів
                                готовляться до екзаменів за один день до них.
                            </p>
                        </span>
                    </p>
                </article>

                <article className={'aAnTheComponent-a-an-info width fontSizeText flexDirectionColumn'}>
                    <h2 className={'marginTop'}>Only, last, first, wrong, right, very</h2>

                    <p className={'width'}>
                        Артикль <strong>the</strong> використовується перед словами <strong>only (єдиний), last
                        (останній), first (перший), wrong (не той), right (той, правильний), very (той самий)</strong>,
                        коли вони вживаються у якості прикметників.
                        <span className={'example'}>
                            <p>She was <b>the last</b> person to leave. – Вона була останньою, хто вийшов.</p>
                            <p>We entered <b>the wrong</b> room. – Ми увійшли не в ту кімнату.</p>
                            <p>Follow me, I know <b>the right</b> way. – Йдіть за мною, я знаю правильний шлях.</p>
                            <p>You are <b>the very</b> person I wanted. – Ти - той, хто мені потрібен.</p>
                            <p>It is <b>the first</b> time I eat scallops. – Я вперше їм гребінці.</p>
                            <p>It is <b>the only</b> chance we have. – Це наш єдиний шанс.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Однак, якщо після слів <strong>some, many, most</strong> вживається іменник без
                        прийменника <strong>of</strong>, тоді артикль <strong>the</strong> не ставиться.
                        <span className={'example'}>
                            <p><b>Most cats</b> don’t like swimming. – Більшість котів не любить плавати.</p>
                            <p>
                                <b>Many students</b> prepare for exams one day before them. – Багато студентів
                                готовляться до екзаменів за один день до них.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'aAnTheComponent-a-an flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Нульовий артикль</h2>

                <p className={'aAnTheComponent-rule fontSizeText'}>
                    <strong>Zero article</strong> (нульовий артикль) – це відсутність неозначеного (<strong>a /
                    an</strong>)
                    або означеного (<strong>the</strong>) артиклів перед іменником. В англійській мові існують певні
                    правила та випадки, коли артиклі перед іменниками не вживаються. <br/>
                    Артиклі не вживаються, коли перед словом стоять присвійні та вказівні займенники, тому що слова,
                    що вказують на приналежність предмета до чогось або когось, заміняють собою артиклі. Наприклад,
                    займенники <strong>my (мій), your (твій), his (його), her (її), its (цього), this (цей), that
                    (той)</strong>(Присвійні та вказівні займенники) <br/>
                    Артиклі не вживаються з іменниками в множині або з необчислювальними іменниками, якщо вони вказують
                    на родове або загальне поняття і не називають окремий конкретний предмет. Обчислювальний
                    іменник <strong>man</strong> в якості родового поняття також не потребує артикля(Родові
                    поняття) <br/>
                    Артиклі не вживаються з назвами днів тижня, назвами місяців, свят. <br/>
                    Артиклі не вживаються з назвами кольорів, напоїв та страв. <br/>
                    Артиклі не вживаються з назвами іноземних мов. <br/>
                    Однак, означений артикль <strong>the</strong> вживається у реченні, якщо власне після назви мови
                    стоїть слово <strong>language</strong> (мова). <br/>
                    Артиклі не вживаються з назвами хвороб, з назвами видів спорту та фізичної активності. <br/>
                </p>

                <p className={'aAnTheComponent-rule fontSizeText marginTop'}>
                    Артиклі не вживаються перед словами <strong>bed (ліжко), school (школа), town (місто), table (стіл),
                    sea (море), hospital (лікарня), college (коледж), court (суд), prison (в'язниця), university
                    (університет), work (місце роботи)</strong>, що вживаються з прийменниками і позначають функцію,
                    ціль або місцезнаходження, а не конкретний предмет.
                    <span className={'example'}>
                            <p>I go to <b>bed</b> now. – Я зараз лягаю спати.</p>
                            <p>He was taken to <b>hospital</b>. – Його відвезли до лікарні.</p>
                            <p>My children go to <b>school</b>. – Мої діти ходять до школи (вчаться).</p>
                            <p>Jack is at <b>work</b> now. – Джек зараз на роботі.</p>
                            <p>He has already left <b>town</b>. – Він вже поїхав з міста.</p>
                            <p>Matt decided to go to <b>sea</b>. – Метт вирішив стати моряком.</p>
                        </span>
                    <strong>Однак</strong>, артиклі використовуються з цими словами, коли вони вказують на конкретний
                    предмет або
                    поняття.
                    <span className={'example'}>
                            <p><b>The bed</b> in my room is pretty old. – Ліжко в моїй кімнаті досить старе.</p>
                            <p><b>A</b> new <b>school</b> will be opened soon. – Незабаром відкриється нова школа.</p>
                            <p>Put it on <b
                            >the table</b>, please. – Поклади це на стіл, будь ласка.</p>
                            <p>The water in <b>the sea</b> is warm. – Вода в морі тепла.</p>
                            <p>I went to <b>the hospital</b> to visit Jane. – Я пішов у лікарню провідати Джейн.</p>
                        </span>
                </p>

                <p className={'aAnTheComponent-rule fontSizeText'}>
                    Артикль <strong>не вживається</strong> з власними назвами, назвами книжок, п'єс, з назвами фірм,
                    університетів за
                    виключенням випадків, коли <strong>артикль входить до самої назви</strong>. Навіть у випадку, коли
                    артикль є в
                    оригінальній назві, наприклад, J.R.R. Tolkien's «The Lord of the Rings», він все одно не буде
                    вживатись в розмовно-повсякденній мові. <br/>
                    Артикль також не ставиться, коли слово вживається в якості звернення. <br/>
                    Артикль не використовуєтьсятакож зі словами <strong>home (дім), mother (мати), mom (мама), father
                    (батько), dad (тато)</strong>, коли мова йде про власний дім або батьків мовця. <br/>
                    Артиклі не використовуються з назвами вулиць, площ, міст, штатів, країн, континентів, окремих озер,
                    островів і гірських вершин. <br/>
                    Для того, щоб зекономити місце, артиклі часто опускаються в заголовках газет, журналів тощо. <br/>
                    Артиклі не вживаються в виразах, що вказують на спосіб пересування. <br/>
                    Артиклі не використовуються в прийменникових виразах та дієслівних словосполученнях.
                    <span className={'example'}>
                            <p>by chance – випадково</p>
                            <p>by day – удень</p>
                            <p>by heart – напам'ять</p>
                            <p>by mistake – помилково</p>
                            <p>day after day – день за днем</p>
                            <p>day by day – день у день</p>
                            <p>in conclusion – на закінчення</p>
                            <p>in debt – в боргу</p>
                            <p>in fact – дійсно, справді</p>
                            <p>in mind – подумки, думками</p>
                            <p>in trouble – в біді</p>
                            <p>to declare war – оголосити війну</p>
                        </span>
                </p>
            </section>
        </main>
    );
};

export default AAnTheComponent;