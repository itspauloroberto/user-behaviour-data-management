import { User } from "../../../../models/users";

export enum Types {
  SET_FETCHING = 'USER_EDIT_SET_FETCHING',
  SET_USER = 'USER_EDIT_SET_USER',
  SET_ERROR = 'USER_EDIT_SET_ERROR'
}

export interface State {
  readonly isFetching: boolean;
  readonly user: User | null;
  readonly error: boolean;
}