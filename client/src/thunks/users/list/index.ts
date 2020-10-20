import { API } from '../../../config/axios';
import { UsersList } from '../../../models/users';
import { USERS } from '../../../routes';
import { setError } from '../../../store/ducks/users/edit/actions';
import {
  setFetching,
  setList,
} from '../../../store/ducks/users/list/actions';
import { AppDispatch, AppThunk } from '../../AppThunk';

interface AxiosResponseUsersList {
  data: UsersList
}

const fetchUsers = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(setFetching(true));
    try {
      const { data: { users } }: AxiosResponseUsersList = await API.get(USERS);
      dispatch(setList(users));
    } finally {
      dispatch(setFetching(false));
      dispatch(setError(false));
    }
  };
};

export default fetchUsers;
