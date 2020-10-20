import { API } from '../../../config/axios';
import { User } from '../../../models/users';
import { USERS } from '../../../routes';
import { setFetching, setError } from '../../../store/ducks/users/remove/actions';
import { AppDispatch, AppThunk } from '../../AppThunk';

const removeUser = (userData: User): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(setFetching(true));
    try {
      const response = await API.delete(`${USERS}/${userData.id}`);
      if (response.status !== 200) {
        dispatch(setError(true))
      }
    } catch {
      dispatch(setError(true))
    } finally {
      dispatch(setFetching(false));
      dispatch(setError(false));
    }
  };
};

export default removeUser
