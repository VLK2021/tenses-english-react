import React from 'react';

import './HomeComponentStyle.css';
import {menu} from "../../constants";
import button from "../Button/Button";
import {NavLink} from "react-router-dom";


const HomeComponent = () => {

    return (
        <div className={'homeComponent width'}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-element"
            >
                <source src="/video/videoplaybackForBackgraund.mp4" type="video/mp4"/>
            </video>

            <h1 className={'flex'}>easy english</h1>

            <section className={'homeComponent-menuBlock'}>
                {menu
                    .map(obj => (
                        <NavLink key={obj.id} to={obj.id.toString()}>
                            <button>{obj.name}</button>
                        </NavLink>
                    ))
                }</section>

        </div>
    );
};

export {HomeComponent};