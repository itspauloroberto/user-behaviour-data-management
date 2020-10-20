import { action } from 'typesafe-actions';
import { Types } from './types';

export const setFetching = (data: boolean) => action(Types.SET_FETCHING, data);
export const setError = (data: boolean) => action(Types.SET_ERROR, data);