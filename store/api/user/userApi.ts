/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/order */
/* eslint-disable import/prefer-default-export */
import Config from "@/constants/Config";
import { IUserState } from "@/store/slices/user/userSlice";
import {
  ICurrentResponse,
  IVerifySignInResponse,
} from "@/store/types/user/api_responses/auth";
import { handleLogout } from "@/store/utils/errorHandler";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["getUserCurrent"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IVerifySignInResponse, void>({
      query: () => ({
        url: "users/auth/current",
        method: "GET",
      }),
      providesTags: ["getUserCurrent"],

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (data: ICurrentResponse | any) {
          handleLogout(data, { dispatch });
        } finally {
          // do nothing
        }
      },
    }),
  }),
});

export const { useGetCurrentUserQuery, useLazyGetCurrentUserQuery } = userApi;
