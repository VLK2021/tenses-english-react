import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './FormSearchComponentStyle.css';
import {vocabularyForIt, fruitsAndVegetables, vocabularyHome} from "../../../constants";


const FormSearchComponent = ({
                                 setNewVocabularyForIt,
                                 setNewFruitsAndVegetables,
                                 setNewVocabularyHome,
                                 setNewVocabularyAdverbs
                             }) => {
    const {register, handleSubmit, setValue} = useForm();
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('');

    const submit = (data, e) => {
        setUrl(e.target.baseURI)
        setQuery(data.search);
    }

    useEffect(() => {
        if (url.includes('VT3')) {
            setNewVocabularyForIt(vocabularyForIt.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (url.includes('VT7')) {
            setNewFruitsAndVegetables(fruitsAndVegetables.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (url.includes('VT1')) {
            setNewVocabularyHome(vocabularyHome.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (url.includes('VT8')) {
            setNewVocabularyAdverbs(vocabularyHome.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
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