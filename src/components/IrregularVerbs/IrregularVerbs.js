import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";


import './IrregularVerbsStyle.css';
import {irregularVerbs, titles} from '../../constants';
import IrregularVerb from "../IrregularVerb/IrregularVerb";


const IrregularVerbs = () => {
    const {register, handleSubmit, setValue} = useForm();

    const [arr, setArr] = useState(irregularVerbs);
    const [query, setQuery] = useState('');

    const submit = (data) => {
        setQuery(data.search)
    }

    useEffect(() => {
        setArr(irregularVerbs.filter(current => current.infinitive.toLowerCase().includes(query)))
        setValue('search', query);
    }, [query]);


    return (
        <main className={'irregularVerbs width flexDirectionColumn'}>
            <h1>Irregular Verbs</h1>

            <section className={'irregularVerbs-form width'}>
                <form onChange={handleSubmit(submit)}>
                    <input type="text" {...register('search')} placeholder={'Filter by infinitive...'}
                           defaultValue={''}/>
                </form>
            </section>

            <section className={'irregularVerbs-title width'}>
                <header className={'width names'}>
                    {
                        titles.map(title => <h2 key={title.id} className={'names-one'}>{title.name}</h2>)
                    }
                </header>

                <article className={'block width'}>
                    {
                        arr.map(obj => <IrregularVerb key={obj.id} obj={obj}/>)
                    }
                </article>
            </section>
        </main>
    );
};

export default IrregularVerbs;