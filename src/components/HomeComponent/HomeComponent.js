import React, {useEffect} from 'react';

import './HomeComponentStyle.css';
import {useDispatch} from "react-redux";
import {titlesAction} from "../../store/slices/titles.slice";


const HomeComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(titlesAction.getTitles([]));
    }, []);


    return (
        <div className={'homeComponent width'}>

        </div>
    );
};

export {HomeComponent};