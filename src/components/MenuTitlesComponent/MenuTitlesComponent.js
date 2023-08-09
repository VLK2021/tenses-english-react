import React from 'react';

import './MenuTitlesComponentStyle.css';
import {useSelector} from "react-redux";


const MenuTitlesComponent = () => {
    const {titlesArray} = useSelector(store => store.titles);

//робимо так щоб після кліку на посилання контекст не ховався під хедер а був під ним + плавна прокрутка
    const scrollToContent = (event, targetId) => {
        event.preventDefault();

        const headerHeight = document.querySelector('.header-block').offsetHeight;
        const offset = parseFloat(getComputedStyle(document.documentElement).fontSize);

        const targetPosition = document.getElementById(targetId).getBoundingClientRect().top;
        const scrollPosition = window.scrollY + targetPosition - headerHeight - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    };


    return (
        <main className={'menuTitlesComponent width flex'}>
            {
                titlesArray.length > 0 &&
                titlesArray.map(obj =>
                    <div>
                        <a href={`#${obj}`} onClick={(e) => scrollToContent(e, obj)}>
                            {obj}
                        </a>
                    </div>
                )
            }
        </main>
    );
};

export {MenuTitlesComponent};