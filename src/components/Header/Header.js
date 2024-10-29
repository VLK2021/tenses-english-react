import React, {useEffect, useState} from 'react';
import {HiHome} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

import './HeaderStyle.css';
import {MenuTitlesComponent} from "../MenuTitlesComponent/MenuTitlesComponent";


const Header = () => {
    const navigate = useNavigate();

    const colors = ['#e60000', '#cc5200', '#4d79ff', '#ff66cc', 'orange', '#0099ff', '#996600', '#66ff33', '#d966ff'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];

    const goHome = () => {
        navigate('/');
    }


    return (
        <main className={'width header-main'}>
            <section className={'width header flex'}>
                <div className={'header-icon'}>
                    <HiHome className={'home-icon'} onClick={goHome}/>
                </div>

                <p className={'header-title flex'} style={{color: currentColor}}>Easy English</p>

                <div>
                </div>
            </section>

            {/*<section className={'width flex header-main-menu-block'}>*/}
            {/*    <MenuTitlesComponent/>*/}
            {/*</section>*/}
        </main>
    );
};

export {Header};