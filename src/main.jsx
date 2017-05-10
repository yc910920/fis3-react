/**
 * @file main.jsx
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { 
    Counter
 } from './containers';



ReactDOM.render(
    <div>
        hello world
        <Counter />
    </div>,
    document.getElementById('app')
);
// console.log(Store);
console.log(store);