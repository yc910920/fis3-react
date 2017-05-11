/**
 * @module _routes
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Counter } from '/src/containers';
import { Home, About } from '/src/components';



export default class extends Component {
    /**
     * @desc JSX
     */
    render() {
        return (
            <div>
                <Route path="/" exact component={Counter} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}