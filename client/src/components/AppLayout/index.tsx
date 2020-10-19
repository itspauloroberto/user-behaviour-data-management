import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionOutlined,
  UserOutlined
} from '@ant-design/icons';
import './index.css';

interface AppLayoutProps {
  mainContent: ReactNode;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

function AppLayout({ mainContent, collapsed, setCollapsed }: AppLayoutProps) {

  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {mainContent}
      </Content>
      <Footer>
        <QuestionOutlined />
        <UserOutlined />
      </Footer>
    </Layout>
  )
}

export default AppLayout