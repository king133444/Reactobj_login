import { UserOutlined ,LeftSquareOutlined} from '@ant-design/icons';
import { Layout, Menu, theme ,Divider} from 'antd';
import { useState } from 'react';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
 
  getItem('管理员', 'sub1', <UserOutlined />, [
    getItem('管理员1', '3'),
    getItem('管理员2', '4'),
    getItem('管理员3', '5'),
  ]),
  getItem('用户', 'sub2', <UserOutlined />, [getItem('用户1', '6'), getItem('用户2', '7')]),
  getItem('退出', '9', <LeftSquareOutlined />),
];
function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        
        <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '80px' }}
                    >
                       
                        <Menu.Item key="2"><a href="/login">登录</a></Menu.Item>
                        <Menu.Item key="3"><a href="/register">注册</a></Menu.Item>
                    </Menu>
        <Content
          style={{
            margin: '40px 16px',
          }}
        >
         
          <div
            style={{
              padding: 50,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <h2>Welcome to React!</h2>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         <Divider orientation="center" style={{fontSize:"10px"}}>React and Ant Design ©2023 Created by J.Alex</Divider>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;