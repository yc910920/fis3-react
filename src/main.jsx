/**
 * @module main
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from '/src/components/hello';
import About from '/src/components/about';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Counter } from '/src/containers';
import { configureStore } from '/src/store';



ReactDOM.render(
    <Provider store={configureStore()}>
        <div>
            <Counter />
            <Hello />
            <About />
        </div>
    </Provider>,
    document.getElementById('app')
);