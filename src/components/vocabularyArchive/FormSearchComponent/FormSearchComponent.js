import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './FormSearchComponentStyle.css';
import {
    vocabularyForIt,
    fruitsAndVegetables,
    vocabularyHome,
    vocabularyAdverbs,
    vocabularyForFamily,
    vocabularyAdjectives
} from "../../../constants";


const FormSearchComponent = ({setNewVocabularyArray, id}) => {
    const {register, handleSubmit, setValue} = useForm();
    const [query, setQuery] = useState('');

    const submit = (data) => {
        setQuery(data.search);
    }

    useEffect(() => {
        if (id ==='VT1') {
            setNewVocabularyArray(vocabularyHome.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (id ==='VT2') {
            setNewVocabularyArray(vocabularyForFamily.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (id ==='VT3') {
            setNewVocabularyArray(vocabularyForIt.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (id ==='VT7') {
            setNewVocabularyArray(fruitsAndVegetables.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }

        if (id ==='VT8') {
            setNewVocabularyArray(vocabularyAdverbs.filter(current => current.infinitive.toLowerCase().includes(query)))
            setValue('search', query);
        }
        if (id ==='VT9') {
            setNewVocabularyArray(vocabularyAdjectives.filter(current => current.infinitive.toLowerCase().includes(query)))
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