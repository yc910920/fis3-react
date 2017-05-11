/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import T from '/src/components/t';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Counter } from '/src/containers';
import { configureStore } from '/src/store';



ReactDOM.render(
    <Provider store={configureStore()}>
        <Counter />
    </Provider>,
    document.getElementById('app')
);