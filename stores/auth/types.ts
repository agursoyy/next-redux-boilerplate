// /store/auth/types.ts
import { HYDRATE } from 'next-redux-wrapper';

export const LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export type auth_status = 'logged_in' | 'not_logged_in';

export interface AuthState {
  user: any;
  message: auth_status;
  login_request: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface Auth {
  user: any;
  message: auth_status;
  accessToken: string;
  refreshToken: string;
}

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: Auth;
}

export type AuthActionTypes = LoginRequest | LoginSuccess;
