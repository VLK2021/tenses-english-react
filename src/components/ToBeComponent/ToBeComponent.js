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
                        спеціальних питаннях, коли питання має питальні слова, дієслово <strong>to be</strong> ставиться після них.
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
                        Питальні речення з дієсловом to be у якості присудка утворюються за допомогою переносу to be в потрібній формі на початок речення перед підметом. В спеціальних питаннях, коли використовуються питальні слова, дієслово to be стоїть після них.
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


        </main>
    );
};

export {ToBeComponent};