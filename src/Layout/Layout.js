import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {menu} from '../constants';
import Button from "../components/Button/Button";


const Layout = () => {


    return (
        <main className={'layout'}>
            <aside className={'layout-left'}>
                {
                    menu.slice(0, 12).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </aside>

            <article className={'outlet'}><Outlet/></article>

            <aside className={'layout-right'}>
                {
                    menu.slice(12, 23).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </aside>
        </main>
    );
};

export default Layout;