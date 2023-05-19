import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import './LayoutStyle.css';
import {leftMenu, rightMenu} from '../constants';


const Layout = () => {
    const navigate = useNavigate();

    const goToPage = (e) => {
        console.log(e.target.innerText);
        navigate(`/${e.target.innerText}`)
    }

    return (
        <div className={'layout'}>

            <div className={'layout-lift'}>
                {
                    leftMenu.map(obj => <button
                        key={obj.id}
                        className={'btn-left'}
                        onClick={(e) => goToPage(e)}
                    >
                        {obj.name}
                    </button>)
                }
            </div>

            <div className={'outlet'}><Outlet/></div>

            <div className={'layout-right'}>
                {
                    rightMenu.map(obj => <button
                        key={obj.id}
                        className={'btn-right'}
                        onClick={(e) => goToPage(e)}
                    >
                        {obj.name}
                    </button>)
                }
            </div>
        </div>
    );
};

export default Layout;