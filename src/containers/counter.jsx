/**
 * @file main.jsx
 * @desc 加减器
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export class Counter extends Component {
    state = {
        count: 0
    };


    render() {
        let { count } = this.state;
        return (
            <div>
                { count }
            </div>
        );
    }
}