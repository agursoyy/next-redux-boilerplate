// /store/auth/types.ts

export const LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const LOGIN = 'USER_LOGIN';


export type auth_status = 'logged_in' | 'not_logged_in';

export interface Auth {
  user: any
  message: auth_status
}

export interface AuthState {
  user: any,
  message: auth_status
}



interface Login {
  type: typeof LOGIN
  payload: Auth
}
export type AuthActionTypes = Login
