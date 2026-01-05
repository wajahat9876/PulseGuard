

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "@/constants/Config";
import { IUserState } from "@/store/slices/user/userSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const {  auth_token } = (getState() as { user: IUserState })
        .user;

    if (auth_token) {
        headers.set("Authorization", `Bearer ${auth_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // verifySignIn: builder.mutation<IVerifySignInResponse, IVerifyOtpPayload>({
    //   query: verifySignInData => ({
    //     url: 'users/auth/verify-signin',
    //     method: 'POST',
    //     body: verifySignInData,
    //   }),
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       dispatch(userApi.util.invalidateTags(['getUserCurrent']));
    //     } catch (data: ICurrentResponse | any) {
    //       // handleLogout(data, { dispatch });
    //     } finally {
    //       // do nothing
    //     }
    //   },
    // }),
    // signUp: builder.mutation<ISignUpResponse, ISignUpPayload>({
    //   query: signUpData => ({
    //     url: 'users/auth/signup',
    //     method: 'POST',
    //     body: signUpData,
    //   }),
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       dispatch(userApi.util.invalidateTags(['getUserCurrent']));
    //     } catch (data: ICurrentResponse | any) {
    //       // handleLogout(data, { dispatch });
    //     } finally {
    //       // do nothing
    //     }
    //   },
    // }),
  }),
});

// eslint-disable-next-line no-empty-pattern
export const {} = authApi;
