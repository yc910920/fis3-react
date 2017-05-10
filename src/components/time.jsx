/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';



// connect: injection into components store
export default class extends Component {
    render() {
        return <div>{Date.now()}</div>
    }
}