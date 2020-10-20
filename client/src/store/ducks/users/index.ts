import { combineReducers } from 'redux';

import list from './list';
import edit from './edit';
import remove from './remove';
import { State as ListState } from './list/types';
import { State as EditState } from './edit/types';
import { State as RemoveState } from './remove/types';

export interface UsersState {
  list: ListState;
  edit: EditState;
  remove: RemoveState;
}

export default combineReducers<UsersState>({ list, edit, remove });
