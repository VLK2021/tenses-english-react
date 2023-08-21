import React, {useState} from 'react';

import './MenuTitlesComponentStyle.css';
import {useSelector} from "react-redux";


const MenuTitlesComponent = () => {
    const titlesArray = useSelector(store => store.titles.titlesArray);

//ховаємо та показуємо блоки з меню
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisibleCircle, setMenuVisibleCircle] = useState(true);

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

    const menuChange = () => {
        setMenuVisible(!menuVisible);
        setMenuVisibleCircle(!menuVisibleCircle);
    }


    return (
        <main className={'width'}>
            <div className={'flex width menuTitlesComponent-block-first-main'} onMouseMove={menuChange}>
                {
                    menuVisibleCircle &&
                    titlesArray.map(obj =>
                        <div className={'menuTitlesComponent-block-first'} key={obj}>
                        </div>
                    )
                }
            </div>

            <div className={'width flex menuTitlesComponent'} onMouseLeave={menuChange}>
                {
                    titlesArray.length > 0 && menuVisible &&
                    titlesArray.map(obj =>
                        <div className={'menuTitlesComponent-block'} key={obj}>
                            <a href={`#${obj}`} onClick={(e) => scrollToContent(e, obj)}>
                                {obj}
                            </a>
                        </div>
                    )
                }
            </div>
        </main>
    );
};

export {MenuTitlesComponent};