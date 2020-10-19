import { action } from 'typesafe-actions';
import { User } from '../../../../models/users';
import { Types } from './types';

export const setFetching = (data: boolean) => action(Types.SET_FETCHING, data);
export const setList = (data: Array<User>) => action(Types.SET_LIST, data);