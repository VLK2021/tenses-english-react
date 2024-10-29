import React, {useState} from 'react';
import {useSelector} from "react-redux";

import './SideMenuComponentStyle.css';


const SideMenuComponent = () => {
    const titlesArray = useSelector(store => store.titles.titlesArray);

    const [menuVisible, setMenuVisible] = useState(false);

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

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <main className='menu-container'>
            <div
                className={`menu ${menuVisible ? 'expanded' : 'collapsed'}`}
                onMouseEnter={toggleMenu}
                onMouseLeave={toggleMenu}
            >
                {
                    titlesArray.map((obj, index) =>
                        <div className={`menu-item ${menuVisible ? 'with-text' : ''}`} key={index}>
                            <a href={`#${obj}`} onClick={(e) => scrollToContent(e, obj)}>
                                {menuVisible && obj}
                            </a>
                        </div>
                    )
                }
            </div>
        </main>
    );
};

export {SideMenuComponent};
