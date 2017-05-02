/**
 * @file main.jsx
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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