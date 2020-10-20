import { API } from '../../../config/axios';
import { User, UserWithoutId } from '../../../models/users';
import { USERS } from '../../../routes';
import { setFetching, setUser, setError } from '../../../store/ducks/users/edit/actions';
import { AppDispatch, AppThunk } from '../../AppThunk';

const editUser = (userData: User): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(setFetching(true));
    try {
      const { name, email, birthday, gender } = userData;
      const body: UserWithoutId = { name, email, birthday, gender };
      const response = await API.patch(`${USERS}/${userData.id}`, body);
      if (response.status !== 200) {
        dispatch(setUser(userData))
      }
    } catch {
      dispatch(setError(true))
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export default editUser;
