export enum Types {
  SET_FETCHING = 'USER_REMOVE_SET_FETCHING',
  SET_ERROR = 'USER_REMOVE_SET_ERROR'
}

export interface State {
  readonly isFetching: boolean;
  readonly error: boolean;
}