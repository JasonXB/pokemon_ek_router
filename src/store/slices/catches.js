import { createSlice } from "@reduxjs/toolkit";
import { pokemonList } from "../../game_data/pokemon/list";
// Create the initial state object for each pokemon's catch status
let init = {};
pokemonList.forEach((species) => {
  init[species] = false;
});

const catchSlice = createSlice({
  name: "catches", // expected built-in KVP
  initialState: init,
  reducers: {
    addCatch: (state, action) => {
      let catchList = action.payload; // an array of pokemon the user just caught ["Pidgey", "Rattata"]
      catchList.forEach((species) => {
        state[species] = true;
      });
    },
  },
});
export const catchActions = catchSlice.actions;
export default catchSlice.reducer; // the only line not part of the cutout
