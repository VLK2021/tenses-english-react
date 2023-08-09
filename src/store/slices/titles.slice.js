import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    titlesArray: [],
}


const titlesSlice = createSlice({
    name: 'titlesSlice',
    initialState,
    reducers: {
        getTitles: (state, action) => {
            state.titlesArray = action.payload
        }
    }
});

const {actions: {getTitles}} = titlesSlice;
const titlesAction = {getTitles};

export {titlesAction};
export default titlesSlice.reducer;