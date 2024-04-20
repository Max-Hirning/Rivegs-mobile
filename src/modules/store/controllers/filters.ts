import {createSlice} from "@reduxjs/toolkit";
import {IFiltersStore} from "../types/filters";
import type {PayloadAction} from "@reduxjs/toolkit";
import {filtersStoreModel} from "../models/filters";

export const filtersSlice = createSlice({
  reducers: {
    changePage: (state: Omit<IFiltersStore, "recipesIds">) => {
      state.page = state.page + 1;
    },
    changeTitle: (state: Omit<IFiltersStore, "recipesIds">, {payload}: PayloadAction<string>) => {
      state.title = payload;
    },
    changeTypeId: (state: Omit<IFiltersStore, "recipesIds">, {payload}: PayloadAction<string>) => {
      state.typeId = payload;
    },
    setFilter: (state: Omit<IFiltersStore, "recipesIds">, {payload}: PayloadAction<Pick<IFiltersStore, "rate"|"authorLogin">>) => {
      return ({
        ...state,
        ...payload,
      });
    },
  },
  name: "filters",
  initialState: filtersStoreModel,
});

export const {changePage, changeTitle, changeTypeId, setFilter} = filtersSlice.actions;
export default filtersSlice.reducer;
