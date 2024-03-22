import { HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { Home } from '../pages/home/home';

const { Content } = Layout;

export const AppRoutes = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('home');

  const handleMenuClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  let contentComponent;
  switch (selectedMenuItem) {
    case 'about':
      contentComponent = <About />;
      break;
    case 'contacts':
      contentComponent = <Contact />;
      break;
    default:
      contentComponent = <Home />;
  }

  return (
    <Layout>
      <Menu
        mode='horizontal'
        selectedKeys={[selectedMenuItem]}
        onClick={({ key }) => handleMenuClick(key)}
      >
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='about'>About</Menu.Item>
        <Menu.Item key='contacts'>Contacts</Menu.Item>
      </Menu>
      <Content style={{ padding: '0 50px', marginTop: 24 }}>
        <div className='site-layout-content'>{contentComponent}</div>
      </Content>
    </Layout>
  );
};
