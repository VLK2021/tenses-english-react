import React from 'react';


const GoUpButton = ({title}) => {

    //робимо так щоб після кліку на посилання контекст не ховався під хедер а був під ним + плавна прокрутка
    const scrollToContent = (event, title) => {
        event.preventDefault();

        const headerHeight = document.querySelector('.header-block').offsetHeight;
        const offset = parseFloat(getComputedStyle(document.documentElement).fontSize);

        const targetPosition = document.getElementById(title).getBoundingClientRect().top;
        const scrollPosition = window.scrollY + targetPosition - headerHeight - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    };


    return (
        <main className={'width flex goUpButton marginTop'}>
            <section className={'width'}>
                <a href={`#${title}`} onClick={(e) => scrollToContent(e, title)}>
                    <button className={'flex'}>go up</button>
                </a>
            </section>
        </main>
    );
};

export default GoUpButton;