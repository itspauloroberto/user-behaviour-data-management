import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ApplicationState } from '../store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<void, void, Action<string>>;
