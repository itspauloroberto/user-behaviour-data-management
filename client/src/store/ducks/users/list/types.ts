import { UsersList } from '../../../../models/users';

export enum Types {
  SET_FETCHING = 'USERS_LIST_SET_FETCHING',
  SET_LIST = 'USERS_LIST_SET_LIST'
}

export interface State {
  readonly isFetching: boolean;
  readonly list: Array<UsersList>;
}