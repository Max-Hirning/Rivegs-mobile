import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./controllers/profile";
import filtersReducer from "./controllers/filters";
import recipeTypesReducer from "./controllers/recipeTypes";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    filters: filtersReducer,
    recipeTypes: recipeTypesReducer,
  },
});
