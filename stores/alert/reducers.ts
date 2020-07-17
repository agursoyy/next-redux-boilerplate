import { AlertState, AlertActionTypes } from './types';

const initialState: AlertState | {} = {};
export const alertReducer = (state = initialState, action: AlertActionTypes): typeof initialState => {
  switch (action.type) {
    case 'ALERT_SUCCESS':
      return { type: 'alert-success', message: action.payload };
    case 'ALERT_ERROR':
      return { type: 'alert-danger', message: action.payload };
    case 'ALERT_CLEAR':
      return {};
    default:
      return initialState;
  }
};