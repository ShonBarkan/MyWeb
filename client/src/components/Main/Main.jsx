import React from 'react';
import { Layout, Menu, theme } from 'antd';
import ToDos from '../ToDos/‏‏ToDos2/ToDos';
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      return (
        <Layout style={{height:'100vh'}}>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '40px',
              padding: '20px',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ToDos/>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Shon Barkan ©{new Date().getFullYear()} Created by Me
          </Footer>
        </Layout>
      );
    };
    
export default Main;
