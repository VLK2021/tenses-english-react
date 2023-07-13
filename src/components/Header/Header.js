import React, {useEffect, useState} from 'react';

import './HeaderStyle.css';


const Header = () => {
    const colors = ['#e60000', '#cc5200', '#4d79ff', 'lightseagreen', 'orange'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];


    return (
        <main className={'width header flex'}>
            <p className={'header-title flex'} style={{color: currentColor}}>learning English</p>
        </main>
    );
};

export {Header};