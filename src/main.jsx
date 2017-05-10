/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Counter } from '/src/containers';
import { configureStore } from '/src/store';



ReactDOM.render(
    <Provider store={configureStore()}>
        <Counter />
    </Provider>,
    document.getElementById('app')
);