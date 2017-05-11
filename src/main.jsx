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
                    <SubMenu key="sub_menu_01" title={<span><Icon type="setting" /><span>menu</span></span>}>
                        <Menu.Item key="01">nav 01</Menu.Item>
                        <Menu.Item key="02">nav 02</Menu.Item>
                        <Menu.Item key="03">nav 03</Menu.Item>
                        <Menu.Item key="04">nav 04</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>Header</Header>
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