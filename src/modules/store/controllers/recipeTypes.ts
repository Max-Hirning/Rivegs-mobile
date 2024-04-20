import {changeTypeId} from "./filters";
import type {PayloadAction} from "@reduxjs/toolkit";
import {IRecipeTypesStore} from "../types/recipeTypes";
import {recipeTypesStoreModel} from "../models/recipeTypes";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {recipeTypesAPI, IRecipeType} from "@src/modules/recipeForm";

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

export const fetchRecipeTypes = createAsyncThunk("recipeTypes/fetchRecipeTypes", async (_, thunkAPI) => {
  const response = await recipeTypesAPI.get();
  thunkAPI.dispatch(changeTypeId(response.data[0]._id));
  return response.data;
});
export const {setRecipeTypes} = recipeTypesSlice.actions;
export default recipeTypesSlice.reducer;
