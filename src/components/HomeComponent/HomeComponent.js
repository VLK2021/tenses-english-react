import React, {useEffect, useState} from 'react';

import './HomeComponentStyle.css';
import {useDispatch} from "react-redux";
import {titlesAction} from "../../store/slices/titles.slice";


const HomeComponent = () => {
    const dispatch = useDispatch();

    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        dispatch(titlesAction.getTitles([]));
    }, []);

    const inc = () => {
        setCounter(counter + 1);
    }

    const dec = () => {
        setCounter(counter - 1);
    }

    const res = () => {
        setCounter(0);
    }

    const resT = () => {
        setTimer(0);
    }



    useEffect(() => {
        const interval = setInterval(()=> {
            setTimer(timer + 1);
        }, 1500);

        return () => {
            clearInterval(interval);
        }
    }, [timer]);



    return (
        <div className={'homeComponent width'}>
            <button onClick={inc}>increment</button>
            <h1>{counter}</h1>
            <button onClick={dec}>decrement</button>
            <button onClick={res}>reset</button>

            <div>
                <h3>Timer</h3>
                <h1>{timer}</h1>
                <button onClick={resT}>reset</button>
            </div>
        </div>
    );
};

export {HomeComponent};