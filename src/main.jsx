/**
 * @file main.jsx
 * @desc module 入口
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Counter } from './containers';
import { configureStore } from './store';


ReactDOM.render(
    <Provider store={configureStore()}>
        <Counter />
    </Provider>,
    document.getElementById('app')
);
// console.log(configureStore().getState());