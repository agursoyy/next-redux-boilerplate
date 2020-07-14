import { Auth, LOGIN, AuthActionTypes } from './types';

export function login({ email, password }: { email: string, password: string }): AuthActionTypes {
  const user = { email, password };
  return { type: 'USER_LOGIN', payload: { user, message: 'logged_in' } };
}

