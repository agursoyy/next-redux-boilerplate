export const SUCCESS = 'ALERT_SUCCESS';
export const ERROR = 'ALERT_ERROR';
export const CLEAR = 'ALERT_CLEAR';

export interface AlertState {
  type: 'alert-success' | 'alert-danger';
  message: string;
}

interface SuccessErrorAction {
  // action type
  type: typeof SUCCESS | typeof ERROR;
  payload: string; // message itself.
}

interface ClearAction {
  type: typeof CLEAR;
}

export type AlertActionTypes = SuccessErrorAction | ClearAction;
