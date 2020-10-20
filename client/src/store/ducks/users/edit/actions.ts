import { action } from 'typesafe-actions';
import { User } from '../../../../models/users';
import { Types } from './types';

export const setFetching = (data: boolean) => action(Types.SET_FETCHING, data);
export const setUser = (data: User) => action(Types.SET_USER, data);
export const setError = (data: boolean) => action(Types.SET_ERROR, data);