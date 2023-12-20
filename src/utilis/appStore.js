import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "../utilis/moviesSlice"
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configSlice
    },
},
)

export default appStore;
