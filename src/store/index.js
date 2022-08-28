import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeButtons"; // a slice's default export but renamed

// Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    route: routeReducer,
  },
});

export default store; // Default export the Redux store
