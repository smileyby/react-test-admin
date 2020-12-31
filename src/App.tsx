import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Login from './pages/login/login';
import Index from './pages/index/index';
import Role from './pages/manage/role';
import Auth from './pages/manage/auth';
import User from './pages/manage/user';
import Page404 from './pages/page_404/page_404';
import MyBreadcrumb from './components/myBreadcrumb/myBreadcrumb';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AndroidOutlined,
  UnlockOutlined,
  RocketOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
    return (
      <>
        <BrowserRouter>
          <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<RocketOutlined />}>
                  <NavLink to="/index">首页</NavLink>
                </Menu.Item>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="管理中心">
                  <Menu.Item key="2" icon={<UserOutlined />}>
                    <NavLink to="/manage/user">用户管理</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<AndroidOutlined />}>
                    <NavLink to="/manage/role">角色管理</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<UnlockOutlined />}>
                    <NavLink to="/manage/auth">权限管理</NavLink>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content className="site-layout" style={{ padding: '0 20px' }}>
                <MyBreadcrumb></MyBreadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                  <Switch>
                    <Route path="/" exact render={()=><Redirect to="/index"></Redirect>}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/manage/role" component={Role}></Route>
                    <Route path="/manage/auth" component={Auth}></Route>
                    <Route path="/manage/user" component={User}></Route>
                    <Route path="*" component={Page404}></Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
