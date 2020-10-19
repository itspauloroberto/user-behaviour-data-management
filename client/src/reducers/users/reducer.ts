import {
  USERS_LIST_FETCHING,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAILURE,
} from '../../models/users/constants';

const INITIALSTATE = {
  list: [],
  isFetching: false,
  error: null
};

export default function (state = INITIALSTATE, action) {
  switch (action.type) {
    case USERS_LIST_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case USERS_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return { ...state }
  }
};