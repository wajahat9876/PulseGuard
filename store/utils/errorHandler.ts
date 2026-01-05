 

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {
  MutationLifecycleApi,
  QueryLifecycleApi,
} from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { userLogout } from '../slices/user/userSlice';
import { IAPIError } from '../types';
import { renderToastError } from '@/hooks/useToasty';

let lastCallTime = 0;

const isTimeExpired = () => {
  const currentTime = Date.now();
  if (currentTime - lastCallTime < 1500) {
    return false;
  }
  lastCallTime = currentTime;
  return true;
};

export const handleLogout = async (
  data: IAPIError | unknown,
  {
    dispatch,
  }: {
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  },
) => {
  console.log('this is the sessione xpired eror', data);

  const error = data?.error?.data || data?.error || data?.data || data?.message;

  if (
    error.message === 'Session Expired' ||
    error.message === 'Session expired. Please login again.' ||
    error.message === 'Login Session Expired' ||
    error.message === 'User Not Found' ||
    error.message === 'outdated jwt' ||
    error.message === 'jwt expired'
  ) {
    if (isTimeExpired()) {
      renderToastError(error?.message || 'something went wrong');
    }
    await new Promise(resolve => {
      dispatch(userLogout());

      resolve('Success!');
    });
  }
};

export const onMutationErrorHandler = async (
  args: unknown,
  {
    queryFulfilled,
    dispatch,
  }: MutationLifecycleApi<
    unknown,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      object,
      FetchBaseQueryMeta
    >,
    unknown,
    string
  >,
) => {
  try {
    await queryFulfilled;
  } catch (data: IAPIError | unknown) {
    const error =
      data?.error?.data || data?.error || data?.data || data?.message;
    if (
      error.message === 'Session Expired' ||
      error.message === 'Session expired. Please login again.' ||
      error.message === 'outdated jwt'
    ) {
      if (isTimeExpired()) {
        renderToastError(error?.message);
      }
      await new Promise(resolve => {
        dispatch(userLogout());
        resolve('Success!');
      });
    }
  }
};

export const onQueryStartedErrorHandler = async (
  args: unknown,
  {
    queryFulfilled,
    dispatch,
  }: QueryLifecycleApi<
    unknown,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      object,
      FetchBaseQueryMeta
    >,
    unknown,
    string
  >,
) => {
  try {
    await queryFulfilled;
  } catch (data: IAPIError | unknown) {
    const error =
      data?.error?.data || data?.error || data?.data || data?.message;

    if (
      error.message === 'Session Expired' ||
      error.message === 'Session expired. Please login again.' ||
      error.message === 'outdated jwt'
    ) {
      if (isTimeExpired()) {
        renderToastError(error?.message);
      }
      await new Promise(resolve => {
        dispatch(userLogout());
        resolve('Success!');
      });
    }
  }
};
