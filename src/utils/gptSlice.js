import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptState: false,
        gptNames: null,
        gptMovies: null,
    },

    reducers:{
        addGptMovies: (state,action)=>{
            const {movieNames, movieResults} = action.payload;
            state.gptNames = movieNames;
            state.gptMovies = movieResults;
        },
        toggleGptState: (state)=>{
           state.gptState = !state.gptState
        }
    }
})

export const {toggleGptState, addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;