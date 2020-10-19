import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import fetchUsers from '../../thunks/users/list';
import UserCard from './components/UserCard';
import { Skeleton, List } from 'antd';
import './index.css';

function ListUsers() {
  const dispatch = useDispatch();
  const list = useTypedSelector(({ users }) => users.list.list);
  const isFetching = useTypedSelector(({ users }) => users.list.isFetching);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <List
        itemLayout="horizontal"
        size="large"
        style={{ display: "flex", justifyContent: "flex-start" }}
        className="users-list"
        dataSource={list}
        renderItem={user => (
          <Skeleton
            loading={isFetching}
            active
            className="card-skeleton"
            avatar={{ size: 80 }}
            title={{ width: 300 }}
          >
            <UserCard user={user} />
          </Skeleton>
        )}
      />
    </>
  );
}

export default ListUsers;