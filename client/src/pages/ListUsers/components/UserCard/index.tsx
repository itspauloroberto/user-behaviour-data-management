import React, { useState, useEffect } from 'react';
import { Card, Avatar, Typography, Input, Select } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { User, UserGenderEnum } from '../../../../models/users';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import editUser from '../../../../thunks/users/edit';
import fetchUsers from '../../../../thunks/users/list';
import { SelectValue } from 'antd/lib/select';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  const { Title, Paragraph } = Typography;
  const { Option } = Select;
  const { name } = user;
  const [isEditing, setEditing] = useState(false);
  const [localUser, setLocalUser] = useState(user);
  const [initials, setInitials] = useState('');

  const editError = useTypedSelector(({ users }) => users.edit.error);
  const list = useTypedSelector(({ users }) => users.list.list);

  const dispatch = useDispatch();

  const userGendersList: Array<UserGenderEnum> = ([ UserGenderEnum.undefined, UserGenderEnum.male, UserGenderEnum.female ])
  const getRandomColor = () => {
    let colors = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#f39c12'];
    return colors[Math.floor(Math.random() * (colors.length + 1))];
  };
  const generateNameInitials = () => {
    const fullName = name.split(' ');
    const [firstInitial] = fullName.shift();
    const [lastInitial] = fullName.pop();
    setInitials(`${firstInitial}${lastInitial}`);
  };
  const onChangeName = (name: string) => setLocalUser({ ...localUser, name });
  const onChangeEmail = (email: string) => setLocalUser({ ...localUser, email });
  const onChangeGender = (gender: SelectValue) => setLocalUser({ ...localUser, gender });

  const toggleEditingCard = () => {
    if (isEditing) {
      dispatch(editUser(localUser));
      generateNameInitials();
    }
    setEditing(!isEditing);
  };

  useEffect(() => generateNameInitials(), [list])

  useEffect(() => {
    setLocalUser(user)
  }, [user]);

  useEffect(() => {
    if (editError)
      dispatch(fetchUsers());
  }, [editError])

  return (
    <Card
      style={{ width: 250, marginRight: 10, borderRadius: 5 }}
      bodyStyle={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      actions={[
        <EditOutlined key="edit" onClick={toggleEditingCard} />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <>
        <Avatar
          size={80}
          gap={1}
          style={{
            backgroundColor: getRandomColor(),
            fontSize: 30,
            marginBottom: 10
          }}
        >
          {initials}
        </Avatar>
        {isEditing ? (
          <>
            <Input value={localUser.name} onChange={({ target: { value }}) => onChangeName(value)} />
            <Input value={localUser.email} onChange={({ target: { value }}) => onChangeEmail(value)} />
            <Select size="middle" value={localUser.gender} onChange={value => onChangeGender(value)} style={{ width: 200 }}>
              {
                userGendersList.map(gender => (
                <Option key={gender} value={UserGenderEnum[gender]}>{UserGenderEnum[gender]}</Option>
                ))
              }
            </Select>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Title level={3}>{localUser.name}</Title>
            <Paragraph type="secondary">{localUser.email}</Paragraph>
            <Paragraph type="secondary">{localUser.gender}</Paragraph>
          </div>
        )}
      </>
    </Card>
  );
}

export default UserCard;
