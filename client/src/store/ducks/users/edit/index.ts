import { Reducer } from 'redux';
import { Types, State } from './types';

const initialState: State = {
  isFetching: false,
  user: null,
  error: false
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_FETCHING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case Types.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case Types.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
