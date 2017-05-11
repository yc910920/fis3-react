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
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;



ReactDOM.render(
    <Provider store={configureStore()}>
        
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