import { configureStore } from "@reduxjs/toolkit";
import menuReducers from "./slice/menuSlice.js";
import shoppingReducers from "../component/shoppingChart/shoppingSlice.js";

export const store = configureStore({
    reducer: {
        menu: menuReducers,
        shoppingCart: shoppingReducers,
    },
});
