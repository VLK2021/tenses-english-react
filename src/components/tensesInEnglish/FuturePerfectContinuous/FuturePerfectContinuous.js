import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './FuturePerfectContinuous.css';
import '../TensesInEnglishStyle.css';
import {tenses} from "../../../constants";
import {titlesAction} from "../../../store/slices/titles.slice";


const FuturePerfectContinuous = () => {
    const dispatch = useDispatch();

    const {title, markers} = tenses[11];

    const titlesFuturePerfectContinuous = [
        title,
        'Time markers',
        'Formation',
        'Affirmative sentence',
        'Negative sentence',
        'Interrogative sentence'
    ];


    useEffect(() => {
        dispatch(titlesAction.getTitles(titlesFuturePerfectContinuous));
    }, [titlesFuturePerfectContinuous]);

    return (
        <main className={'tensComponent futurePerfectContinuous width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'tensComponent-rule fontSizeText'}>
                <strong>Future Perfect Continuous</strong> (Future Perfect Progressive) - це часова форма дієслова,
                яка використовується для вираження тривалості дії в майбутньому до певного моменту часу або для
                позначення тривалості дії, яка розпочнеться в майбутньому і триватиме до певного моменту в майбутньому.
                Ця форма утворюється за допомогою <strong>"will have been" + present participle (V-ing)</strong> форма
                дієслова. <strong>Future Perfect Continuous</strong> використовується для підкреслення того, як довго
                (або до якого моменту) буде тривати певна дія. При цьому в реченні вказується або мається на увазі
                точний момент часу у майбутньому або ж проміжок часу, в який ця дія буде відбуватися.
                В складнопідрядних реченнях в підрядному обставини зі сполучниками <strong>by</strong> (до, на
                момент), <strong>when</strong> (коли), <strong>until</strong> (до) використовується Present Simple,
                навіть якщо мається на увазі дія в майбутньому часі. При цьому головне речення з <strong>Future Perfect
                Continuous </strong>може стояти як перед підрядним з Present Simple, так і після нього.
            </p>

            <section className={'tensComponent-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>

            <section className={'tensComponent-formation flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Formation'}>Formation</h2>

                <article className={'tensComponent-formation-info fontSizeText width'}>
                    <p>
                        <strong>Future Perfect Continuous</strong> (Майбутній доконаний продовжений час)
                        утворюється за допомогою допоміжного дієслова "<strong>will have been</strong>"
                        (дієслово <strong>"will"</strong> у майбутньому часі, дієслово <strong>"have"</strong> у
                        доконаному часі, і дієслово <strong>"been"</strong> для утворення продовженого часу) разом
                        із основним дієсловом у формі Present Participle (<strong>V-ing</strong> форма). Цей час
                        використовується для вираження дії або події, яка буде тривати до певного моменту в
                        майбутньому, з підкресленням як тривалості, так і закінченості цієї дії чи події.
                    </p>
                </article>
            </section>

            <section className={'tensComponent-affirmative flexDirectionColumn width'}>
                <h2 className={'marginTop'} id={'Affirmative sentence'}>Affirmative sentence</h2>

                <article className={'tensComponent-affirmative-info width fontSizeText'}>
                    <p className={'width'}>
                        <strong>Future Perfect Continuous</strong> (Future Perfect Progressive) утворюється за
                        допомогою допоміжного дієслова <strong>will</strong> (або ж рідше shall) та форми
                        доконано-тривалого інфінітиву <strong>Perfect Continuous Infinitive</strong> без
                        частки <strong>to (have been + дієслово із закінченням -ing)</strong>.
                        <strong>Will</strong> в сучасній англійській мові вживається для всіх осіб однини та множини.
                        <strong>Shall</strong> використовується з першою особою <strong>I, We</strong>, але його
                        використання зараз вважається застарілим. В сучасній англійській для всіх осіб будь-якого
                        числа використовується тільки will й це не вважається помилкою. Але <strong>shall</strong> ще
                        можна зустріти в газетах, старих або офіційних текстах, в художній літературі.
                        <span className={'example'}>
                            <p>
                                I <b>will have been driving</b> for 2 hours before the moment we reach New York. – Я
                                буду (вже) їхати дві години до того моменту, коли ми доїдемо до Нью-Йорка.
                            </p>
                            <p>
                                By the time of her <b>birthday she will have been teaching</b> French for 15
                                years. – На момент свого дня народження вона буде викладати французьку мову
                                протягом 15 років.
                            </p>
                            <p>
                                By the end of autumn, they<b>’ll have been dating</b> for 2 years. – На кінець
                                осені вони будуть зустрічатися протягом двох років.
                            </p>
                        </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-negative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Negative sentence'}>Negative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Заперечення в <strong>Future Perfect Continuous</strong> утворюється шляхом додавання частки
                        not після допоміжного дієслова <strong>will</strong> або <strong>shall</strong>.

                        <span className={'example'}>
                            <p>
                                I <b>will not</b> have been driving for 2 hours before the moment we reach New
                                York. – Я не буду їхати дві години до того моменту, коли ми доїдемо до Нью-Йорка.
                            </p>
                            <p>
                                By the time of her birthday she <b>will not</b> have been teaching French for 15
                                years. – На момент свого дня народження вона (ще) не буде викладати французьку
                                мову протягом 15 років.
                            </p>
                            <p>
                                By the end of autumn, they <b>won’t</b> have been dating for 2 years. – На кінець
                                осені вони (ще) не будуть зустрічатися протягом двох років.
                            </p>
                            <p>
                                We <b>shan’t</b> have been living here for 10 years by next February. – До
                                наступного лютого ми (ще) не проживемо тут 10 років.
                            </p>
                    </span>
                    </p>
                </article>
            </section>

            <section className={'tensComponent-interrogative flexDirectionColumn width fontSizeText'}>
                <h2 className={'marginTop'} id={'Interrogative sentence'}>Interrogative sentence</h2>

                <article className={'width fontSizeText'}>
                    <p className={'width'}>
                        Утворення загального питання в <strong>Future Perfect Continuous</strong> відбувається
                        шляхом винесення допоміжного дієслова <strong>will</strong> або <strong>shall</strong> на
                        початок речення перед підметом.
                        <span className={'example'}>
                            <p>
                                <b>Will</b> I <b>have been driving</b> for 2 hours before the moment we reach
                                New York? – Чи буду я їхати протягом двох годин до того часу, коли ми доберемося
                                до Нью-Йорка?
                            </p>
                            <p>
                                <strong>Will</strong> she <strong>have been teaching</strong> French for 15 years
                                by the time of her birthday? – Чи буде вона викладати французьку мову протягом 15
                                років до свого дня народження?
                            </p>
                            <p>
                                <strong>Will</strong> they <strong>have been dating</strong> for 2 years by the
                                end of autumn? – Чи будуть вони зустрічатися протягом двох років на кінець осені?
                            </p>
                    </span>
                    </p>

                    <p className={'width marginTop'}>
                        Спеціальне питання в <strong>Future Perfect Continuous</strong> утворюється за допомогою
                        питального слова або фрази, яка виноситься на початок речення. Подальший порядок слів такий
                        самий, як і в загальному питанні для <strong>Future Perfect Continuous (will + підмет + have
                        been...)</strong>.
                        <span className={'example'}>
                            <p>
                                <b>What will</b> they have been doing for 2 year by the end of the autumn? – Що
                                вони будуть робити протягом (вже) двох років на кінець осені?
                            </p>
                            <p><b>How long will</b> I have been driving before the moment we reach New York? – Як
                                довго я буду їхати до того моменту як ми досягнемо Нью-Йорка?</p>
                            <p>
                                <b>By what time will</b> she have been teaching French for 15 years? – До якого
                                часу вона буде викладати французьку мову протягом 15 років?
                            </p>
                    </span>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default FuturePerfectContinuous;