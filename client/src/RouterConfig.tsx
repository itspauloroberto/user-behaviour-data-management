import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeFilled,
  UserOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ListUsers from './pages/ListUsers'

function AppRouter(){

  const { Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const Index = () => pageWithLayout(<h2>Home</h2>);
  const NewUser = () => pageWithLayout(<h2>User signup</h2>);
  const UserDetails = () => pageWithLayout(<h2>Details for user ID X</h2>);

  const pageWithLayout = (page: JSX.Element) => <AppLayout mainContent={page} collapsed={collapsed} setCollapsed={setCollapsed} />
  const ListUsersWithLayout = () => pageWithLayout(<ListUsers />);

  return (
    <Router>
      <Layout>
        <Sider width={150} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeFilled />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/users">See users</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Route path="/" exact component={Index} />
        <Route path="/users" exact component={ListUsersWithLayout} />
        <Route path="/users/new" exact component={NewUser} />
        <Route path="/users/:id" component={UserDetails} />
      </Layout>
    </Router>
  );
};

export default AppRouter;
