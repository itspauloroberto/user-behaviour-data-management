import { Reducer } from 'redux';
import { Types, State } from './types';

const initialState: State = {
  isFetching: false,
  list: [],
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_FETCHING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case Types.SET_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
