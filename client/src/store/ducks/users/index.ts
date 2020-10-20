import { combineReducers } from 'redux';

import list from './list';
import edit from './edit';
import { State as ListState } from './list/types';
import { State as EditState } from './edit/types';

export interface UsersState {
  list: ListState;
  edit: EditState;
}

export default combineReducers<UsersState>({ list, edit });
