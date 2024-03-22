import { Outlet } from 'react-router-dom';
import { Layout } from './styles';

const { Sider } = Layout;

export const Home = () => (
  <Layout hasSider>
    <Sider theme='light'></Sider>
    <Outlet />
  </Layout>
);
