/* eslint-disable @typescript-eslint/no-unused-vars */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "@/constants/Config";
import { IUserState } from "@/store/slices/user/userSlice";

export const userMainApi = createApi({
  reducerPath: "userMainApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const { auth_token } = (getState() as { user: IUserState }).user;
      if (auth_token) {
        headers.set("Authorization", `Bearer ${auth_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // createUserBankAccount: builder.mutation<any, any>({
    //   query: body => ({
    //     url: 'users/moorwand/other-account',
    //     method: 'POST',
    //     body,
    //   }),
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       dispatch(userApi.util.invalidateTags(['getUserCurrent']));
    //     } catch (data: ICurrentResponse | any) {
    //       handleLogout(data, { dispatch });
    //     } finally {
    //       // do nothing
    //     }
    //   },
    // }),
  }),
});

// eslint-disable-next-line no-empty-pattern
export const {} = userMainApi;
