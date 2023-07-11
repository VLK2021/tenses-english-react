import React from 'react';

import './FooterStyle.css';
import logo512 from './logo512.png';


const Footer = () => {
    return (
        <main className={'footer width marginTop'}>
            <img src={logo512} alt="logo"/>
            <p>React - </p>
            <h3>Copyright © 2023 Volodymyr Kostiuk.</h3>
        </main>
    );
};

export {Footer};