/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, About } from '/src/components';
import { Counter } from '/src/containers';
import { configureStore } from '/src/store';



ReactDOM.render(
    <Provider store={configureStore()}>
        <div>
            <Counter />
            <Home />
            <About />
        </div>
    </Provider>,
    document.getElementById('app')
);