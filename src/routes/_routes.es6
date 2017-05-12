/**
 * @module _routes
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Home } from '/src/containers';



export default class extends Component {

    /**
     * @desc JSX
     */
    render() {
        return (
            <div>
                <Route path="/" component={Home} exact />
            </div>
        );
    }
}