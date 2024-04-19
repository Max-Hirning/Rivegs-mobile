import {IProfileStore} from "../types/profile";
import {IUser, userAPI} from "@src/modules/profile";
import {profileStoreModel} from "../models/profile";
import type {PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  reducers: {
    resetProfile: (state: IProfileStore) => {
      state.data = null;
      state.token = null;
    },
    setToken: (state: IProfileStore, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    setProfile: (state: IProfileStore, {payload}: PayloadAction<IUser>) => {
      state.data = payload;
    },
  },
  name: "profile",
  initialState: profileStoreModel,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state: IProfileStore) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, (state: IProfileStore) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.fulfilled, (state: IProfileStore, {payload}) => {
      state.isError = false;
      state.isLoading = false;
      state.data = payload;
    });
  },
});

export const fetchUser = createAsyncThunk("profile/fetchUser", async (userId: string) => {
  const response = await userAPI.get(userId);
  return response.data;
});
export const {setProfile, setToken, resetProfile} = profileSlice.actions;
export default profileSlice.reducer;
