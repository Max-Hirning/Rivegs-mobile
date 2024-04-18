import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./controllers/profile";
import recipeTypesReducer from "./controllers/recipeTypes";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    recipeTypes: recipeTypesReducer,
  },
});
