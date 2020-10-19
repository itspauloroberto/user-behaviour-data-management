import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import fetchUsers from '../../thunks/users/list';

function ListUsers() {
  const dispatch = useDispatch();
  const list = useTypedSelector(({ users }) => users.list.list);
  const isFetching = useTypedSelector(({ users }) => users.list.isFetching);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <p>list: </p> { JSON.stringify(list) }
    </div>
  );
}

export default ListUsers