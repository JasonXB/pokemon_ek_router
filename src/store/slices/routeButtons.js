import { createSlice } from "@reduxjs/toolkit";
import { routesList } from "../../game_data/routes/list";
// Create the initial state object for each route (requires a kvp for each route)
let init = {};
routesList.forEach((areaName) => {
  init[areaName] = false;
});

const routeSlice = createSlice({
  name: "route", // expected built-in KVP
  initialState: init,
  reducers: {
    toggle: (state, action) => {
      let specificRoute = action.payload;
      state[specificRoute] = !state[specificRoute]; // flip value
    },
  },
});
export const routeActions = routeSlice.actions;
export default routeSlice.reducer; // the only line not part of the cutout
