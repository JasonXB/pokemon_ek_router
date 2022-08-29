import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeButtons"; // a slice's default export but renamed
import catchReducer from "./slices/catches";

// Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    routes: routeReducer,
    catches: catchReducer,
  },
});

export default store; // Default export the Redux store
