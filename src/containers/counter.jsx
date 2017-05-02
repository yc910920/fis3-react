/**
 * @file main.jsx
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
// import { render } from 'react-dom';



class Counter extends Component {
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