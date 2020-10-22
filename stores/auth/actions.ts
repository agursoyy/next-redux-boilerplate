import { AuthActionTypes, LOGIN_SUCCESS } from './types';

export function login({ email, password }: { email: string; password: string }) {
  return async (dispatch: any) => {
    const user = { email, password };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user,
        message: 'logged_in',
        accessToken: 'token',
        refreshToken: 'token',
      },
    });
  };
}
