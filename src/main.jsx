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
import { Layout, Menu } from 'antd';
const  { Sider, Header, Content, Footer } = Layout;



ReactDOM.render(
    <Provider store={configureStore()}>
        <Layout>
            <Sider>
                <div className="logo" />
                <Menu theme="dark">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
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