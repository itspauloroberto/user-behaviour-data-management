import { combineReducers } from 'redux';

import list from './list';
import { State as ListState } from './list/types';

export interface UsersState {
  list: ListState;
}

export default combineReducers<UsersState>({ list });
