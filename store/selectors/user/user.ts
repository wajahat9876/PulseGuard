 
import { RootState } from '@/store';

export const useAuthToken = (state: RootState) => state.user.auth_token;

export const useUser = (state: RootState) => state.user;
