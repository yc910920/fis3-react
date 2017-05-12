/**
 * @module app
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Routes } from '/src/routes';
import { configureStore } from '/src/store';
import { Icon, Layout, Menu } from 'antd';
const  { Sider, Header, Content, Footer } = Layout;
const  { SubMenu } = Menu;



export default class extends Component {

    state = {
        openKeys: [],
        selectedKeys: []
    };


    /**
     * @desc JSX
     */
    render() {
        const menuProps = {
            mode: 'inline',
            theme: 'dark',
            openKeys: this.state.openKeys,
            selectedKeys: this.state.selectedKeys,
            onOpenChange: openKeys => this.setState({ openKeys: [ openKeys.pop() ] }),
            onClick: e => this.setState({ selectedKeys: [ e.key ] })
        };
        return (
            <Router>
                <Provider store={configureStore()}>
                    <Layout id="layout">
                        <Sider id="sider">
                            <div className="logo">
                                F.I.S & React
                            </div>
                            <Menu id="menu" {...menuProps}>
                                <SubMenu key="01" title={<span><Icon type="appstore" /><span>这是什么</span></span>}>
                                    <Menu.Item key="01-01"><Link to="/dome1">DOME1</Link></Menu.Item>
                                    <Menu.Item key="01-02"><Link to="/dome2">DOME2</Link></Menu.Item>
                                    <Menu.Item key="01-03"><Link to="/dome3">DOME3</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="02" title={<span><Icon type="appstore" /><span>破菜单呗</span></span>}>
                                    <Menu.Item key="02-01"><Link to="/dome1">DOME1</Link></Menu.Item>
                                    <Menu.Item key="02-02"><Link to="/dome2">DOME2</Link></Menu.Item>
                                    <Menu.Item key="02-03"><Link to="/dome3">DOME3</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout id="container">
                            <Header id="header">不要眼红别人比你做得好,只需要每天打破你自己的记录...无论发生了什么,都要记得微笑. </Header>
                            <Content id="content">
                                <Routes />
                            </Content>
                            <Footer id="footer">蚂蚁金服体验技术部出品</Footer>
                        </Layout>
                    </Layout>
                </Provider>
            </Router>
        );
    }
}