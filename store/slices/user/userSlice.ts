import { userApi } from "@/store/api/user/userApi";
import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface IUserState {
  userEmail: string;
  auth_token: string;
  data: any;
}

// Initial state
const initialState: IUserState = {
  auth_token: "",
  userEmail: "",
  data: {},
};

// Actual Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout(state: IUserState) {
      state.auth_token = "";
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.data = payload.results;
      }
    );
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
