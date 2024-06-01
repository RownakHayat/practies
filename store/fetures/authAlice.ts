import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apislice";


interface AuthState {
  user: any; // Define your user type here
}

const initialState: any = {
  user: null,
  permissions: [],
};

export const authApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: [],
  })
  .injectEndpoints({
    endpoints: (builder: any) => ({
      login: builder.mutation({
        query: (data: any) => ({
          url: "/auth/login",
          method: "POST",
          body: data,
        }),
        invalidatesTags: [],
      }),
    }),
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthInformation(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    addUserPermissions: (state, action: PayloadAction<{ user: any }>) => {
      state.permissions = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { addAuthInformation, addUserPermissions } = authSlice.actions;
export const { useLoginMutation } = authApi;
