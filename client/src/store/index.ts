import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './ducks';
import { UsersState } from './ducks/users';

export interface ApplicationState {
  users: UsersState;
}

const middleware = applyMiddleware(thunk);
const store: Store<ApplicationState> = createStore(
  rootReducer,
  middleware,
);

export default store;
