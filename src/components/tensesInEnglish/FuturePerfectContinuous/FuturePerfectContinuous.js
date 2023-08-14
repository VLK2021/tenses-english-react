import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './FuturePerfectContinuous.css';
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
        <main className={'futurePerfectContinuous width flexDirectionColumn'}>
            <h1 id={`${title}`}>{title}</h1>

            <p className={'futurePerfectContinuous-rule fontSizeText'}>
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

            <section className={'futurePerfectContinuous-markers flexDirectionColumn width'}>
                <h2 id={'Time markers'}>Time markers</h2>

                <ul className={'fontSizeText width'}>
                    {
                        markers.map(marker => <li key={marker.id}>{marker.name}</li>)
                    }
                </ul>
            </section>
        </main>
    );
};

export default FuturePerfectContinuous;