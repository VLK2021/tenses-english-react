import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './FormSearchComponentStyle.css';
import {vocabularyForIt} from "../../constants";



const FormSearchComponent = ({setNewVocabularyForIt}) => {
    const {register, handleSubmit, setValue} = useForm();
    const [query, setQuery] = useState('');


    const submit = (data) => {
        setQuery(data.search);
    }

    useEffect(()=>{
        setNewVocabularyForIt(vocabularyForIt.filter(current => current.infinitive.toLowerCase().includes(query)))
        setValue('search', query);
    }, [query]);

    return (
        <main className={'formSearchComponent'}>
            <form onChange={handleSubmit(submit)}>
                <input type="text" {...register('search')} placeholder={'Filter by infinitive...'} defaultValue={''}/>
            </form>
        </main>
    );
};

export default FormSearchComponent;