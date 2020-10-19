import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import { User } from '../../../../models/users';

interface UserCardProps {
  user: User;
}

function UserCard({ user: { name, email, gender } }: UserCardProps) {
  const { Title, Paragraph } = Typography;

  const getRandomColor = () => {
    let colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    return colors[Math.floor(Math.random() * 4)];
  };
  const getNameInitials = () => {
    const [firstName, lastName]: string[] = name.split(' ');
    const [firstInitial]: string = firstName;
    const [lastInitial]: string = lastName;
    return `${firstInitial}${lastInitial}`;
  };

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
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Avatar
        size={80}
        gap={1}
        style={{
          backgroundColor: getRandomColor(),
          fontSize: 30,
          marginBottom: 10
        }}
      >
        {getNameInitials()}
      </Avatar>
      <div style={{ textAlign: 'center' }}>
        <Title level={3}>{name}</Title>
        <Paragraph type="secondary">{email}</Paragraph>
        <Paragraph type="secondary">{gender}</Paragraph>
      </div>
    </Card>
  );
}

export default UserCard;
