import { SUCCESS, CLEAR, ERROR, AlertActionTypes } from './types';

export const success = (message: string): AlertActionTypes => {
  return { type: SUCCESS, payload: message };
};

export const error = (message: string): AlertActionTypes => {
  return { type: ERROR, payload: message };
};

export const clear = (message: string): AlertActionTypes => {
  return { type: CLEAR };
};
