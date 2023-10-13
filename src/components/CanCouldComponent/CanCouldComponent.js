import React, {useEffect} from 'react';

import './CanCouldComponentStyle.css';
import '../tensesInEnglish/TensesInEnglishStyle.css';
import {useDispatch} from "react-redux";
import {titlesAction} from "../../store/slices/titles.slice";
import GoUpButton from "../GoUpButton/GoUpButton";


const CanCouldComponent = () => {
    const dispatch = useDispatch();

    const titlesCanCouldComponent = [
        'Can / Could',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence',
        'Фізична можливість',
        'Факти, правила, обставини',
        'Дозволи, прохання, заборони',
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesCanCouldComponent));
    }, [titlesCanCouldComponent]);


    return (
        <main className={'tensComponent width flexDirectionColumn'}>
            <h1 id={'Can / Could'}>Can / Could</h1>

            <p className={'tensComponent-rule fontSizeText'}>
                Модальне дієслово <strong>can</strong> має багато відтінків значення, і його можна перекласти
                українською як «можу», «можна», «не може бути», «невже…?». Він використовується для вираження вміння,
                фізичної можливості виконати щось, дозволу або заборони, прохання, впевненості або сумніву в чомусь,
                неможливості чогось тощо. Модальне дієслово <strong>can</strong> в формі минулого часу або при
                узгодженні часів вживається у формі <strong>could</strong>. <strong>Can</strong> не може утворювати
                форми майбутнього часу, тому в таких випадках замість модального дієслова використовується конструкція
                <strong>to be able to</strong> в формі майбутнього часу.

                <h3 className={'h3'}>Теперішній час:</h3>
                <span className={'example'}>
                            <p>I <b>can</b> swim - Я можу (вмію) плавати. </p>
                            <p>You <b>could</b> help us - Ти б міг нам й допомогти (зараз)</p>
                        </span>

                <h3 className={'h3 marginTop'}>Минулий час:</h3>
                <span className={'example'}>
                            <p>I <b>could</b> swim when I was 10 - Я міг плавати, коли мені було 10</p>
                            <p>You <b>could</b> have helped us - Ти б міг нам й допомогти (тоді)</p>
                        </span>

                <h3 className={'h3 marginTop'}>Майбутній час:</h3>
                <span className={'example'}>
                            <p>I <b>will be able to</b> swim soon - Я скоро зможу плавати</p>
                        </span>
            </p>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        В стверджувальних реченнях модальне дієслово <strong>can</strong> використовується тільки у
                        поєднанні з простим інфінітивом (першою формою) смислового дієслова без частки to.
                        <span className={'example'}>
                            <p>I <b>can</b> swim. – Я вмію плавати.</p>
                            <p>It <b>can</b> be true. – Це може бути правдою.</p>
                            <p>You <b>can</b> use my pen. – Ти можеш покористуватися моєю ручкою.</p>
                        </span>
                    </p>

                    <p className={'width marginTop'}>
                        Форма минулого часу модального дієслова <strong>can (could)</strong> в ствердженні може
                        використовуватися з простим інфінітивом смислових дієслів, а також з доконаним інфінітивом
                        в значенні докору через певну невиконану дію.
                        <span className={'example'}>
                            <p>We <b>could</b> run fast when we were young. – Ми могли швидко бігати, коли були молодими.</p>
                            <p>
                                She said Jack <b>could</b> take her car. – Вона сказала, що Джек може взяти
                                її машину. (узгодження часів)
                            </p>
                            <p>
                                You <b>could</b> be quiet at least. I’m trying to work. – Ти міг хоча б поводити себе
                                тихіше. Я намагаюсь працювати.
                            </p>
                            <p>Matt <b>could have</b> waited for us. – Метт міг би нас й почекати. (але він не почекав)</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечні речення з <strong>can</strong> або <strong>could</strong> утворюються шляхом
                        додавання заперечної частки <strong>not</strong> після самих модальних дієслів.

                        <span className={'example'}>
                            <p>I can not find the key to my car. – Я не можу знайти ключ до своєї машини.</p>
                            <p>You can not take my phone. – Тобі не можна брати мій телефон.</p>
                            <p>Jack could not have said it. – Не може бути, щоб Джек сказав таке.</p>
                            <p>
                                My mom said my friends could not stay at my place. – Моя мама сказала, що мої друзі не можуть залишитися у мене. (узгодження часів)
                            </p>
                            <p>My brother can’t dance. – Мій брат не вміє танцювати.</p>
                            <p>I couldn’t swim when I was 5 years old. – Я не вмів плавати, коли мені було 5 років.</p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Утворення питальних речень з <strong>can</strong> або <strong>could</strong> не потребує
                        допоміжних дієслів, достатньо винести модальні дієслова на початок речення перед підметом
                        (або після питального слова). Модальні <strong>can</strong> та <strong>could</strong> можуть
                        також утворювати заперечні питання (<strong>not</strong> ставиться після <strong>can</strong>
                        або <strong>could</strong>).
                        <span className={'example'}>
                            <p><b>Can</b> you swim? – Ти вмієш плавати?</p>
                            <p><b>Can</b> I speak to your boss? – Можна я побалакаю з твоїм босом?</p>
                            <p>
                                Why <b>could</b> they read when they were 5? – Чому вони могли читати, коли їм
                                було по 5 років?
                            </p>
                            <p>
                                <b>Could</b> Ann speak perfect English before going to England? – Енн могла розмовляти
                                ідеальною англійською перед тим, як поїхати до Англії?
                            </p>
                            <p><b>Can’t</b> you be quiet? I’m studying! – Ти не можеш помовчати? Я вчуся!</p>
                            <p>Why <b>couldn’t</b> you do that for me? – Чому ти не міг зробити це для мене?</p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Також <strong>could</strong> є більш ввічливою формою питання, ніж <strong>can</strong>, і вони
                        можуть вільно заміняти один одного в питаннях теперішнього часу.
                        <span className={'example'}>
                            <p><b>Can</b> you switch off the air conditioning? – Ти можеш вимкнути кондиціонер?</p>
                            <p><b>Could</b> you switch off the air conditioning? – Чи не міг би ти вимкнути кондиціонер?</p>
                    </span>
                    </p>
                </article>
            </section>

            <h1 className={'CanCouldComponent-h1-second'}>Особливості вживання</h1>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Фізична можливість'}>Фізична можливість</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Модальне дієсловол <strong>can</strong>, як правило, виражає розумову або фізичну здатність
                        або нездатність щось виконати або зробити, вміння та навички людини.
                        <span className={'example'}>
                            <p>Harry Potter <b>can</b> talk to snakes. – Гаррі Поттер може (вміє) розмовляти зі зміями.</p>
                            <p>He <b>can’t</b> speak Portuguese. – Він не може розмовляти португальською.</p>
                            <p><b>Can</b> you swim? – Ти вмієш плавати?</p>
                            <p>I <b>could</b> dance all night long when I was young. – Я міг танцювати всю ніч, коли був молодим.</p>
                            <p>Jack <b>couldn’t</b> drive a car before last summer. – Джек не вмів водити машину до минулого літа.</p>
                            <p><b>Could</b> Alex dance the waltz at the high school? – Алекс міг танцювати вальс в старшій школі?</p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Факти, правила, обставини'}>Факти, правила, обставини</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Модальне дієслово <strong>can</strong> з формою простого інфінітиву (першою формою)
                        використовується для вираження загальновідомих фактів, правил, а також дій, що можуть бути
                        виконані при певних обставинах. Часто в таких реченнях can використовується з підметом,
                        вираженим займенником You, що не називає певну особу, а вживається як узагальнення.
                        <span className={'example'}>
                            <p>
                                It <b>can</b> be pretty difficult to find a job these days. – В ці дні знайти роботу може
                                бути дуже складно.
                            </p>
                            <p>Small dogs <b>can</b> be very aggressive. – Маленькі собаки можуть бути дуже агресивними.</p>
                            <p>
                                Children <b>can’t</b> buy alcohol and cigarettes. – Діти не можуть купляти алкоголь
                                та цигарки.
                            </p>
                            <p>
                                You <b>can</b> drive only when you have your driving license. – Можна водити машину, тільки
                                коли у тебе є водійські права.
                            </p>
                            <p>
                                You <b>can’t</b> get a driving license until you are 18. – Не можна отримати водійські права,
                                допоки тобі не виповниться 18.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Дозволи, прохання, заборони'}>Дозволи, прохання, заборони</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        Модальне дієслово <strong>can</strong> з формою простого інфінітиву смислового дієслова
                        використовується для вираження дозволів, прохань або ж заборони робити щось. В питаннях
                        дієслово <strong>could</strong> виражає більш ввічливе прохання і він може вживатися
                        в теперішньому часі.
                        <span className={'example'}>
                            <p><b>Can</b> I speak to your boss? – Можна я побалакаю з твоїм босом?</p>
                            <p>Yes, you <b>can</b>. – Так, можна.</p>
                            <p>No, you <b>can’t</b>. – Ні, неможна.</p>
                            <p><b>Could</b> I use your notes? – Чи можна мені скористатися твоїми записами?</p>
                            <p>Of course you <b>can</b>. – Звичайно, що можна.</p>
                            <p>No, you <b>can’t</b>. – Ні, неможна.</p>
                        </span>
                    </p>
                    <p className={'width marginTop'}>
                        В теперішьному часі модальне дієслово <strong>could</strong> ніколи не використовується в
                        відповідях на прохання (в дозволах або заборонах), а тільки при узгодженні часів у реченні.
                        <span className={'example'}>
                            <p>She said you <b>could not</b>. – Вона сказала, що тобі неможна.</p>
                            <p>
                                I asked her, but she said I <b>couldn’t</b> do it. – Я спитав у неї, одна вона сказала, що
                                мені неможна (було) цього робити.
                            </p>
                        </span>
                    </p>
                </article>
            </section>



            <section className={'width'}>
                <GoUpButton title={'Can / Could'}/>
            </section>
        </main>
    );
};

export {CanCouldComponent};