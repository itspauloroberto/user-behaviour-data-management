import { UsersList } from '../../../models/users';
// import { USERS } from '../../../routes';
import {
  setFetching,
  setList,
} from '../../../store/ducks/users/list/actions';
import { AppDispatch, AppThunk } from '../../AppThunk';

const fetchUsers = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(setFetching(true));
    try {
      const fakeList: UsersList = {
        users: [
          { id: 1, name: "John Doe", email: "john@doe.com.br", gender: "male", birthday: "2010-10-19T12:25:58.590Z" },
          { id: 2, name: "Foo Bar", email: "foo@bar.com.br", gender: "female", birthday: "2013-10-19T12:25:58.590Z" }
        ]
      };
      const { users }: UsersList = fakeList;
      dispatch(setList(users));
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export default fetchUsers;
