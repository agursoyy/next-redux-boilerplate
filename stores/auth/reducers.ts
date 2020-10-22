import { AuthState, AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

const initialState: AuthState = {
  user: null,
  message: 'not_logged_in',
  login_request: false,
  accessToken: null,
  refreshToken: null,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes, // AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        login_request: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        login_request: false,
      };
    default:
      return state;
  }
}
