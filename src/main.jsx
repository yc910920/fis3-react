/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Counter } from '/src/containers';
import { Home, About } from '/src/components';
import { configureStore } from '/src/store';



ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">root</Link></li>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                <Switch>
                    <Route path="/" component={Counter} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);