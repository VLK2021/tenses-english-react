import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {menu} from '../constants';
import Button from "../components/Button/Button";
import {Footer, Header} from "../components";


const Layout = () => {
    const secondNumberSlice = menu.length / 2;


    return (
        <main className={'main width flexDirectionColumn'}>
            <header className={'header-block'}>
                <Header/>
            </header>

            <section className={'width layout'}>
                <aside className={'layout-left'}>
                    {
                        menu.slice(0, secondNumberSlice).map(obj => <Button key={obj.id} obj={obj}/>)
                    }
                </aside>

                <article className={'outlet'}>
                    <Outlet/>
                </article>

                <aside className={'layout-right'}>
                    {
                        menu.slice(secondNumberSlice, menu.length).map(obj => <Button key={obj.id} obj={obj}/>)
                    }
                </aside>
            </section>

            <footer className={'width'}>
                <Footer/>
            </footer>
        </main>
    );
};

export default Layout;

