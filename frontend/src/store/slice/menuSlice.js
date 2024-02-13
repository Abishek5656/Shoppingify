import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const menuSlice= createSlice({
      name: "menu",
      initialState,
      reducers: {


            
       }

})


export const selectAllmenu = (state) => state.menu;

export const {

} = menuSlice.actions;

export default menuSlice.reducer;