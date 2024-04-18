import type {PayloadAction} from "@reduxjs/toolkit";
import {IRecipeTypesStore} from "../types/recipeTypes";
import {recipeTypesStoreModel} from "../models/recipeTypes";
import {recipeTypesAPI, IRecipeType} from "../../recipeForm";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const recipeTypesSlice = createSlice({
  reducers: {
    setRecipeTypes: (state: IRecipeTypesStore, {payload}: PayloadAction<IRecipeType[]>) => {
      state.data = payload;
    },
  },
  name: "recipeTypes",
  initialState: recipeTypesStoreModel,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeTypes.pending, (state: IRecipeTypesStore) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchRecipeTypes.rejected, (state: IRecipeTypesStore) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchRecipeTypes.fulfilled, (state: IRecipeTypesStore, {payload}) => {
      state.isError = false;
      state.isLoading = false;
      state.data = payload;
    });
  },
});

export const fetchRecipeTypes = createAsyncThunk("recipeTypes/fetchUser", async () => {
  const response = await recipeTypesAPI.get();
  return response.data;
});
export const {setRecipeTypes} = recipeTypesSlice.actions;
export default recipeTypesSlice.reducer;
