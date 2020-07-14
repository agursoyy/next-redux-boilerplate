// /store/auth/reducers.ts

import {
  AuthState,
  AuthActionTypes,
  LOGIN,
} from './types';

const initialState: AuthState = {
  user: null,
  message: 'not_logged_in'
};

export function authReducer(
  state = initialState,
  action: any // AuthActionTypes
): AuthState {
  switch (action.type) {
    case 'USER_LOGIN':
      return Object.assign(state, {}, {
        user: action.payload.user,
        message: action.payload.message
      });
    default:
      return state;
  }
}