import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingTrailer: {
            movie: null,
            trailer: null,
        },
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingTrailer: (state,action)=>{
            state.nowPlayingTrailer = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addNowPlayingTrailer, setCurrentMovie} = moviesSlice.actions;
export default moviesSlice.reducer;