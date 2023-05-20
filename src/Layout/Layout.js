import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {menu} from '../constants';
import Button from "../components/Button/Button";


const Layout = () => {


    return (
        <div className={'layout'}>

            <div className={'layout-left'}>
                {
                    menu.slice(0, 12).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </div>

            <div className={'outlet'}><Outlet/></div>

            <div className={'layout-right'}>
                {
                    menu.slice(12, 23).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </div>
        </div>
    );
};

export default Layout;