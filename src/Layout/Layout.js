import React, {useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import './LayoutStyle.css';
import {menu} from '../constants';
import Button from "../components/Button/Button";
import {Footer, Header, HomeComponent, MenuTitlesComponent} from "../components";
import {SideMenuComponent} from "../components/SideMenuComponent/SideMenuComponent";


const Layout = () => {
    const secondNumberSlice = menu.length / 2;
    const location = useLocation();

    const [expanded, setExpanded] = useState(false);


    return (
        <main className={'main width flexDirectionColumn'}>
            {location.pathname !== '/' ?
                <section className={'container'}>
                    <header className={'header-block'}>
                        <Header/>
                    </header>

                    <section className={'layout'}>
                        <aside className={'sideMenu'}>
                            <div
                                className={`width sidebar ${expanded ? 'expanded' : 'collapsed'}`}
                                onMouseEnter={() => setExpanded(true)}
                                onMouseLeave={() => setExpanded(false)}
                            >
                                <SideMenuComponent/>
                            </div>
                        </aside>


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
                                menu.slice(secondNumberSlice, menu.length).map(obj => <Button key={obj.id}
                                                                                              obj={obj}/>)
                            }
                        </aside>
                    </section>

                    <footer className={'width'}>
                        <Footer/>
                    </footer>
                </section>
                :
                <section className={'maineHomeComponentBlock'}><HomeComponent/></section>
            }
        </main>
    );
};

export default Layout;

