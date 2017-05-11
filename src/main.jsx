/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Counter } from '/src/containers';
import { Home, About } from '/src/components';
import { configureStore } from '/src/store';
import { Icon, Layout, Menu } from 'antd';
const  { Sider, Header, Content, Footer } = Layout;
const  { SubMenu } = Menu;



ReactDOM.render(
    <Provider store={configureStore()}>
        <Layout id="layout">
            <Sider>
                <div className="logo" />
                <Menu mode="inline" theme="dark">
                    <SubMenu key="sub-01" title={<span><Icon type="appstore" /><span>menu 01</span></span>}>
                        <Menu.Item key="sub-01-01">nav 01</Menu.Item>
                        <Menu.Item key="sub-01-02">nav 02</Menu.Item>
                        <Menu.Item key="sub-01-03">nav 03</Menu.Item>
                        <Menu.Item key="sub-01-04">nav 04</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub-02" title={<span><Icon type="setting" /><span>menu 02</span></span>}>
                        <Menu.Item key="sub-02-01">nav 01</Menu.Item>
                        <Menu.Item key="sub-02-02">nav 02</Menu.Item>
                        <Menu.Item key="sub-02-03">nav 03</Menu.Item>
                        <Menu.Item key="sub-02-04">nav 04</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub-03" title={<span><Icon type="mail" /><span>menu 03</span></span>}>
                        <Menu.Item key="sub-03-01">nav 01</Menu.Item>
                        <Menu.Item key="sub-03-02">nav 02</Menu.Item>
                        <Menu.Item key="sub-03-03">nav 03</Menu.Item>
                        <Menu.Item key="sub-03-04">nav 04</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>此时你需要一个大大的微笑。并告诉自己，你可以的。</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </Provider>,
    document.getElementById('app')
);
/*<Router>
            <div>
                <ul>
                    <li><Link to="/">root</Link></li>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                <Route exact path="/" component={Counter} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>*/