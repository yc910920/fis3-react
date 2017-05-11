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
                        <Menu.Item key="sub-01-01">1</Menu.Item>
                        <Menu.Item key="sub-01-02">2</Menu.Item>
                        <Menu.Item key="sub-01-03">3</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>此时你需要一个大大的微笑。并告诉自己，你可以的。</Header>
                <Content>
                    <Router>
                        <div>
                            <Route exact path="/" component={Counter} />
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </Router>
                </Content>
                <Footer>蚂蚁金服体验技术部出品</Footer>
            </Layout>
        </Layout>
    </Provider>,
    document.getElementById('app')
);