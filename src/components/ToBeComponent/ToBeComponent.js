import React from 'react';

import './ToBeComponentStyle.css';


const ToBeComponent = () => {

    return (
        <main className={'toBeComponent width flexDirectionColumn'}>
            <h1>to be</h1>

            <p className={'toBeComponent-rule fontSizeText'}>
                Дієслово <strong>to be</strong> є єдиним дієсловом в англійській мові, яке змінює свою форму в
                залежності від особи, з якою пов'язане у реченні. Дієслово <strong>to be</strong> самостійно утворює
                заперечні та питальні речення, не використовуючи допоміжні дієслова в теперішньому та минулому часі.
                <strong>To be</strong> має три форми в теперішньому часі (<strong>am, is, are</strong>) та дві форми у
                минулому часі (<strong>was</strong> та <strong>were</strong>). Всі форми дієслова можуть перекладатися
                українською як «бути», «бути присутнім», «знаходитися» або ж оминатися при перекладі.
            </p>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Тo be в теперішньому часі</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> може вживатися в одній з трьох форм <strong>am, is, are</strong>
                        в теперішньому часі (граматичні часи Present Simple, Present Continuous). <br/>
                        Дієслово <strong>to be</strong> вживається у формі <strong>am</strong>, коли говорять про себе,
                        тобто підметом виступає займенник <strong>I (я)</strong>.
                        <span className={'example'}>
                            <p>I <b>am</b> twenty. – Мені двадцять (років).</p>
                            <p>I <b>am</b> fine. – Я в порядку.</p>
                            <p>I <b>am</b> at home. – Я (знаходжусь, перебуваю) вдома.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> вживається у формі <strong>is</strong>, коли підметом виступає
                        слово (іменник на позначення людини, предмета, явища) в третій особі однини або займенники
                        <strong>he</strong> (він), <strong>she</strong> (вона), <strong>it</strong> (воно).
                        <span className={'example'}>
                            <p>Pierre <b>is</b> smart. – П'єр розумний.</p>
                            <p>She <b>is</b> so beautiful! – Вона така гарна!</p>
                            <p>My room <b>is</b> upstairs. – Моя кімната (знаходиться) нагорі.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> вживається у формі <strong>are</strong> з словами (іменниками)
                        у формі множини та займенниками <strong>we</strong> (ми), <strong>you</strong> (ви),
                        <strong>they</strong> (вони). Також <strong>are</strong> завжди використовується з займенником
                        <strong>you</strong>, яке, в залежності від контексту, може перекладатися як «ви» у множині,
                        так і «ти» або «Ви» в однині.
                        <span className={'example'}>
                            <p>Hurry up! You <b>are</b> going to be late! – Поспішай! Ти запізнишся! (you – однина)</p>
                            <p>We <b>are</b> in Detroit. – Ми (знаходимось) в Детройті.</p>
                            <p>I think these statues <b>are</b> rather interesting. – Я думаю, що ці статуї вельми цікаві.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> у поєднанні з особовими займенниками може вживатися в
                        скорочених формах, що часто використовуються в повсякденному розмовному мовленні.
                        <span className={'example'}>
                            <p>I <b>am</b> in love. – Я закоханий.</p>
                            <p>I<b>’m</b> in love. – Я закоханий.</p>
                            <p>She<b>’s</b> beautiful. – Вона гарна.</p>
                            <p>We<b>’re</b> tired. Let us rest a bit. – Ми втомилися. Дай нам трохи відпочити.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        В заперечних реченнях частка not ставиться однару після дієслова <strong>to be</strong> в
                        необхідній формі. При цьому в повсякденному мовленні часто використовуються
                        скорочення <strong>isn’t, aren’t та ain’t</strong>. В сучасній англійській мові не існує
                        скорочення <strong>amn’t</strong> від <strong>am not</strong>, але часто використовується
                        скорочення <strong>I'm not</strong> (від I am not).
                        <span className={'example'}>
                            <p>I<b>’m not</b> perfect. – Я не ідеальний.</p>
                            <p>He <b>isn’t</b> here. – Його тут нема.</p>
                            <p>It<b>’s not</b> your business. – Це не твоя справа.</p>
                            <p>We<b>’re not</b> so different. – Ми не такі вже й різні.</p>
                            <p>They <b>aren't</b> Americans. - Вони не американці.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Слово <strong>ain’t</strong> може заміщувати будь-яке заперечення з <strong>to be</strong> в
                        теперішньому часі в неформальному розмовному мовленні.
                        <span className={'example'}>
                            <p>I <b>ain’t</b> perfect. – Я не ідеальний.</p>
                            <p>He <b>ain’t</b> here. – Його тут нема.</p>
                            <p>We <b>ain’t</b> so different. – Ми не такі вже й різні.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Питальні речення з дієсловом <strong>to be</strong> (в якості присудка) утворюються за допомогою
                        переносу <strong>to be</strong> в необхідній формі на початок речення перед підметом. В
                        спеціальних питаннях, коли питання має питальні слова, дієслово <strong>to be</strong> ставиться
                        після них.
                        <span className={'example'}>
                            <p><b>Am</b> I sleeping? – Я сплю? (Це сон?)</p>
                            <p><b>Is</b> it dangerous? – Це небезпечно?</p>
                            <p><b>Are</b> you ready? – Ви готові?</p>
                            <p>Where <b>am</b> I? – Де я?</p>
                            <p>Who <b>are</b> you? – Хто ви (ти)?</p>
                            <p>Why <b>are</b> these people here? – Чому ці люди тут?</p>
                            <p>What day <b>is</b> it today? – Який сьогодні день?</p>
                        </span>
                    </p>

                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Тo be в минулому часі</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> в минулому часі має дві форми <strong>was</strong> та
                        <strong>were</strong> (граматичні часи Past Simple, Past Continuous).Дієслово <strong>to
                        be</strong> вживається у формі <strong>was</strong>, коли підмет виражається словом, що стоїть
                        у формі першої (я) або третьої особи однини, або займенниками <strong>I, he, she, it</strong>.
                        <span className={'example'}>
                            <p>I <b>was</b> the best student in my group. – Я був кращим студентом в своїй групі.</p>
                            <p>Matt <b>was</b> playing the guitar when I came. – Метт грав на гітарі, коли я прийшов.</p>
                            <p>
                                She <b>was</b> in the kitchen and didn’t hear the phone ringing. – Вона була в кухні й
                                не чула, як дзвонив телефон.
                            </p>
                            <p>
                                The doll <b>was</b> broken and I tried to fix it. – Лялька була зламана, й я спробував
                                її полагодити.
                            </p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> використовується у формі <strong>were [wɜː]</strong>, коли
                        підмет виражається словом у формі множини або займенниками <strong>we (ми), you (ви), they
                        (вони)</strong>, а також займенником you у значенні «ти» або ввічливого «Ви».
                        <span className={'example'}>
                            <p>You <b>were</b> so close. – Ти був так близько.</p>
                            <p>We <b>were</b> right above you. – Ми були прямо над вами.</p>
                            <p>They <strong>were</strong> so rich. – Вони були такими багатими.</p>
                            <p>Mosquitoes <b>were</b> attacking from all sides. – Комарі атакували з всіх сторін.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        В заперечних реченнях частка <strong>not</strong> вживається після дієслова <strong>to
                        be</strong> в необхідній формі. При цьому в розмовному мовленні часто використовуються скорочені
                        форми <strong>wasn’t</strong> та <strong>weren’t</strong>. В минулому часі не вживаються
                        скорочені форми дієслова <strong>to be</strong> з займенниками, які існують в теперішньому часі.
                        <span className={'example'}>
                            <p>I <b>wasn’t</b> playing games when my mom came. – Я не грав в ігри, коли прийшла моя мати.</p>
                            <p>That <b>wasn’t</b> my home. – То був не мій будинок.</p>
                            <p>You <b>weren’t</b> lucky. – Тобі не пощастило.</p>
                            <p>These guys <b>weren’t</b> friendly. – Ці хлопці не були дружелюбними.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Питальні речення з дієсловом to be у якості присудка утворюються за допомогою переносу to be в
                        потрібній формі на початок речення перед підметом. В спеціальних питаннях, коли використовуються
                        питальні слова, дієслово to be стоїть після них.
                        <span className={'example'}>
                            <p><b>Was</b> I sleeping? – Я спав? (Це був сон?)</p>
                            <p><b>Was</b> it dangerous? – Це було небезпечно?</p>
                            <p><b>Were</b> you ready? – Ви були готові?</p>
                            <p><b>Where</b> was I? – Де я був?</p>
                            <p>Why <b>were</b> those people here? – Чому ті люди були тут?</p>
                            <p>What day <b>was</b> it yesterday? – Який вчора був день?</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be в майбутньому часі</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        В майбутньому часі (граматичні часи Future Simple, Future Continuous) дієслово <strong>to
                        be</strong> не має особливих форм, а вживається за загальними правилами з допоміжними дієсловами
                        <strong>shall</strong> та <strong>will</strong>.
                        <span className={'example'}>
                            <p>I <b>shall be</b> a doctor. – Я буду лікарем.</p>
                            <p>She <b>will be</b> working at 8 tomorrow. – Вона буде працювати завтра о 8-й.</p>
                            <p>
                                My parents <b>will be</b> 60 next year. – Моїм батьками виповниться по 60 років в наступному році.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be не змінюється</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> не змінюється в наказовому способі, що виражає наказ, прохання,
                        побажання. В цьому випадку частка <strong>to</strong> не використовується.
                        <span className={'example'}>
                            <p><b>Be</b> happy! – Будь щасливим!</p>
                            <p><b>Be</b> careful! – Будь обережним!</p>
                            <p><b>Be</b> yourself. – Будь собою.</p>
                            <p><b>Be</b> a man! – Будь мужиком!</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        Дієслово <strong>to be</strong> не змінює своєї форми, коли перед ним йде інше смислове або
                        модальне дієслово. В цьому випадку, в залежності від дієслова, з яким поєднане <strong>to
                        be</strong>, частка <strong>to</strong> може залишатися або опускатися (голий інфінітив).
                        <span className={'example'}>
                            <p>I want <b>to be</b> with you. – Я хочу бути з тобою.</p>
                            <p>I do<b>n’t</b> want <b>to be</b> angry. – Мені не хочеться бути злим.</p>
                            <p>It might <b>not be</b> true. – Можливо, це неправда.</p>
                            <p>It might <b>be</b> true. – Це може бути правдою.</p>
                            <p>You should <b>not be</b> here. – Ви не повинні бути тут.</p>
                            <p>Could it <b>be</b> here? – Чи може це бути тут?</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Функції дієслова to be</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> вживається для вираження присутності, наявності,
                        місцезнаходження,
                        опису якостей та властивостей предметів, а також для утворення граматичних конструкцій на
                        позначення часу та пасивного стану з іншими дієсловами.
                        В українській мові дієслово to be часто оминається на відміну від англійської мови, в якій
                        <strong>to be</strong> ніколи не опускається, адже в цьому випадку речення стане граматично
                        неправильним та може загубити своє значення. В реченні дієслово <strong>to be</strong> може
                        вживатися в якості смислового дієслова, дієслова-зв'язки, допоміжного дієслова або ж у
                        модальній конструкції <strong>to be to</strong>.
                        <span className={'example'}>
                            <p>Ann <b>is</b> here. – Енн (присутня) тут. (смислове дієслово)</p>
                            <p>I <b>am</b> tall. – Я (є) високий. (дієслово-зв'язка)</p>
                            <p>Jack <b>is</b> reading now. – Джек зараз читає. (допоміжне дієслово)</p>
                            <p>We <b>are</b> to be there at 6. – Ми повинні бути там о 6-й. (модальне дієслово)</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Смислове дієслово to be</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>To be</strong> в якості смислового дієслова передає значення «знаходитися»,
                        «бути присутнім», «бути у наявності». В реченні він виступає в якості простого присудка.
                        <span className={'example'}>
                            <p>Mark <b>is</b> on the meeting. – Марк (присутній) на нараді.</p>
                            <p>Our cars <b>are</b> near the house. – Наші машини (стоять) біля будинку.</p>
                            <p>There <b>are</b> some eggs in the fridge. – В холодильнику є декілька яєць.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Дієслово-зв'язка to be</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> в якості дієслова-зв'язки у реченні виступає частиною іменного
                        присудка і передає значення «є», «виявляється» для вказівки на ознаки предметів. Як
                        дієслово-зв'язка to be зазвичай не перекладається на українську мову.
                        <span className={'example'}>
                            <p>I <b>am</b> very <b>happy</b>! – Я дуже щасливий.</p>
                            <p>Ann <b>isn’t</b> a <b>student</b>. – Енн не студентка.</p>
                            <p><b>Are</b> they <b>Italians</b>? – Вони італійці?</p>
                            <p>She <b>was 20</b> when I met her for the first time. – Їй було 20, коли я вперше зустрів її.</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>To be як допоміжне дієслово</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        В якості допоміжного дієслова <strong>to be</strong> не має свого власного лексичного значення,
                        тому він не перекладається українською мовою. Форми дієслова <strong>to be</strong> (а також
                        його третя форма been) використовуються для утворення певних граматичних конструкцій та форм:
                        утворення пасивного стану та тривалих часів (Present Continuous, Present Perfect Continuous,
                        Past Continuous, Past Perfect Continuous, Future Continuous, Future Perfect Continuous).
                        <span className={'example'}>
                            <p>I<b>’m</b> working now. – Я зараз працюю.</p>
                            <p>I <b>was</b> working when Jack came. – Я працювала, коли прийшов Джек.</p>
                            <p>I have <b>been</b> working here for 6 months. – Я працюю тут 6 місяців.</p>
                            <p>I will <b>be</b> working at 8 tomorrow. – Завтра о 8-й я буду працювати.</p>
                            <p>My cup <b>is</b> broken. Who touched it? – Моя чашка розбита. Хто її торкався?</p>
                            <p>The cup <b>was</b> broken long time ago. – Чашка була розбита дуже давно.</p>
                            <p>
                                If you don’t put your cup in the drawer, it will <b>be</b> broken. – Якщо ти не покладеш свою
                                чашку в ящик, її розіб'ють.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'toBeComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'}>Модальна конструкція to be to</h2>

                <article className={'usedToComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Дієслово <strong>to be</strong> вживається в модальній конструкції <strong>to be to</strong> з
                        інфінітивом дієслова для вираження планів, домовленостей, наказу, інструкцій, заборони та
                        вираження того, що повинно статись.
                        <span className={'example'}>
                            <p>You <b>were to</b> work! – Ти повинен був працювати!</p>
                            <p>We <b>are to</b> meet Chris at 8 near the station. – Ми зустрінемо Кріса о 8-й біля станції.</p>
                            <p>What <b>am I to</b> do without you now? – Що мені без тебе тепер робити?</p>
                            <p>
                                They were going to get married but it <b>was not to</b> be. – Вони збиралися одружитися, але цього не сталося.
                            </p>
                        </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export {ToBeComponent};