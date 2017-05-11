/**
 * @module app
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from '/src/routes';
import { configureStore } from '/src/store';
import { Icon, Layout, Menu } from 'antd';
const  { Sider, Header, Content, Footer } = Layout;
const  { SubMenu } = Menu;



export default class extends Component {
    render() {
        return (
            <Router>
                <Provider store={configureStore()}>
                    <Layout id="layout">
                        <Sider>
                            <div className="logo" />
                            <Menu mode="inline" theme="dark">
                                <SubMenu key="sub-01" title={<span><Icon type="appstore" /><span>menu 01</span></span>}>
                                    <Menu.Item key="sub-01-01"><Link to="/">root</Link></Menu.Item>
                                    <Menu.Item key="sub-01-02"><Link to="/home">home</Link></Menu.Item>
                                    <Menu.Item key="sub-01-03"><Link to="/about">about</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header>不要眼红别人比你做得好,只需要每天打破你自己的记录...无论发生了什么,都要记得微笑. </Header>
                            <Content>
                                <Routes />
                            </Content>
                            <Footer>蚂蚁金服体验技术部出品</Footer>
                        </Layout>
                    </Layout>
                </Provider>
            </Router>
        );
    }
}