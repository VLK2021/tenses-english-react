import {combineReducers, configureStore} from "@reduxjs/toolkit";

import titlesReducer from './slices/titles.slice';


const rootReducer = combineReducers({
    titles: titlesReducer
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;