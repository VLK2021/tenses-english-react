import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {menu} from '../constants';
import Button from "../components/Button/Button";


const Layout = () => {
    const secondNumberSlice = menu.length / 2;

    return (
        <main className={'layout'}>
            <aside className={'layout-left'}>
                {
                    menu.slice(0, secondNumberSlice).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </aside>

            <article className={'outlet'}><Outlet/></article>

            <aside className={'layout-right'}>
                {
                    menu.slice(secondNumberSlice, menu.length).map(obj => <Button key={obj.id} obj={obj}/>)
                }
            </aside>
        </main>
    );
};

export default Layout;


// import React, { Profiler } from 'react';
// import {Outlet} from 'react-router-dom';
//
// import './LayoutStyle.css';
// import {menu} from '../constants';
// import Button from "../components/Button/Button";
//
//
// const Layout = () => {
//
//     const handleRender = (
//         id, // ідентифікатор компонента
//         phase, // фаза життєвого циклу (mount/update)
//         actualDuration, // фактична тривалість рендерингу
//         baseDuration, // базова тривалість
//         startTime, // час початку рендерингу
//         commitTime // час фіксації змін
//     ) => {
//         // Ви можете використовувати ці дані для аналізу продуктивності компонента
//         console.log(`${id} рендериться за ${actualDuration} ms`);
//     };
//
//
//     return (
//
//         <Profiler id="Layout" onRender={handleRender}>
//
//         <main className={'layout'}>
//             <aside className={'layout-left'}>
//                 {
//                     menu.slice(0, 12).map(obj => <Button key={obj.id} obj={obj}/>)
//                 }
//             </aside>
//
//             <article className={'outlet'}><Outlet/></article>
//
//             <aside className={'layout-right'}>
//                 {
//                     menu.slice(12, 24).map(obj => <Button key={obj.id} obj={obj}/>)
//                 }
//             </aside>
//         </main>
//
//         </Profiler>
//     );
// };
//
// export default Layout;