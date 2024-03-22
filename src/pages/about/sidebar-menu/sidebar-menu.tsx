import { Menu } from 'antd';

export const SidebarMenu = () => {
  console.log('pii');
  const menuList = [
    {
      key: 'menu-group-1',
      label: 'About',
      type: 'group',
      children: [
        {
          key: 'about',
          label: 'boa noite',
        },
        {
          key: 'products',
          label: 'oii',
        },
      ],
    },
  ];

  return <Menu expandIcon={false} mode='inline' theme='light' items={menuList} selectedKeys={[]} />;
};
